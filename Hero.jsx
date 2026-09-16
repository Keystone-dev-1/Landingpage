const {Button} = window.FAIrwallAIDesignSystem_492fa5;
function Hero() {
  const T = window.t('hero');
  return <section style={{position:'relative',overflow:'hidden',padding:'88px 48px 72px'}}>
    <video src="./assets/keyhole-animated.mp4" autoPlay loop muted playsInline style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',zIndex:0}}/>
    <div style={{position:'absolute',inset:0,background:'linear-gradient(100deg, rgba(10,22,40,.92) 40%, rgba(10,22,40,.55))',zIndex:1}}></div>
    <div style={{position:'relative',zIndex:2,maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 340px',gap:56,alignItems:'center'}}>
      <div>
        <div style={{display:'inline-flex',alignItems:'center',gap:12,marginBottom:20,padding:'8px 14px',background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.12)',borderRadius:'var(--radius-full)'}}>
          <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:34,lineHeight:1,display:'block',color:'var(--teal-400)'}}>{T.stat}</span>
          <span style={{fontFamily:'var(--font-body)',fontSize:13,color:'rgba(255,255,255,.85)'}}>{T.statLabel}</span>
        </div>
        <h1 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'var(--text-display-l)',lineHeight:'var(--lh-tight)',color:'#fff',margin:'0 0 20px',letterSpacing:'var(--ls-tight)'}}>{T.h1}</h1>
        <p style={{fontSize:18,color:'rgba(255,255,255,.78)',lineHeight:'var(--lh-normal)',maxWidth:520,margin:'0 0 32px'}}><Brand/>{T.lead}<b style={{color:'var(--brand-green)'}}>{T.bold}</b><br/><br/>{T.everywhere}<br/><br/>{T.forms.map((f,i)=>{const p=f.split(' — ');return <React.Fragment key={i}><b style={{color:'var(--brand-green)',fontWeight:700}}>{p[0]}</b>{p[1]?' — '+p[1]:''}{i<2?<br/>:null}</React.Fragment>;})}</p>
        <div style={{display:'flex',gap:12}}>
          <Button variant="accent" size="lg" style={{color:'#fff'}} onClick={()=>document.getElementById('demo').scrollIntoView({block:'start'})}>{T.ctaDemo}</Button>
          <Button variant="secondary" size="lg" style={{background:'transparent',color:'#fff',border:'1px solid rgba(255,255,255,.35)',borderRadius:'var(--radius-md)'}} onClick={()=>document.getElementById('pricing').scrollIntoView({block:'start'})}>{T.ctaPricing}</Button>
        </div>
      </div>
      <div className="hero-shield-box" style={{borderRadius:'var(--radius-xl)',overflow:'hidden',position:'relative',height:340,background:'var(--navy-950)',border:'1px solid rgba(255,255,255,.1)',boxShadow:'var(--shadow-lg)'}}>
        <img className="hero-shield-img" src="./assets/hero-shield.png" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      </div>
    </div>
  </section>;
}
window.Hero = Hero;
