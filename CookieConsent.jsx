function CookieConsent(){
  const KEY='fairwall.cookie.consent.v1';
  const T = window.t('cookie');
  const [state,setState]=React.useState(null);
  const [open,setOpen]=React.useState(false);
  const [panel,setPanel]=React.useState(false);
  const [analytics,setAnalytics]=React.useState(false);
  React.useEffect(()=>{
    let saved=null;
    try{saved=JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){}
    if(saved&&saved.version===1){setState(saved);setAnalytics(!!saved.analytics)}
    else setOpen(true);
    window.openCookieSettings=()=>{setPanel(true);setOpen(true)};
  },[]);
  const save=(a)=>{
    const rec={version:1,necessary:true,analytics:a,date:new Date().toISOString()};
    try{localStorage.setItem(KEY,JSON.stringify(rec))}catch(e){}
    setState(rec);setAnalytics(a);setOpen(false);setPanel(false);
    if(window.setAnalyticsConsent) window.setAnalyticsConsent(a);
  };
  if(!open) return null;
  const link={color:'var(--teal-400)',textDecoration:'underline'};
  const btn={fontFamily:'var(--font-body)',fontWeight:700,fontSize:14,padding:'11px 20px',borderRadius:'var(--radius-md)',cursor:'pointer',border:'none',whiteSpace:'nowrap'};
  return <div role="dialog" aria-modal="false" aria-label={T.title} style={{position:'fixed',left:0,right:0,bottom:0,zIndex:9999,padding:'0 16px 16px',display:'flex',justifyContent:'center',pointerEvents:'none'}}>
    <div style={{pointerEvents:'auto',width:'100%',maxWidth:760,background:'var(--navy-950)',color:'#fff',border:'1px solid rgba(255,255,255,.14)',borderRadius:'var(--radius-lg)',boxShadow:'0 18px 50px rgba(0,0,0,.38)',padding:'22px 24px',fontFamily:'var(--font-body)'}}>
      <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:17,marginBottom:8}}>{T.title}</div>
      <p style={{margin:'0 0 16px',fontSize:14,lineHeight:1.6,color:'var(--text-inverse-secondary)',textWrap:'pretty'}}>
        {T.body}<a href="impressum.html" style={link}>{T.privacy}</a>{T.and}<a href="terms.html" style={link}>{T.terms}</a>.
      </p>
      {panel&&<div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:18}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:16,background:'rgba(255,255,255,.05)',borderRadius:'var(--radius-md)',padding:'12px 14px'}}>
          <div><div style={{fontSize:13,fontWeight:700}}>{T.necessary}</div><div style={{fontSize:12,color:'var(--text-inverse-secondary)',lineHeight:1.5}}>{T.necessaryD}</div></div>
          <span style={{fontSize:12,fontWeight:700,color:'var(--brand-green)',paddingTop:2}}>{T.always}</span>
        </div>
        <label style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:16,background:'rgba(255,255,255,.05)',borderRadius:'var(--radius-md)',padding:'12px 14px',cursor:'pointer'}}>
          <div><div style={{fontSize:13,fontWeight:700}}>{T.analytics}</div><div style={{fontSize:12,color:'var(--text-inverse-secondary)',lineHeight:1.5}}>{T.analyticsD}</div></div>
          <input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)} style={{width:18,height:18,accentColor:'var(--teal-500)',marginTop:2}}/>
        </label>
      </div>}
      <div style={{display:'flex',flexWrap:'wrap',gap:10,alignItems:'center'}}>
        <button onClick={()=>save(true)} style={{...btn,background:'var(--teal-500)',color:'var(--navy-950)'}}>{T.acceptAll}</button>
        <button onClick={()=>save(false)} style={{...btn,background:'transparent',color:'#fff',border:'1px solid rgba(255,255,255,.28)'}}>{T.rejectAll}</button>
        {panel
          ? <button onClick={()=>save(analytics)} style={{...btn,background:'transparent',color:'var(--teal-400)',padding:'11px 8px'}}>{T.save}</button>
          : <button onClick={()=>setPanel(true)} style={{...btn,background:'transparent',color:'var(--teal-400)',padding:'11px 8px'}}>{T.manage}</button>}
      </div>
    </div>
  </div>;
}
window.CookieConsent=CookieConsent;
