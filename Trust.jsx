function Trust(){
  const T = window.t('trust');
  return <section style={{padding:'56px 48px',background:'var(--slate-50)'}}>
    <div style={{maxWidth:1200,margin:'0 auto',display:'flex',flexWrap:'wrap',gap:10}}>
      {T.facts.map(f=> <span key={f} style={{fontFamily:'var(--font-mono)',fontSize:12,padding:'6px 12px',borderRadius:'var(--radius-full)',border:'1px solid var(--border-default)',color:'var(--text-secondary)'}}>{f}</span>)}
    </div>
  </section>;
}
window.Trust = Trust;
