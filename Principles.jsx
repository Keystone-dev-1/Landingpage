function Icon({d,size=40}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--teal-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{d}</svg>;}
const PRINCIPLE_ICONS = [
  <Icon d={<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="2.5"/></>}/>,
  <Icon d={<><path d="M9 11V6a2 2 0 0 1 4 0v5"/><path d="M13 6a2 2 0 0 1 4 0v6"/><path d="M17 8a2 2 0 0 1 4 0v6a6 6 0 0 1-6 6h-2a6 6 0 0 1-5-2.7L5 12.5a1.7 1.7 0 0 1 2.5-2.3L9 12"/></>}/>,
  <Icon d={<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>}/>,
  <Icon d={<><path d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M9.5 13.5l2 2 3.5-4"/></>}/>
];
function Principles(){
  const T = window.t('principles');
  return <section style={{padding:'80px 48px',maxWidth:1200,margin:'0 auto'}}>
    <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h1)',color:'var(--navy-950)',margin:'0 0 40px'}}>{T.titleA}<Brand/>{T.titleB}</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
      {T.items.map(([t,d],i)=> <div key={t}>
        <div style={{marginBottom:20}}>{PRINCIPLE_ICONS[i]}</div>
        <h3 style={{fontFamily:'var(--font-display)',fontSize:16,margin:'0 0 8px',color:'var(--navy-950)'}}>{t}</h3>
        <p style={{margin:0,fontSize:14,color:'var(--text-secondary)',lineHeight:'var(--lh-normal)'}}>{d}</p>
      </div>)}
    </div>
  </section>;
}
window.Principles = Principles;
