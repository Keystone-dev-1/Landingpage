// POST /.netlify/functions/simulator-lead
// Receives the Simulator lead form and forwards it to GoHighLevel.
// The webhook URL is NOT in the code (this repo is public):
// Netlify → Project configuration → Environment variables → GHL_WEBHOOK_URL
const REQUIRED = ['email', 'company', 'phone', 'ai_blocking', 'company_size', 'industry'];

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };

  let d = {};
  try {
    const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : (event.body || '');
    d = ((event.headers || {})['content-type'] || '').includes('application/json') ? JSON.parse(raw) : Object.fromEntries(new URLSearchParams(raw));
  } catch (e) { return { statusCode: 400, body: 'Bad request' }; }

  if (d['bot-field']) return { statusCode: 200, body: 'ok' };            // honeypot: silently drop bots
  const missing = REQUIRED.filter((k) => !String(d[k] || '').trim());
  if (missing.length || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(d.email).trim()))
    return { statusCode: 422, body: 'Missing or invalid: ' + (missing.join(', ') || 'email') };

  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) { console.error('GHL_WEBHOOK_URL is not set'); return { statusCode: 503, body: 'Lead destination not configured' }; }

  const s = (k) => String(d[k] || '').trim().slice(0, 300);
  const lead = {
    email: s('email'), phone: s('phone'), company_name: s('company'),
    ai_blocking: s('ai_blocking'), company_size: s('company_size'),
    industry: d.industry === 'Other' && d.industry_other ? 'Other: ' + s('industry_other') : s('industry'),
    computers: s('computers'), ai_users: s('ai_users'), shadow_ai_users: s('shadow_ai_users'),
    prompts_per_day: s('prompts_per_day'), prompts_per_year: s('prompts_per_year'),
    sensitive_prompts_per_day: s('sensitive_prompts_per_day'), sensitive_prompts_per_year: s('sensitive_prompts_per_year'),
    cat_customer_personal_data: s('cat_customer_personal_data'), cat_employee_data: s('cat_employee_data'),
    cat_legal_finance: s('cat_legal_finance'), cat_security: s('cat_security'),
    cat_source_code: s('cat_source_code'),
    source: 'fairwall.ai/simulator', tags: 'fairwall-simulator', submitted_at: new Date().toISOString()
  };

  try {
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
    if (!r.ok) { console.error('GHL responded', r.status, await r.text()); return { statusCode: 502, body: 'Lead destination error' }; }
    return { statusCode: 200, body: 'ok' };
  } catch (e) {
    console.error('GHL request failed', e);
    return { statusCode: 502, body: 'Lead destination unreachable' };
  }
};
