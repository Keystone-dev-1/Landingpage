// Runs automatically on every verified Netlify Forms submission (event-triggered function).
// Forwards Simulator leads to GoHighLevel. The webhook URL is NOT in the code:
// set it in Netlify → Project configuration → Environment variables → GHL_WEBHOOK_URL
exports.handler = async (event) => {
  let payload;
  try { payload = JSON.parse(event.body).payload; } catch (e) { return { statusCode: 400, body: 'bad payload' }; }
  if (!payload || payload.form_name !== 'simulator-lead') return { statusCode: 200, body: 'ignored' };

  const url = process.env.GHL_WEBHOOK_URL;
  if (!url || /\/undefined\/?$/.test(url)) {
    console.error('GHL_WEBHOOK_URL is missing or incomplete; lead kept in Netlify Forms only.');
    return { statusCode: 200, body: 'no webhook configured' };
  }

  const d = payload.data || {};
  const industry = d.industry === 'Other' && d.industry_other ? 'Other: ' + d.industry_other : d.industry;
  const lead = {
    email: d.email,
    phone: d.phone,
    company_name: d.company,
    ai_blocking: d.ai_blocking,
    company_size: d.company_size,
    industry: industry,
    computers: d.computers,
    ai_users: d.ai_users,
    shadow_ai_users: d.shadow_ai_users,
    prompts_per_day: d.prompts_per_day,
    prompts_per_year: d.prompts_per_year,
    sensitive_prompts_per_day: d.sensitive_prompts_per_day,
    sensitive_prompts_per_year: d.sensitive_prompts_per_year,
    cat_customer_personal_data: d.cat_customer_personal_data,
    cat_employee_data: d.cat_employee_data,
    cat_financial_data: d.cat_financial_data,
    cat_source_code_credentials: d.cat_source_code_credentials,
    cat_legal_strategic: d.cat_legal_strategic,
    source: 'fairwall.ai/simulator',
    tags: 'fairwall-simulator',
    submitted_at: payload.created_at,
    netlify_submission_id: payload.id
  };

  try {
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
    if (!r.ok) console.error('GHL webhook responded', r.status, await r.text());
    return { statusCode: 200, body: 'forwarded' };
  } catch (e) {
    console.error('GHL webhook failed', e);
    return { statusCode: 200, body: 'forward failed; lead kept in Netlify Forms' };
  }
};
