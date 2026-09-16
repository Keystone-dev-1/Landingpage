const STATUS = ['done','progress','planned'];
const ICONS = {
  done:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--teal-600)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
  progress:<span style={{width:9,height:9,borderRadius:'50%',background:'#f0b429',display:'inline-block',boxShadow:'0 0 0 3px rgba(240,180,41,.2)'}}></span>,
  planned:<span style={{width:9,height:9,borderRadius:'50%',border:'1.5px solid var(--border-strong)',display:'inline-block'}}></span>
};
function Roadmap(){
  const T = window.t('roadmap');
  return <section style={{padding:'80px 48px'}}>
    <div style={{maxWidth:1100,margin:'0 auto'}}>
      <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h1)',color:'var(--navy-950)',margin:'0 0 40px'}}>{T.title}</h2>
      <div style={{position:'relative',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
        <div style={{position:'absolute',top:11,left:'16.5%',right:'16.5%',height:2,background:'var(--border-default)',zIndex:0}}></div>
        {T.cols.map(([label,when,items],ci)=> <div key={label} style={{position:'relative',zIndex:1}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:20}}>
            <span style={{width:24,height:24,borderRadius:'50%',background:ci===0?'var(--teal-500)':'#fff',border:ci===0?'none':'2px solid var(--border-strong)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              {ci===0 && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--navy-950)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
            </span>
            <div>
              <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:16,color:'var(--navy-950)'}}>{label}</div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-tertiary)'}}>{when}</div>
            </div>
          </div>
          <div style={{background:'#fff',border:'1px solid var(--border-default)',borderRadius:'var(--radius-lg)',padding:'20px 22px'}}>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:14}}>
              {items.map(label2=> <li key={label2} style={{display:'flex',alignItems:'center',gap:10,fontSize:14,color:STATUS[ci]==='planned'?'var(--text-tertiary)':'var(--text-primary)'}}>
                <span style={{width:15,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{ICONS[STATUS[ci]]}</span>
                {label2}
              </li>)}
            </ul>
          </div>
        </div>)}
      </div>
    </div>
  </section>;
}
window.Roadmap = Roadmap;
