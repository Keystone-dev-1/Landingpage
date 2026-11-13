/*
 * Fairwall AI · Simulator assumptions
 * -----------------------------------
 * EVERY number on /simulator is derived from:  computers × the values below.
 * There are no random numbers and no hidden constants anywhere else.
 *
 * To change a value: edit `value` (and `source` once you have verified it).
 * The "How we calculate this" panel on the page lists everything in this file,
 * so what you write in `label`, `unit` and `source` is shown to visitors.
 *
 * (Plain JavaScript rather than TypeScript: the site is static and has no build step.)
 */
window.SIMULATOR_ASSUMPTIONS = {
  usersPerComputer: {
    label: 'Users per computer',
    value: 1.0,
    unit: 'employees per computer',
    source: 'Placeholder, to be verified. Assumes one primary user per work computer.'
  },
  aiAdoptionRate: {
    label: 'AI adoption rate',
    value: 0.75,
    unit: 'share of employees using AI tools at work',
    source: 'Placeholder, to be verified against a published workplace AI adoption survey.'
  },
  shadowAiRate: {
    label: 'Shadow AI rate',
    value: 0.50,
    unit: 'share of AI users on tools not approved by IT',
    source: 'Placeholder, to be verified against a published shadow AI study.'
  },
  promptsPerUserPerDay: {
    label: 'Prompts per AI user',
    value: 15,
    unit: 'prompts per working day',
    source: 'Placeholder, to be verified. A prompt is one message, paste or upload sent to an AI tool.'
  },
  workdaysPerYear: {
    label: 'Working days',
    value: 220,
    unit: 'days per year',
    source: 'Placeholder. Typical full-time working year after weekends, holidays and leave.'
  },
  sensitivePromptRate: {
    label: 'Sensitive prompt rate',
    value: 0.08,
    unit: 'share of prompts containing sensitive data',
    source: 'Placeholder, to be verified. Conservative compared with published estimates of sensitive content in AI inputs.'
  },

  /* Breakdown of sensitive prompts. Shares must add up to 1.0.
     `severity` only controls the colour on the page (critical = red, high = orange, medium = amber). */
  categories: [
    { key: 'customer',  label: 'Customer personal data',     share: 0.45, severity: 'high',     example: 'Names, emails, addresses of customers',
      source: 'Placeholder, to be verified.' },
    { key: 'employee',  label: 'Employee data',               share: 0.20, severity: 'high',     example: 'Salaries, sick leave, HR records',
      source: 'Placeholder, to be verified.' },
    { key: 'financial', label: 'Financial data',              share: 0.15, severity: 'critical', example: 'IBANs, invoices, amounts',
      source: 'Placeholder, to be verified.' },
    { key: 'code',      label: 'Source code & credentials',   share: 0.10, severity: 'critical', example: 'API keys, passwords, config files',
      source: 'Placeholder, to be verified.' },
    { key: 'legal',     label: 'Legal & strategic documents', share: 0.10, severity: 'medium',   example: 'Contracts, board minutes, M&A notes',
      source: 'Placeholder, to be verified.' }
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
