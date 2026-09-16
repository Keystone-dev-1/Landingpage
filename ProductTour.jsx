const {Badge} = window.FAIrwallAIDesignSystem_492fa5;
function Icon({d,size=18}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>;}
const I = {
  grid:<Icon d={<><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>}/>,
  folder:<Icon d={<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2h9A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z"/>}/>,
  key:<Icon d={<><circle cx="8" cy="15" r="4"/><path d="M10.5 12.5 20 3M16 7l2 2M19 4l2 2"/></>}/>,
  shield:<Icon d={<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>}/>,
  fileSearch:<Icon d={<><path d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><circle cx="10.5" cy="14" r="2"/><path d="M12 15.5 14 17.5"/></>}/>,
  logout:<Icon d={<><path d="M9 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4"/><path d="M14 8l5 4-5 4M19 12H9"/></>}/>,
  plus:<Icon size={15} d={<path d="M12 5v14M5 12h14"/>}/>,
  trash:<Icon size={16} d={<path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-12"/>}/>,
  eye:<Icon size={16} d={<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="2.5"/></>}/>,
  download:<Icon size={16} d={<><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 19h16"/></>}/>,
  chevron:<Icon size={14} d={<path d="M6 9l6 6 6-6"/>}/>,
  zap:<Icon size={16} d={<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>}/>,
  clock:<Icon size={16} d={<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></>}/>,
  activity:<Icon size={16} d={<path d="M3 12h4l2 7 4-14 2 7h6"/>}/>,
  alert:<Icon size={14} d={<><path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/></>}/>,
  brain:<Icon size={16} d={<><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 8 17a3 3 0 0 0 5-2V6a2 2 0 0 0-4-.5"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A3 3 0 0 1 16 17"/></>}/>
};

function AuditRow({id,type,entities,latency,time}){
  return <tr style={{borderTop:'1px solid rgba(255,255,255,.07)'}}>
    <td style={{padding:'14px 16px',color:'var(--teal-400)',fontFamily:'var(--font-mono)',fontSize:13}}>▶ {id}</td>
    <td style={{padding:'14px 16px'}}><span style={{fontFamily:'var(--font-mono)',fontSize:11,fontWeight:600,color:'#f0b429',background:'rgba(240,180,41,.12)',padding:'3px 10px',borderRadius:'var(--radius-sm)'}}>{type}</span></td>
    <td style={{padding:'14px 16px',color:'#fff',fontSize:13}}>{entities}</td>
    <td style={{padding:'14px 16px',color:'#fff',fontSize:13}}>{latency}</td>
    <td style={{padding:'14px 16px',color:'var(--text-inverse-secondary)',fontFamily:'var(--font-mono)',fontSize:12}}>{time}</td>
    <td style={{padding:'14px 16px',display:'flex',gap:12,color:'var(--text-inverse-secondary)'}}>{I.eye}{I.download}</td>
  </tr>;
}
const AUDIT_DATA = [
  ['AUDIT-E2CCEEF8E8B7','REDACT',3,'47ms','15:21:51'],['AUDIT-DCB8EE6A4E71','REDACT',3,'70ms','15:21:50'],
  ['AUDIT-7868124F90FB','REDACT',2,'119ms','15:21:48'],['AUDIT-696D5BB0DE13','REDACT',1,'57ms','15:21:41'],
  ['AUDIT-BD47A50E6F1F','REDACT',0,'481ms','15:21:40'],['AUDIT-C4FBC5677EC3','REDACT',3,'35ms','14:12:17']
];

function TableHead({cols}){
  return <thead><tr>{cols.map((c,i)=> <th key={c} style={{textAlign:'left',padding:'12px 16px',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.04em',color:'var(--text-inverse-secondary)'}}>{c}</th>)}</tr></thead>;
}

const PANELS = {
  'Mission Control':{
    sells:'Live metrics — not a black box',
    render:()=> <div style={{display:'flex',flexDirection:'column',gap:16}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {[[I.zap,'SESSION REQUESTS','50','This session'],[I.clock,'AVG LATENCY','72ms','Moving average'],[I.activity,'EVENTS LOGGED','50','Local memory']].map(([icon,label,val,sub])=>
          <div key={label} style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'var(--radius-md)',padding:20}}>
            <div style={{display:'flex',alignItems:'center',gap:8,color:'var(--teal-400)',marginBottom:14}}>{icon}<span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-inverse-secondary)',letterSpacing:'.04em'}}>{label}</span></div>
            <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:28,color:'var(--teal-400)'}}>{val}</div>
            <div style={{fontSize:12,color:'var(--text-inverse-secondary)',marginTop:2}}>{sub}</div>
          </div>)}
      </div>
      <div style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'var(--radius-md)',overflow:'hidden'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 16px',borderBottom:'1px solid rgba(255,255,255,.08)'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,color:'#fff',fontWeight:700,fontSize:14}}>{I.fileSearch}Recent Handshakes</div>
          <span style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-inverse-secondary)',letterSpacing:'.04em'}}>SOVEREIGN · LOCAL ONLY</span>
        </div>
        <table style={{width:'100%',borderCollapse:'collapse'}}>
          <TableHead cols={['FORENSIC ID','TYPE','ENTITIES','LATENCY','TIMESTAMP','ACTIONS']}/>
          <tbody>{AUDIT_DATA.slice(0,4).map(r=> <AuditRow key={r[0]} id={r[0]} type={r[1]} entities={r[2]} latency={r[3]} time={r[4]}/>)}</tbody>
        </table>
      </div>
    </div>
  },
  Projects:{
    sells:'Isolated workspaces per client/team',
    render:()=> <div style={{display:'flex',flexDirection:'column',gap:16}}>
      <div style={{display:'flex',gap:12}}>
        <input placeholder="New project name…" style={{flex:1,background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'var(--radius-md)',padding:'12px 16px',color:'#fff',fontFamily:'var(--font-body)',fontSize:14}}/>
        <button style={{display:'flex',alignItems:'center',gap:6,background:'var(--teal-500)',color:'var(--navy-950)',border:'none',borderRadius:'var(--radius-md)',padding:'0 20px',fontWeight:700,fontSize:14,cursor:'pointer'}}>{I.plus}Create</button>
      </div>
      <div style={{background:'rgba(31,216,164,.06)',border:'1px solid rgba(31,216,164,.35)',borderRadius:'var(--radius-md)',padding:18,width:280}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,color:'#fff',fontWeight:700,fontSize:15}}><span style={{color:'var(--teal-400)'}}>{I.folder}</span>Default Project</div>
          <span style={{color:'var(--text-inverse-secondary)'}}>{I.trash}</span>
        </div>
        <div style={{marginTop:10,fontSize:12,color:'var(--text-inverse-secondary)'}}>Created 08/06/2026</div>
      </div>
    </div>
  },
  'API Keys':{
    sells:'Drop-in integration, no engineering sprint',
    render:()=> <div style={{display:'flex',flexDirection:'column',gap:16}}>
      <div style={{display:'flex',gap:12}}>
        <input placeholder="Key name (e.g., Production, n8n)…" style={{flex:1,background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'var(--radius-md)',padding:'12px 16px',color:'#fff',fontFamily:'var(--font-body)',fontSize:14}}/>
        <button style={{display:'flex',alignItems:'center',gap:6,background:'var(--teal-500)',color:'var(--navy-950)',border:'none',borderRadius:'var(--radius-md)',padding:'0 20px',fontWeight:700,fontSize:14,cursor:'pointer'}}>{I.key}Generate</button>
      </div>
      <div style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'var(--radius-md)'}}>
        <table style={{width:'100%',borderCollapse:'collapse'}}><TableHead cols={['NAME','KEY','CREATED','ACTIONS']}/></table>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12,padding:'56px 0',color:'var(--text-inverse-secondary)'}}>
          <span style={{opacity:.5}}>{I.key}</span>
          <span style={{fontSize:14}}>No API keys for this project. Generate one above.</span>
        </div>
      </div>
    </div>
  },
  'Detection Engines & Rules':{
    sells:'Plain-English custom detection, no code',
    render:()=> <div style={{display:'flex',flexDirection:'column',gap:16}}>
      <div style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'var(--radius-md)',padding:18}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
          <div style={{display:'flex',alignItems:'center',gap:8,color:'#fff',fontWeight:700,fontSize:15}}>{I.activity}Detection Engines</div>
          <span style={{display:'flex',alignItems:'center',gap:6,color:'#f0b429',fontSize:12,fontWeight:600}}>{I.alert}Degraded</span>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10,marginBottom:14}}>
          {[['Spacy',true],['Regex',true],['Flair',false],['Tars',false]].map(([n,on])=>
            <div key={n} style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'var(--radius-sm)',padding:'14px 0',textAlign:'center'}}>
              <span style={{display:'inline-block',width:8,height:8,borderRadius:'50%',background:on?'var(--teal-500)':'var(--slate-500)',marginBottom:8}}></span>
              <div style={{color:'#fff',fontWeight:600,fontSize:13}}>{n}</div>
              <div style={{fontSize:11,color:on?'var(--teal-400)':'var(--text-inverse-secondary)'}}>{on?'Active':'Inactive'}</div>
            </div>)}
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 14px',background:'rgba(255,255,255,.03)',borderRadius:'var(--radius-sm)'}}>
          <div style={{display:'flex',gap:10,alignItems:'center'}}><span style={{color:'#a78bfa'}}>{I.brain}</span><div><div style={{color:'#fff',fontSize:13,fontWeight:600}}>Thorough Mode</div><div style={{fontSize:11,color:'var(--text-inverse-secondary)'}}>Deep AI scan with Flair + TARS (slower, more accurate)</div></div></div>
          <span style={{width:36,height:20,borderRadius:'var(--radius-full)',background:'rgba(255,255,255,.15)',display:'inline-flex',alignItems:'center',padding:2}}><span style={{width:16,height:16,borderRadius:'50%',background:'#fff'}}></span></span>
        </div>
      </div>
      <div style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'var(--radius-md)',padding:18}}>
        <div style={{display:'flex',alignItems:'center',gap:8,color:'#fff',fontWeight:700,fontSize:15,marginBottom:6}}>{I.zap}Detection Rules</div>
        <div style={{fontSize:13,color:'var(--text-inverse-secondary)',marginBottom:12}}>Tell us what to detect in plain English. No coding needed.</div>
        <textarea placeholder="e.g. detect employee IDs like EMP-00123, salary amounts, and project codes like PRJ-2024-XX" rows={3} style={{width:'100%',background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'var(--radius-md)',padding:14,color:'#fff',fontFamily:'var(--font-body)',fontSize:13,resize:'none'}}/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
          <span style={{fontSize:12,color:'var(--text-inverse-secondary)'}}>Patterns ("like EMP-00123") become regex rules. Plain descriptions ("salary amounts") become AI labels.</span>
          <button style={{display:'flex',alignItems:'center',gap:6,background:'rgba(31,216,164,.12)',color:'var(--teal-400)',border:'1px solid rgba(31,216,164,.4)',borderRadius:'var(--radius-md)',padding:'8px 16px',fontWeight:600,fontSize:13,cursor:'pointer'}}>{I.plus}Add Rules</button>
        </div>
      </div>
      <div style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'var(--radius-md)',padding:18}}>
        <div style={{color:'#fff',fontWeight:700,fontSize:14,marginBottom:10}}>Active Rules</div>
        <div style={{fontSize:11,color:'#f0b429',fontFamily:'var(--font-mono)',marginBottom:8}}>✱ PATTERN-MATCHED (REGEX)</div>
        <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:14}}>
          {[['EMPLOYEE_ID','EMP-[0-9]{5}'],['EMAIL','[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'],['PHONE_EU','\\+?[0-9]{1,3}[\\s-]?[0-9]{6,12}']].map(([n,p])=>
            <div key={n} style={{background:'rgba(255,255,255,.03)',borderRadius:'var(--radius-sm)',padding:'8px 12px',fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-inverse-secondary)'}}><span style={{color:'#fff',fontWeight:600}}>{n}</span> {p}</div>)}
        </div>
        <div style={{fontSize:11,color:'var(--text-inverse-secondary)',marginBottom:6}}>BUILT-IN (ALWAYS ACTIVE)</div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-inverse-secondary)'}}>PERSON, ORG, GPE, DATE, MONEY, EMAIL, PHONE, SSN, CREDIT_CARD, IP_ADDRESS</div>
      </div>
    </div>
  },
  'Forensic Audit Trail':{
    sells:'Every protection event, timestamped and provable',
    render:()=> <div style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'var(--radius-md)',overflow:'hidden'}}>
      <div style={{display:'flex',justifyContent:'flex-end',padding:'12px 16px',borderBottom:'1px solid rgba(255,255,255,.08)'}}>
        <span style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-inverse-secondary)',letterSpacing:'.04em',background:'rgba(255,255,255,.05)',padding:'4px 10px',borderRadius:'var(--radius-full)'}}>SOVEREIGN · ZERO-KNOWLEDGE</span>
      </div>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <TableHead cols={['FORENSIC ID','TYPE','ENTITIES','LATENCY','TIMESTAMP','ACTIONS']}/>
        <tbody>{AUDIT_DATA.map(r=> <AuditRow key={r[0]} id={r[0]} type={r[1]} entities={r[2]} latency={r[3]} time={r[4]}/>)}</tbody>
      </table>
    </div>
  }
};

