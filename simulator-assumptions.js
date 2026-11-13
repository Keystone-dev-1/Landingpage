/*
 * Fairwall AI · Simulator assumptions
 * -----------------------------------
 * EVERY number on /simulator is derived from:  computers × the values below.
 * There are no random numbers and no hidden constants anywhere else.
 *
 * To change a value: edit `value` and update `source` (and `url` if there is one).
 * The "How we calculate this" panel on the page lists everything in this file,
 * so what you write in `label`, `unit`, `source` and `url` is shown to visitors.
 *
 * Status (Nov 2026): values are taken from published studies where one exists, and
 * clearly marked as assumptions where none does. Replace them with measured figures
 * from Fairwall AI customer deployments as they become available.
 *
 * (Plain JavaScript rather than TypeScript: the site is static and has no build step.)
 */
window.SIMULATOR_ASSUMPTIONS = {
  usersPerComputer: {
    label: 'Users per computer',
    value: 1.0,
    unit: 'employees per computer',
    source: 'Assumption: one primary user per work computer.'
  },
  aiAdoptionRate: {
    label: 'AI adoption rate',
    value: 0.75,
    unit: 'share of employees using AI tools at work',
    source: 'Microsoft & LinkedIn, 2024 Work Trend Index (31,000 knowledge workers, 31 countries): 75% of knowledge workers use AI at work.',
    url: 'https://blogs.microsoft.com/blog/2024/05/08/microsoft-and-linkedin-release-the-2024-work-trend-index-on-the-state-of-ai-at-work/'
  },
  shadowAiRate: {
    label: 'Shadow AI rate',
    value: 0.78,
    unit: 'share of AI users bringing their own, unapproved AI tools',
    source: 'Microsoft & LinkedIn, 2024 Work Trend Index: 78% of AI users bring their own AI tools to work ("BYOAI").',
    url: 'https://blogs.microsoft.com/blog/2024/05/08/microsoft-and-linkedin-release-the-2024-work-trend-index-on-the-state-of-ai-at-work/'
  },
  promptsPerUserPerDay: {
    label: 'Prompts per AI user',
    value: 5,
    unit: 'prompts per working day',
    source: 'LayerX, State of AI Usage report: AI conversations average about 5 prompts each. Combined with our assumption of one AI conversation per AI user per working day.',
    url: 'https://layerxsecurity.com/library/reports/state-of-ai-usage-report-2026/'
  },
  workdaysPerYear: {
    label: 'Working days',
    value: 220,
    unit: 'days per year',
    source: 'Approximation for Austria: about 261 weekdays, minus public holidays on weekdays, 25 days of statutory annual leave and some sick days.'
  },
  sensitivePromptRate: {
    label: 'Sensitive prompt rate',
    value: 0.085,
    unit: 'share of prompts containing sensitive data',
    source: 'Harmonic Security, analysis of tens of thousands of enterprise prompts to ChatGPT, Copilot, Gemini, Claude and Perplexity (Q4 2024): 8.5% contained sensitive data.',
    url: 'https://www.harmonic.security/resources/new-research-the-data-leaking-into-genai-tools'
  },

  /* Breakdown of sensitive prompts. Shares must add up to 1.0.
     `severity` only controls the colour on the page (critical = red, high = orange, medium = amber). */
  categories: [
    { key: 'customer',     label: 'Customer data',            share: 0.458, severity: 'high',     example: 'Customer reports, billing and payment details',
      source: 'Harmonic Security (Q4 2024): 45.8% of sensitive prompts.', url: 'https://www.helpnetsecurity.com/2025/01/20/genai-prompts-risk/' },
    { key: 'employee',     label: 'Employee data',            share: 0.268, severity: 'high',     example: 'Payroll, personal identifiers, employment records',
      source: 'Harmonic Security (Q4 2024): 26.8% of sensitive prompts.', url: 'https://www.helpnetsecurity.com/2025/01/20/genai-prompts-risk/' },
    { key: 'legalFinance', label: 'Legal & finance data',     share: 0.149, severity: 'high',     example: 'Sales pipeline, investments, M&A, legal matters',
      source: 'Harmonic Security (Q4 2024): 14.9% of sensitive prompts.', url: 'https://www.helpnetsecurity.com/2025/01/20/genai-prompts-risk/' },
    { key: 'security',     label: 'Security data',            share: 0.069, severity: 'critical', example: 'Network configurations, pen-test results, incident reports',
      source: 'Harmonic Security (Q4 2024): 6.9% of sensitive prompts.', url: 'https://www.helpnetsecurity.com/2025/01/20/genai-prompts-risk/' },
    { key: 'code',         label: 'Source code & access keys', share: 0.056, severity: 'critical', example: 'Proprietary code, API and access keys',
      source: 'Harmonic Security (Q4 2024): 5.6% of sensitive prompts.', url: 'https://www.helpnetsecurity.com/2025/01/20/genai-prompts-risk/' }
  ]
};

