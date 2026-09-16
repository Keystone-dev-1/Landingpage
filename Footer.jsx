function Footer() {
  const T = window.t('footer');
  const l = {color:'var(--text-inverse-secondary)',textDecoration:'none'};
  return <footer style={{background:'var(--navy-950)',padding:'48px',color:'var(--text-inverse-secondary)',fontFamily:'var(--font-body)',fontSize:13}}>
    <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <span style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#fff'}}>F<span style={{color:'var(--brand-green)'}}>ai</span>rwall <span style={{color:'var(--brand-green)'}}>AI</span></span>
      <span style={{display:'flex',alignItems:'center',gap:20}}>
        <a href="insights.html" style={l}>Insights</a>
        <a href="impressum.html" style={l}>{T.impressum}</a>
        <a href="terms.html" style={l}>{T.terms}</a>
        <a href="#" onClick={e=>{e.preventDefault();window.openCookieSettings&&window.openCookieSettings()}} style={l}>{T.cookies}</a>
        <a href={window.SITE_LANG==='de'?'index.html':'index-de.html'} style={l}>{window.SITE_LANG==='de'?'English':'Deutsch'}</a>
        <span>{T.rights}<Brand/>, Inc.</span>
      </span>
    </div>
  </footer>;
}
window.Footer = Footer;
