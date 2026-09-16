function FAQ(){
  const T = (window.t && window.t('faq')) || null;
  if(!T || !T.items || !T.items.length) return null;
  const [open,setOpen] = React.useState(0);
  return <section id="faq" style={{padding:'88px 48px',background:'var(--slate-50)'}}>
    <div style={{maxWidth:820,margin:'0 auto'}}>
      <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h1)',color:'var(--navy-950)',margin:'0 0 32px',letterSpacing:'-0.02em'}}>{T.title}</h2>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {T.items.map(([q,a],n)=>(
          <div key={n} style={{background:'#fff',border:'1px solid var(--border-default)',borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
            <button type="button" onClick={()=>setOpen(open===n?-1:n)} aria-expanded={open===n}
              style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:'18px 22px',background:'none',border:0,cursor:'pointer',textAlign:'left',font:'inherit'}}>
              <span style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:17,color:'var(--navy-950)',lineHeight:1.35}}>{q}</span>
              <span style={{color:'var(--brand-green)',fontSize:20,lineHeight:1,transform:open===n?'rotate(45deg)':'none',transition:'transform .18s'}}>+</span>
            </button>
            {open===n && <p style={{margin:0,padding:'0 22px 20px',color:'var(--text-secondary)',fontSize:15.5,lineHeight:'var(--lh-relaxed)',maxWidth:'68ch'}}>{a}</p>}
          </div>))}
      </div>
    </div>
  </section>;
}