/* Plain-language formulas, shown in the "How we calculate this" panel. */
window.SIMULATOR_FORMULAS = [
  { key: 'aiUsers',                 label: 'AI users',                    text: 'computers × users per computer × AI adoption rate' },
  { key: 'shadowAiUsers',           label: 'Shadow AI users',             text: 'AI users × shadow AI rate' },
  { key: 'promptsPerDay',           label: 'AI prompts per working day',  text: 'AI users × prompts per AI user per day' },
  { key: 'promptsPerYear',          label: 'AI prompts per year',         text: 'prompts per day × working days per year' },
  { key: 'sensitivePromptsPerDay',  label: 'Sensitive prompts per day',   text: 'prompts per day × sensitive prompt rate' },
  { key: 'sensitivePromptsPerYear', label: 'Sensitive prompts per year',  text: 'prompts per year × sensitive prompt rate' },
  { key: 'categories',              label: 'Per category',                text: 'sensitive prompts per year × category share (rounded so the categories add up to the total)' }
];

/* Pure calculation. Same input → same output, always. */
window.computeSimulation = function (computers) {
  var A = window.SIMULATOR_ASSUMPTIONS;
  var aiUsers = computers * A.usersPerComputer.value * A.aiAdoptionRate.value;
  var shadowAiUsers = aiUsers * A.shadowAiRate.value;
  var promptsPerDay = aiUsers * A.promptsPerUserPerDay.value;
  var promptsPerYear = promptsPerDay * A.workdaysPerYear.value;
  var sensitivePromptsPerDay = promptsPerDay * A.sensitivePromptRate.value;
  var sensitivePromptsPerYear = promptsPerYear * A.sensitivePromptRate.value;

  // Split the (rounded) yearly total across categories with the largest-remainder
  // method, so the category rows always add up exactly to the total shown.
  var total = Math.round(sensitivePromptsPerYear);
  var raw = A.categories.map(function (c) { return total * c.share; });
  var base = raw.map(Math.floor);
  var left = total - base.reduce(function (s, x) { return s + x; }, 0);
  raw.map(function (x, i) { return { i: i, r: x - Math.floor(x) }; })
     .sort(function (a, b) { return b.r - a.r || a.i - b.i; })
     .slice(0, left).forEach(function (o) { base[o.i]++; });

  return {
    computers: computers,
    aiUsers: aiUsers,
    shadowAiUsers: shadowAiUsers,
    promptsPerDay: promptsPerDay,
    promptsPerYear: promptsPerYear,
    sensitivePromptsPerDay: sensitivePromptsPerDay,
    sensitivePromptsPerYear: sensitivePromptsPerYear,
    categories: A.categories.map(function (c, i) {
      return { key: c.key, label: c.label, severity: c.severity, share: c.share, count: base[i] };
    })
  };
};
