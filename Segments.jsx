const {Button} = window.FAIrwallAIDesignSystem_492fa5;
const SEG_ICONS = {
  Corporates: <><path d="M4 21V6l7-3 7 3v15"/><path d="M9 21v-6h4v6"/><path d="M9 9h.01M9 13h.01M13 9h.01M13 13h.01"/></>,
  Individuals: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></>,
  'AI Agencies': <><circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M12 7.2V13m0 0-5.5 3M12 13l5.5 3"/></>
};
function Segments(){
  const T = window.t('segments');
  const keys = ['Corporates','Individuals','AI Agencies'];
  const [flipped,setFlipped] = React.useState(null);
  const isTouch = ()=> window.matchMedia('(hover:none)').matches;
  const toPricing = ()=> document.getElementById('pricing').scrollIntoView({block:'start'});
  const tap = (k)=>{ if(isTouch()) setFlipped(f=> f===k ? null : k); else toPricing(); };
  return <section style={{padding:'80px 48px'}}>
    <div style={{maxWidth:1200,margin:'0 auto'}}>
      <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h1)',color:'var(--navy-950)',margin:'0 0 32px'}}>{T.title}</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
        {keys.map(k=> <div key={k} className={flipped===k?'flip-card flipped':'flip-card'} style={{perspective:1200,height:300}}>
          <div className="flip-card-inner" style={{position:'relative',width:'100%',height:'100%',transition:'transform .6s cubic-bezier(.4,.2,.2,1)',transformStyle:'preserve-3d'}}>
            <div style={{position:'absolute',inset:0,backfaceVisibility:'hidden',background:'#fff',border:'1px solid var(--border-default)',borderRadius:'var(--radius-lg)',padding:28,display:'flex',flexDirection:'column',gap:12,cursor:'pointer'}} onClick={()=>tap(k)}>
              <div style={{width:44,height:44,borderRadius:'var(--radius-md)',background:'var(--teal-100)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--teal-600)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{SEG_ICONS[k]}</svg>
              </div>
              <h3 style={{fontFamily:'var(--font-display)',fontSize:18,margin:0,color:'var(--navy-950)'}}>{T.labels[k]}</h3>
              <p style={{margin:0,fontSize:14,color:'var(--text-secondary)',flex:1}}>{T.desc[k]}</p>
              <Button variant="ghost" size="sm" onClick={e=>{e.stopPropagation();toPricing()}}>{T.cta}</Button>
            </div>
            <div style={{position:'absolute',inset:0,backfaceVisibility:'hidden',transform:'rotateY(180deg)',background:'var(--navy-950)',borderRadius:'var(--radius-lg)',padding:'20px 22px',display:'flex',flexDirection:'column',gap:10,justifyContent:'center',cursor:'pointer'}} onClick={()=>tap(k)}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.06em',color:'var(--teal-400)'}}>{T.solutions}</div>
              {T.tiers[k].map(([tier,lines])=> <div key={tier}>
                <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:13,color:'var(--teal-400)',marginBottom:4}}>{tier}</div>
                {lines.map(([label,d],i)=> <div key={i} style={{fontSize:12,color:'rgba(255,255,255,.75)',lineHeight:'var(--lh-snug)',marginBottom:i<lines.length-1?4:0}}><b style={{color:'var(--brand-green)'}}>{label}</b> {d}</div>)}
              </div>)}
            </div>
          </div>
        </div>)}
      </div>
    </div>
    <style>{`.flip-card:hover .flip-card-inner{transform:rotateY(180deg)}`}</style>
  </section>;
}
window.Segments = Segments;
