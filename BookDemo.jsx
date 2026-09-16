function BookDemo(){
  const SRC='https://calendar.app.google/oMppAFrYK9qQw9wn9';
  const T = window.t('book');
  return <section id="book-demo" style={{padding:'80px 48px',background:'var(--navy-950)'}}>
    <div style={{maxWidth:1100,margin:'0 auto',display:'grid',gridTemplateColumns:'minmax(0,0.72fr) minmax(0,1.28fr)',gap:40,alignItems:'start'}}>
      <div>
        <p style={{fontSize:12,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--brand-green)',margin:'0 0 14px'}}>{T.eyebrow}</p>
        <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h1)',color:'#fff',margin:'0 0 14px',lineHeight:1.1}}>{T.title}</h2>
        <p style={{color:'var(--text-inverse-secondary)',fontSize:16,lineHeight:1.65,margin:'0 0 28px',maxWidth:'46ch',textWrap:'pretty'}}>{T.body}</p>
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          {T.bullets.map(t=>
            <div key={t} style={{display:'flex',alignItems:'flex-start',gap:12}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal-400)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:2}}><path d="M4 12.5l5 5L20 6.5"/></svg>
              <span style={{color:'#fff',fontSize:15,lineHeight:1.5}}>{t}</span>
            </div>)}
        </div>
        <p style={{margin:'28px 0 0',fontSize:13,color:'var(--text-inverse-secondary)'}}>{T.fallbackA}<a href={SRC} target="_blank" rel="noopener" style={{color:'var(--teal-400)',textDecoration:'underline'}}>{T.fallbackB}</a>.</p>
      </div>
      <div style={{background:'#fff',border:'1px solid rgba(255,255,255,.14)',borderRadius:'var(--radius-lg)',overflow:'hidden',boxShadow:'0 18px 50px rgba(0,0,0,.32)'}}>
        <iframe src={SRC} title="Book a Fairwall AI demo" style={{width:'100%',height:820,border:'none',display:'block'}}></iframe>
      </div>
    </div>
  </section>;
}
window.BookDemo = BookDemo;
