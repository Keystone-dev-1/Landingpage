function Locations(){
  const T = window.t('locations');
  return <section style={{padding:'80px 48px'}}>
    <div style={{maxWidth:1100,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:40}}>
      <div>
        <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h2)',color:'var(--navy-950)',margin:'0 0 20px'}}>{T.quotesTitle}</h2>
        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {T.quotes.map(([q,role])=> <div key={role} style={{background:'#fff',border:'1px solid var(--border-default)',borderRadius:'var(--radius-lg)',padding:20}}>
            <p style={{margin:'0 0 10px',fontSize:14,color:'var(--text-primary)',lineHeight:'var(--lh-normal)'}}>"{q}"</p>
            <span style={{fontSize:12,color:'var(--text-tertiary)'}}>{role} · {T.placeholder}</span>
          </div>)}
        </div>
      </div>
      <div>
        <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h2)',color:'var(--navy-950)',margin:'0 0 20px'}}>{T.locationTitle}</h2>
        <div style={{borderRadius:'var(--radius-lg)',overflow:'hidden',border:'1px solid var(--border-default)'}}>
          <iframe title="Fairwall AI HQ" width="100%" height="220" style={{border:0,display:'block'}} loading="lazy" src="https://maps.google.com/maps?q=Hadikgasse%2064%2C%201140%20Wien&z=15&output=embed"></iframe>
        </div>
        <div style={{fontSize:13,color:'var(--text-secondary)',marginTop:10,fontFamily:'var(--font-mono)'}}>Hadikgasse 64, 1140 Wien</div>
      </div>
    </div>
  </section>;
}
window.Locations = Locations;
