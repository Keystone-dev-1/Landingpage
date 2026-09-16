const {Badge,Button} = window.FAIrwallAIDesignSystem_492fa5;
const PRICES = { Individuals: { Basic:12, Medium:14, Advanced:17 } };
const YEARLY_MONTHLY = { Basic:'8.5', Medium:'10', Advanced:'12' };
function flattenGroups(groups){
  return groups.flatMap(([label,feats])=> label==='Contact us' ? ['Contact us'] : feats.map(f=>({label,f})));
}
function cumulativePlans(tiers){
  let acc = [];
  return tiers.map(([tier,groups])=>{
    const flat = flattenGroups(groups);
    if(flat[0]==='Contact us') return [tier,[],[],groups];
    const inherited = acc.slice();
    acc = acc.concat(flat);
    return [tier, inherited, flat, groups];
  });
}
const SEG_ICONS = {
  Corporates: <><path d="M4 21V6l7-3 7 3v15"/><path d="M9 21v-6h4v6"/><path d="M9 9h.01M9 13h.01M13 9h.01M13 13h.01"/></>,
  Individuals: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></>,
  'AI Agencies': <><circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M12 7.2V13m0 0-5.5 3M12 13l5.5 3"/></>
};
function Pricing(){
  const T = window.t('pricing');
  const [seg,setSeg] = React.useState('Corporates');
  const [billing,setBilling] = React.useState('monthly');
  const plans = cumulativePlans(T.plans[seg]);
  return <section id="pricing" style={{padding:'80px 48px',background:'var(--slate-50)'}}>
   <div style={{maxWidth:1100,margin:'0 auto'}}>
    <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h1)',color:'var(--navy-950)',margin:'0 0 8px'}}>{T.title}</h2>
    <p style={{color:'var(--text-secondary)',fontSize:15,margin:'0 0 32px'}}>{T.sub}</p>
    {seg==='Individuals' && <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:24}}>
      <div style={{display:'inline-flex',background:'#fff',border:'1px solid var(--border-default)',borderRadius:'var(--radius-full)',padding:4}}>
        {['monthly','yearly'].map(b=> <button key={b} onClick={()=>setBilling(b)} style={{padding:'8px 18px',borderRadius:'var(--radius-full)',border:'none',background:billing===b?'var(--navy-950)':'transparent',color:billing===b?'#fff':'var(--navy-950)',fontFamily:'var(--font-body)',fontWeight:600,fontSize:13,cursor:'pointer'}}>{b==='monthly'?T.monthly:T.yearly}</button>)}
      </div>
      <Badge tone="success">{T.trial}</Badge>
    </div>}
    <div style={{display:'flex',gap:12,marginBottom:40}}>
      {Object.keys(T.plans).map(s=> <button key={s} onClick={()=>setSeg(s)} style={{display:'flex',alignItems:'center',gap:10,padding:'12px 22px',borderRadius:'var(--radius-full)',border:seg===s?'1px solid var(--teal-500)':'1px solid var(--border-default)',background:seg===s?'var(--navy-950)':'#fff',color:seg===s?'#fff':'var(--navy-950)',fontFamily:'var(--font-body)',fontWeight:600,fontSize:14,cursor:'pointer',transition:'all var(--dur-fast) var(--ease-standard)'}}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={seg===s?'var(--teal-400)':'var(--text-secondary)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{SEG_ICONS[s]}</svg>
        {T.labels[s]}
      </button>)}
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
      {plans.map(([tier,inherited,own,groups],i)=> <div key={tier} style={{background:'#fff',border:i===1?'1px solid var(--teal-500)':'1px solid var(--border-default)',borderRadius:'var(--radius-lg)',padding:28,display:'flex',flexDirection:'column',gap:14,position:'relative'}}>
        {i===1 && <span style={{position:'absolute',top:-11,left:24,background:'var(--teal-500)',color:'var(--navy-950)',fontFamily:'var(--font-mono)',fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:'var(--radius-full)'}}>{T.mostCommon}</span>}
        <div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.06em',color:'var(--text-tertiary)'}}>{T.tier} {i+1}</div>
        <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:20,margin:0,color:'var(--teal-600)'}}>{tier}</h3>
        {PRICES[seg]?.[tier] && <div>
          <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:26,color:'var(--navy-950)'}}>€{billing==='yearly'?YEARLY_MONTHLY[tier]:PRICES[seg][tier]}<span style={{fontSize:13,fontWeight:500,color:'var(--text-tertiary)'}}>{T.perMonth}</span></div>
          {billing==='yearly' && <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>{T.billed((YEARLY_MONTHLY[tier]*12).toFixed(0))}</div>}
        </div>}
        {groups[0] && groups[0][0]==='Contact us'
          ? <Badge tone="info">{T.contact}</Badge>
          : <div style={{display:'flex',flexDirection:'column',gap:12,flex:1}}>
              {i>0 && <div style={{fontSize:12.5,color:'var(--text-tertiary)',fontStyle:'italic'}}>{T.everythingIn(plans[i-1][0])}</div>}
              {inherited.length>0 && <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:8}}>
                {inherited.map(({label,f})=> <li key={label+f} style={{display:'flex',alignItems:'center',gap:8,fontSize:13,color:'var(--text-tertiary)'}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><path d="M20 6 9 17l-5-5"/></svg>
                  {f}
                </li>)}
              </ul>}
              {groups.map(([label,feats])=> <div key={label}>
                <div style={{fontFamily:'var(--font-body)',fontWeight:600,fontSize:13,color:'var(--teal-600)',marginBottom:6}}>{label}</div>
                <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:8}}>
                  {feats.map(f=> <li key={f} style={{display:'flex',alignItems:'center',gap:8,fontSize:14,color:'var(--text-primary)',fontWeight:600}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--teal-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><path d="M20 6 9 17l-5-5"/></svg>
                    {f}
                  </li>)}
                </ul>
              </div>)}
            </div>}
        <Button variant={i===1?'accent':'secondary'} size="sm" onClick={()=>{window.location.href = seg==='Individuals' ? 'checkout.html' : 'book-demo.html';}}>{T.cta}</Button>
      </div>)}
    </div>
   </div>
  </section>;
}
window.Pricing = Pricing;
