const {Button} = window.FAIrwallAIDesignSystem_492fa5;
function LangToggle(){
  const de = window.SITE_LANG==='de';
  const item = (active)=>({padding:'6px 11px',fontSize:12,fontWeight:700,fontFamily:'var(--font-body)',color:active?'#fff':'var(--text-secondary)',background:active?'var(--navy-950)':'transparent',textDecoration:'none',display:'block'});
  return <div style={{display:'flex',border:'1px solid var(--border-default)',borderRadius:'var(--radius-md)',overflow:'hidden'}}>
    <a href="index.html" hrefLang="en" style={item(!de)}>EN</a>
    <a href="index-de.html" hrefLang="de" style={item(de)}>DE</a>
  </div>;
}
function Header() {
  const T = window.t('header');
  const [open,setOpen] = React.useState(false);
  React.useEffect(()=>{document.body.style.overflow = open ? 'hidden' : '';},[open]);
  return <React.Fragment>
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 48px',borderBottom:'1px solid var(--border-default)',background:'#fff',position:'sticky',top:0,zIndex:20}}>
      <a href="#" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
        <img src="./assets/logo-mark-new.png" style={{height:64}}/>
        <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:24,color:'var(--navy-950)'}}>F<span style={{color:'var(--brand-green)'}}>ai</span>rwall <span style={{color:'var(--brand-green)'}}>AI</span></span>
      </a>
      <nav className="nav-desktop" style={{display:'flex',gap:28,fontFamily:'var(--font-body)',fontWeight:600,fontSize:14}}>
        {T.nav.map(([label,href])=> <a key={label} href={href} style={{color:'var(--text-secondary)'}}>{label}</a>)}
      </nav>
      <div style={{display:'flex',gap:10,alignItems:'center'}}>
        <LangToggle/>
        <Button className="hdr-signin" variant="ghost" size="sm">{T.signIn}</Button>
        <Button variant="accent" size="sm" onClick={()=>document.getElementById('demo').scrollIntoView({block:'start'})}>{T.cta}</Button>
        <button className="nav-burger" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)} style={{display:'none',width:40,height:40,alignItems:'center',justifyContent:'center',background:'transparent',border:'1px solid var(--border-default)',borderRadius:'var(--radius-md)',cursor:'pointer',padding:0}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy-950)" strokeWidth="2" strokeLinecap="round">
            {open ? <React.Fragment><path d="M5 5l14 14"/><path d="M19 5L5 19"/></React.Fragment> : <React.Fragment><path d="M3 7h18"/><path d="M3 12h18"/><path d="M3 17h18"/></React.Fragment>}
          </svg>
        </button>
      </div>
    </header>
    <div className="nav-sheet-backdrop" onClick={()=>setOpen(false)} style={{display:open?'block':'none',position:'fixed',inset:0,background:'rgba(10,22,40,.5)',zIndex:40}}></div>
    <div className="nav-sheet" style={{position:'fixed',left:0,right:0,bottom:0,zIndex:41,background:'#fff',borderTopLeftRadius:'var(--radius-xl)',borderTopRightRadius:'var(--radius-xl)',boxShadow:'0 -12px 40px rgba(10,22,40,.22)',padding:'10px 8px 14px',transform:open?'translateY(0)':'translateY(110%)',transition:'transform .26s cubic-bezier(.32,.72,0,1)',visibility:open?'visible':'hidden'}}>
      <div style={{width:44,height:4,borderRadius:2,background:'var(--border-default)',margin:'2px auto 8px'}}></div>
      <nav style={{display:'grid'}}>
        {T.nav.map(([label,href])=> <a key={label} href={href} onClick={()=>setOpen(false)} style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,color:'var(--navy-950)',textDecoration:'none',padding:'14px 16px',borderRadius:'var(--radius-md)'}}>{label}</a>)}
        <a href="#" onClick={()=>setOpen(false)} style={{fontFamily:'var(--font-body)',fontWeight:600,fontSize:15,color:'var(--text-secondary)',textDecoration:'none',padding:'14px 16px',borderTop:'1px solid var(--border-subtle)',marginTop:6}}>{T.signIn}</a>
      </nav>
    </div>
  </React.Fragment>;
}
Object.assign(window,{Header,LangToggle});
