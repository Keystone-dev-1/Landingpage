const {Badge,Button} = window.FAIrwallAIDesignSystem_492fa5;
const PATTERNS = [
  {type:'EMAIL',label:'email',re:/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g},
  {type:'PHONE',label:'phone number',re:/\b(\+?\d{1,2}[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\b/g},
  {type:'EMPLOYEE_ID',label:'employee ID',re:/\bEMP-\d{4,6}\b/g},
  {type:'INVOICE',label:'invoice number',re:/\bINV-\d{4}-\d{3,6}\b/gi},
  {type:'SSN',label:'SSN',re:/\b\d{3}-\d{2}-\d{4}\b/g},
  {type:'CREDIT_CARD',label:'credit card',re:/\b(?:\d[ -]?){13,16}\b/g},
  {type:'IP_ADDRESS',label:'IP address',re:/\b(?:\d{1,3}\.){3}\d{1,3}\b/g},
  {type:'DATE',label:'date',re:/\b\d{4}-\d{2}-\d{2}\b|\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g},
  {type:'ADDRESS',label:'street address',re:/\b\d{1,5}\s+[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)?\s(Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr)\b/g},
  {type:'MONEY',label:'amount',re:/\$\s?\d[\d,]*(\.\d{2})?\b/g},
  {type:'PERSON',label:'name',re:/\b(?:Mr|Mrs|Ms|Dr)\.\s[A-Z][a-z]+(?:\s[A-Z][a-z]+)?\b|\b(?:my name is|I'm|I am)\s(?<name>[A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/gi},
  {type:'CITY',label:'city',re:new RegExp('\\b(' + ['New York','San Francisco','Los Angeles','Chicago','Boston','Seattle','Austin','Miami','Denver','Atlanta','Houston','Dallas','Phoenix','Philadelphia','Portland','Washington','San Diego','Las Vegas','Vienna','London','Paris','Berlin','Madrid','Rome','Milan','Amsterdam','Dublin','Brussels','Zurich','Geneva','Munich','Frankfurt','Hamburg','Barcelona','Lisbon','Copenhagen','Stockholm','Oslo','Helsinki','Warsaw','Prague','Budapest','Athens','Toronto','Vancouver','Montreal','Mexico City','Sao Paulo','Buenos Aires','Sydney','Melbourne','Auckland','Tokyo','Osaka','Seoul','Singapore','Hong Kong','Shanghai','Beijing','Mumbai','Delhi','Bangalore','Dubai','Tel Aviv','Cairo','Johannesburg','Nairobi'].join('|') + ')\\b','g')}
];
const SAMPLE = "Hi, please onboard our new hire. Her email is priya.shah@acme.com and her direct line is 415-555-0138. Her employee ID is EMP-88231 — set her up in the system.";
const PRESETS = [
  {label:'Draft an email', text:"Write me an email to priya.shah@acme.com letting her know her new employee ID is EMP-88231 and to call me at 415-555-0138 with any questions."},
  {label:'Draft a complaint', text:"Write a complaint email about a $482.50 charge on my card dated 2024-03-11 — I'm John Reyes, reachable at john.reyes99@gmail.com, based in Chicago."},
  {label:'Summarize a memo', text:"Summarize this for my manager: approve the wire of $12,400 to our vendor, reference invoice INV-2024-0091, and loop in Mrs. Alvarez at +1 512-555-0199."},
  {label:'Rewrite a letter', text:"Rewrite this more formally: my name is Daniel Cho, SSN 512-33-9081, living at 221 Baker Street, and I'd like my contract reviewed before 04/12/2025."}
];

function findMatches(text){
  const matches = [];
  PATTERNS.forEach(p=>{
    let m;
    p.re.lastIndex = 0;
    while ((m = p.re.exec(text))){
      const val = m.groups?.name || m[0];
      const start = m.groups?.name ? m.index + m[0].indexOf(m.groups.name) : m.index;
      matches.push({start,end:start+val.length,text:val,type:p.type,label:p.label});
      if (m[0].length===0) p.re.lastIndex++;
    }
  });
  matches.sort((a,b)=> a.start-b.start || (b.end-b.start)-(a.end-a.start));
  const kept = [];
  let lastEnd = -1;
  matches.forEach(m=>{ if (m.start >= lastEnd){ kept.push(m); lastEnd = m.end; } });
  return kept;
}

function highlightTokens(text, re){
  const parts = []; let last = 0, m;
  const r = new RegExp(re.source, re.flags.includes('g')?re.flags:re.flags+'g');
  while((m = r.exec(text))){
    if(m.index>last) parts.push(<span key={last}>{text.slice(last,m.index)}</span>);
    parts.push(<span key={m.index} style={{color:'var(--teal-400)'}}>{m[0]}</span>);
    last = m.index+m[0].length;
  }
  if(last<text.length) parts.push(<span key={last+'e'}>{text.slice(last)}</span>);
  return parts;
}
function LiveDemo(){
  const [text,setText] = React.useState(SAMPLE);
  const [priv,setPriv] = React.useState({});
  const [sent,setSent] = React.useState(null);
  const matches = React.useMemo(()=>findMatches(text),[text]);

  function keyFor(m){ return m.type+':'+m.start; }
  function isPrivate(m){ const k = keyFor(m); return priv[k] !== undefined ? priv[k] : true; }
  function toggle(m){ const k = keyFor(m); setPriv(p=>({...p,[k]: !isPrivate(m)})); }

  function buildSegments(){
    const segs = []; let cursor = 0;
    matches.forEach(m=>{
      if (m.start>cursor) segs.push({plain:text.slice(cursor,m.start)});
      segs.push({match:m});
      cursor = m.end;
    });
    if (cursor<text.length) segs.push({plain:text.slice(cursor)});
    return segs;
  }

  function buildReply(tokenMap, srcText){
    const tok = type => Object.keys(tokenMap).find(k=>k.startsWith(`[REDACTED_${type}_`));
    const low = srcText.toLowerCase();
    if (Object.keys(tokenMap).length===0) return "Got it — nothing needed protecting in this message.";
    if (low.includes('complaint')){
      return `Subject: Dispute — Unauthorized Charge\n\nHello,\n\nI'm writing to dispute a charge of ${tok('MONEY')||'the amount in question'} dated ${tok('DATE')||'the date noted'}. Please investigate and issue a refund to my account.\n\nThank you,\n${tok('PERSON')||'the customer'}\n${tok('EMAIL')||''}`;
    }
    if (low.includes('summar')){
      return `Summary: Approve the wire transfer of ${tok('MONEY')||'the requested amount'}, referencing ${tok('INVOICE')||'the invoice on file'}. Loop in the contact at ${tok('PHONE')||'the number provided'} to confirm.`;
    }
    if (low.includes('rewrite') || low.includes('more formally')){
      return `To Whom It May Concern,\n\nI, ${tok('PERSON')||'the undersigned'}, residing at ${tok('ADDRESS')||'the address on file'}${tok('SSN')?` (SSN ${tok('SSN')})`:''}, formally request review of my contract prior to ${tok('DATE')||'the stated deadline'}.\n\nSincerely,\n${tok('PERSON')||''}`;
    }
    if (low.includes('email')){
      return `Subject: Quick Update\n\nHi there,\n\nYour new employee ID is ${tok('EMPLOYEE_ID')||'on file'}. Feel free to reach out at ${tok('PHONE')||'the number provided'} with any questions.\n\nSent to: ${tok('EMAIL')||'the recipient'}\n\nBest regards`;
    }
    const tokens = Object.keys(tokenMap);
    return `Got it — I've logged the details for ${tokens.join(' and ')} and will follow up using those references.`;
  }

  function handleSend(){
    const counters = {};
    let out = ''; let cursor = 0;
    matches.forEach(m=>{
      out += text.slice(cursor,m.start);
      if (isPrivate(m)){
        counters[m.type] = (counters[m.type]||0)+1;
        out += `[REDACTED_${m.type}_${String(counters[m.type]).padStart(2,'0')}]`;
      } else {
        out += m.text;
      }
      cursor = m.end;
    });
    out += text.slice(cursor);
    const tokens = [...out.matchAll(/\[REDACTED_[A-Z_]+_\d+\]/g)].map(x=>x[0]);
    const tokenMap = {};
    { const c2={}; matches.forEach(m=>{ if(isPrivate(m)){ c2[m.type]=(c2[m.type]||0)+1; tokenMap[`[REDACTED_${m.type}_${String(c2[m.type]).padStart(2,'0')}]`]=m.text; } }); }
    const reply = buildReply(tokenMap, text);
    const restored = tokens.length
      ? reply.replace(/\[REDACTED_[A-Z_]+_\d+\]/g, t=>tokenMap[t]||t)
      : reply;
    const restoredValues = Object.values(tokenMap);
    const auditId = 'AUDIT-' + Math.random().toString(16).slice(2,10).toUpperCase();
    const latency = 40 + Math.floor(Math.random()*40);
    setSent({redacted:out, reply, restored, restoredValues, auditId, count: tokens.length, latency});
  }

  const segs = buildSegments();
  const privateCount = matches.filter(isPrivate).length;

  return <section id="demo" style={{padding:'80px 48px',background:'var(--slate-50)'}}>
    <div style={{maxWidth:920,margin:'0 auto'}}>
      <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h1)',color:'var(--navy-950)',margin:'0 0 32px'}}>Watch it work.</h2>
      <div style={{position:'relative',display:'flex',justifyContent:'space-between',gap:8,marginBottom:40}}>
        <div style={{position:'absolute',top:28,left:'8%',right:'8%',height:2,background:'linear-gradient(90deg, var(--teal-500), var(--navy-500), var(--teal-500))',opacity:.4,zIndex:0}}></div>
        {[
          {n:1,label:'Ask AI',d:'User asks a question via browser.',c:'user',icon:<><rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/><circle cx="12" cy="9" r="1.6"/><path d="M9 13h6"/></>},
          {n:2,label:'Mark & Detect',d:<><Brand/> auto-flags sensitive data, user can mark more.</>,c:'tool',icon:<><path d="M5 3v18"/><path d="M5 4h11l-3 4 3 4H5"/></>},
          {n:3,label:'Redact',d:'Marked data is anonymized before it ever leaves the device.',c:'tool',icon:<><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><circle cx="12" cy="11" r="2"/></>},
          {n:4,label:'Send',d:'Only the safe, anonymized version reaches the AI tool.',c:'user',icon:<><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 19h16"/></>},
          {n:5,label:'Restore',d:'The response is mapped back to your original context.',c:'tool',icon:<><path d="M3 12a9 9 0 1 1 3 6.7"/><path d="M3 12V7m0 5h5"/></>},
          {n:6,label:'Audit Trail',d:'Every action is logged to a searchable record.',c:'tool',icon:<><path d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M9.5 13.5l2 2 3.5-4"/></>}
        ].map(s=> <div key={s.n} title={s.d} style={{position:'relative',zIndex:1,display:'flex',flexDirection:'column',alignItems:'center',width:'15%',minWidth:90,cursor:'default'}}>
          <div style={{width:56,height:56,borderRadius:'var(--radius-lg)',background:s.c==='user'?'var(--navy-800)':'var(--teal-500)',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',boxShadow:'var(--shadow-md)'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s.c==='user'?'#fff':'var(--navy-950)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
            <span style={{position:'absolute',top:-8,left:-8,width:22,height:22,borderRadius:'50%',background:'var(--navy-950)',color:'#fff',fontFamily:'var(--font-mono)',fontSize:11,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center'}}>{s.n}</span>
          </div>
          <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:13,color:'var(--navy-950)',marginTop:12,textAlign:'center'}}>{s.label}</div>
        </div>)}
      </div>
      <div style={{display:'flex',gap:20,marginBottom:24,fontSize:12.5,color:'var(--text-tertiary)'}}>
        <span style={{display:'flex',alignItems:'center',gap:6}}><span style={{width:10,height:10,borderRadius:3,background:'var(--navy-800)'}}></span>You do this</span>
        <span style={{display:'flex',alignItems:'center',gap:6}}><span style={{width:10,height:10,borderRadius:3,background:'var(--teal-500)'}}></span><Brand/> does this</span>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:10,flexWrap:'wrap',marginBottom:12}}>
        <span style={{fontSize:13,color:'var(--text-tertiary)'}}>Try it:</span>
        {PRESETS.map(p=> <button key={p.label} onClick={()=>{setText(p.text);setSent(null);setPriv({});}} style={{padding:'6px 14px',borderRadius:'var(--radius-full)',border:'1px solid var(--border-default)',background:text===p.text?'var(--navy-950)':'#fff',color:text===p.text?'#fff':'var(--navy-950)',fontFamily:'var(--font-body)',fontWeight:600,fontSize:12.5,cursor:'pointer'}}>{p.label}</button>)}
        <span style={{fontSize:12.5,color:'var(--text-tertiary)'}}>or type your own below</span>
      </div>
      <textarea value={text} onChange={e=>setText(e.target.value)} rows={4} placeholder="Type anything you'd send to an AI tool…" style={{width:'100%',fontFamily:'var(--font-body)',fontSize:15,padding:16,borderRadius:'var(--radius-md)',border:'1px solid var(--border-strong)',resize:'vertical',color:'var(--text-primary)'}}/>
      <div style={{fontSize:12.5,color:'var(--text-tertiary)',margin:'8px 0'}}>This is how your message will be highlighted automatically</div>
      <div style={{background:'#fff',border:'1px solid var(--border-default)',borderRadius:'var(--radius-lg)',padding:20,fontSize:15,lineHeight:'var(--lh-normal)',color:'var(--text-primary)'}}>
        {segs.map((s,i)=> s.plain !== undefined
          ? <span key={i}>{s.plain}</span>
          : <span key={i} onClick={()=>toggle(s.match)} title={isPrivate(s.match) ? 'Marked private — click to make public' : 'Marked public — click to protect'} style={{cursor:'pointer',background:isPrivate(s.match)?'rgba(239,68,68,.14)':'rgba(31,216,164,.14)',borderBottom:`2px solid ${isPrivate(s.match)?'var(--red-500)':'var(--teal-500)'}`,padding:'1px 2px',borderRadius:3}}>{s.match.text}</span>)}
      </div>
      {matches.length>0 && <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:12}}>
        {matches.map((m,i)=> <span key={i} onClick={()=>toggle(m)} style={{cursor:'pointer',display:'inline-flex',alignItems:'center',gap:6,fontFamily:'var(--font-mono)',fontSize:11,padding:'4px 10px',borderRadius:'var(--radius-full)',background:isPrivate(m)?'var(--red-100)':'var(--teal-100)',color:isPrivate(m)?'var(--red-600)':'var(--teal-600)'}}>{m.label}: {isPrivate(m)?'private':'public'}</span>)}
      </div>}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
        <span style={{fontSize:13,color:'var(--text-tertiary)'}}>{matches.length} item{matches.length!==1?'s':''} detected — {privateCount} will be redacted before sending.</span>
        <Button variant="primary" onClick={handleSend}>Send to AI tool</Button>
      </div>
      {sent && <div style={{marginTop:24,background:'var(--navy-950)',borderRadius:'var(--radius-lg)',padding:24,color:'#fff'}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'#f0b429',marginBottom:12}}>WHAT THE AI TOOL RECEIVED</div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:13,lineHeight:1.6,marginBottom:16}}>{highlightTokens(sent.redacted, /\[REDACTED_[A-Z_]+_\d+\]/)}</div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'#f0b429',marginBottom:8}}>SIMULATED AI RESPONSE</div>
        <div style={{fontSize:14,marginBottom:16,whiteSpace:'pre-wrap',lineHeight:'var(--lh-normal)'}}>{highlightTokens(sent.reply, /\[REDACTED_[A-Z_]+_\d+\]/)}</div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'#f0b429',marginBottom:8}}>RESTORED AI RESPONSE</div>
        <div style={{fontSize:14,marginBottom:16,whiteSpace:'pre-wrap',lineHeight:'var(--lh-normal)'}}>{sent.restoredValues.length ? highlightTokens(sent.restored, new RegExp(sent.restoredValues.map(v=>v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g')) : sent.restored}</div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--teal-400)',borderTop:'1px solid rgba(255,255,255,.1)',paddingTop:12}}>{sent.auditId} · {sent.count} entities · {sent.latency}ms — logged.</div>
      </div>}
    </div>
  </section>;
}
window.LiveDemo = LiveDemo;