const DESCRIPTIONS_FALLBACK = {
  'Mission Control':'Mission Control: a full overview of all sessions and logs, with a downloadable audit for every message sent to AI.',
  'Detection Engines & Rules':'Detection Engines & Rules: define which detection engines are running, set your detection rules, and see an overview of the ones currently active.',
  'API Keys':'API Keys: connect nodes and n8n workflows seamlessly.',
  'Projects':'Projects: separate and organize your users and exchanges.',
  'Forensic Audit Trail':'Forensic Audit Trail: search through past audits.'
};
function ProductTour(){
  const T = window.t('tour');
  const DESCRIPTIONS = T.descriptions || DESCRIPTIONS_FALLBACK;
  const order = ['Mission Control','Detection Engines & Rules','API Keys','Projects','Forensic Audit Trail'];
  const icons = {'Mission Control':I.grid,'Projects':I.folder,'API Keys':I.key,'Detection Engines & Rules':I.shield,'Forensic Audit Trail':I.fileSearch};
  const [active,setActive] = React.useState('Mission Control');
  return <section id="tour" style={{padding:'80px 48px',background:'var(--slate-50)'}}>
   <div style={{maxWidth:1200,margin:'0 auto'}}>
    <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h1)',color:'var(--navy-950)',margin:'0 0 16px'}}>{T.title}</h2>
    <p style={{color:'var(--text-secondary)',fontSize:16,margin:'0 0 20px'}}>{T.subA}<Brand/>{T.subB}</p>
    <div style={{display:'flex',alignItems:'center',gap:10,background:'rgba(31,216,164,.08)',border:'1px solid rgba(31,216,164,.3)',borderRadius:'var(--radius-md)',padding:'12px 18px',marginBottom:40,width:'100%'}}>
      <span onClick={()=>setActive(order[(order.indexOf(active)-1+order.length)%order.length])} style={{color:'var(--teal-500)',fontSize:18,animation:'pulseLeft 1.6s ease-in-out infinite',cursor:'pointer'}}>◀</span>
      <span style={{color:'var(--navy-950)',fontSize:15,fontWeight:600,flex:1}}>{DESCRIPTIONS[active]}</span>
      <span onClick={()=>setActive(order[(order.indexOf(active)+1)%order.length])} style={{color:'var(--teal-600)',fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'.04em',borderLeft:'1px solid rgba(31,216,164,.3)',paddingLeft:10,marginLeft:2,whiteSpace:'nowrap',cursor:'pointer'}}>{T.next}</span>
    </div>
    <div style={{display:'flex',borderRadius:'var(--radius-lg)',overflow:'hidden',boxShadow:'var(--shadow-lg)',background:'var(--navy-950)'}}>
      <div style={{width:64,display:'flex',flexDirection:'column',alignItems:'center',padding:'20px 0',borderRight:'1px solid rgba(255,255,255,.06)'}}>
        <div style={{width:34,height:34,borderRadius:'var(--radius-sm)',background:'rgba(31,216,164,.12)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--teal-400)',marginBottom:28}}>{I.shield}</div>
        <div style={{display:'flex',flexDirection:'column',gap:10,flex:1}}>
          {order.map(k=> <div key={k} onClick={()=>setActive(k)} title={k} className="tour-nav-icon" style={{width:40,height:40,borderRadius:'var(--radius-sm)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:active===k?'var(--teal-400)':'var(--text-inverse-secondary)',background:active===k?'rgba(31,216,164,.12)':'transparent',border:active===k?'1px solid rgba(31,216,164,.4)':'1px solid transparent'}}>{icons[k]}</div>)}
        </div>
        <div style={{color:'var(--text-inverse-secondary)'}}>{I.logout}</div>
      </div>
      <div style={{flex:1}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 24px',borderBottom:'1px solid rgba(255,255,255,.08)'}}>
          <div style={{display:'flex',alignItems:'center',gap:16}}>
            <span style={{color:'#fff',fontWeight:700,fontFamily:'var(--font-display)',fontSize:15}}>Mission Control</span>
            <span style={{display:'flex',alignItems:'center',gap:8,background:'rgba(255,255,255,.04)',border:'1px solid rgba(31,216,164,.3)',borderRadius:'var(--radius-md)',padding:'6px 14px',color:'#fff',fontSize:13}}><span style={{color:'var(--teal-400)'}}>{I.folder}</span>Default Project{I.chevron}</span>
          </div>
          <span style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-inverse-secondary)'}}>juan.rosenzweig@gmail.com</span>
        </div>
        <div style={{padding:24}}>
          <h3 style={{color:'#fff',fontFamily:'var(--font-display)',fontWeight:700,fontSize:18,margin:'0 0 16px'}}>{active}</h3>
          {PANELS[active].render()}
        </div>
      </div>
    </div>
    <div style={{display:'flex',gap:32,flexWrap:'wrap',marginTop:32,fontFamily:'var(--font-mono)',fontSize:13,color:'var(--text-secondary)'}}>
      <span>{T.facts[0]}</span><span>{T.facts[1]}</span><span>{T.facts[2]}</span>
    </div>
   </div>
  </section>;
}
window.ProductTour = ProductTour;
