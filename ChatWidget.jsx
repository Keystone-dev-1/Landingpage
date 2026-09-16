function ChatWidget(){
  const SRC='https://chat.ultimo-bots.com/178877546422124181653QJAvi';
  const [open,setOpen]=React.useState(false);
  const [loaded,setLoaded]=React.useState(false); // iframe mounts only after first open (no third-party cookies before interaction)
  const toggle=()=>{setOpen(o=>!o);setLoaded(true)};
  return <div style={{position:'fixed',right:20,bottom:20,zIndex:9000,display:'flex',flexDirection:'column',alignItems:'flex-end',gap:12,fontFamily:'var(--font-body)'}}>
    {loaded&&<div style={{width:'min(380px, calc(100vw - 40px))',height:'min(560px, calc(100vh - 140px))',display:open?'flex':'none',flexDirection:'column',background:'#fff',border:'1px solid var(--border-default)',borderRadius:'var(--radius-lg)',boxShadow:'0 18px 50px rgba(8,14,25,.28)',overflow:'hidden'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,padding:'12px 14px',background:'var(--navy-950)',color:'#fff'}}>
        <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:14}}>Ask F<span style={{color:'var(--brand-green)'}}>ai</span>rwall <span style={{color:'var(--brand-green)'}}>AI</span></span>
        <button onClick={()=>setOpen(false)} aria-label="Close chat" style={{background:'transparent',border:'none',color:'#fff',fontSize:20,lineHeight:1,cursor:'pointer',padding:'0 2px'}}>×</button>
      </div>
      <iframe src={SRC} title="Fairwall AI chat" allow="microphone; clipboard-write" style={{flex:1,width:'100%',border:'none'}}></iframe>
    </div>}
    <button onClick={toggle} aria-expanded={open} aria-label={open?'Close chat':'Open chat'} style={{width:56,height:56,borderRadius:'50%',border:'none',cursor:'pointer',background:'var(--teal-500)',color:'var(--navy-950)',boxShadow:'0 10px 26px rgba(31,216,164,.4)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      {open
        ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.9 8.9 0 0 1-3.8-.8L3 21l1.6-4.4A8.3 8.3 0 0 1 3.6 11 8.4 8.4 0 0 1 12.1 3h.4a8.4 8.4 0 0 1 8.5 8Z"/></svg>}
    </button>
  </div>;
}
window.ChatWidget=ChatWidget;
