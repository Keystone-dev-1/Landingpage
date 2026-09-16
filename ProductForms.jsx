function ProductForms(){
  const T = window.t('forms');
  return <section style={{background:'var(--navy-950)',padding:'80px 48px'}}>
    <div style={{maxWidth:1200,margin:'0 auto'}}>
      <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'var(--text-h1)',color:'#fff',margin:'0 0 8px'}}>{T.title}</h2>
      <p style={{color:'var(--text-inverse-secondary)',fontSize:16,margin:'0 0 32px'}}>{T.subA}<Brand/>{T.subB}</p>
      <img src="./assets/product-forms.jpg" alt={T.alt} style={{width:'100%',display:'block',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)'}}/>
    </div>
  </section>;
}
window.ProductForms = ProductForms;
