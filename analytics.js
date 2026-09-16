// GA4 with Consent Mode v2 — denied by default, no cookies until the user consents.
(function(){
  var KEY='fairwall.cookie.consent.v1';
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments)}
  window.gtag=gtag;
  var granted=false;
  try{var s=JSON.parse(localStorage.getItem(KEY)||'null');granted=!!(s&&s.version===1&&s.analytics)}catch(e){}
  gtag('consent','default',{
    ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',
    analytics_storage: granted?'granted':'denied',
    functionality_storage:'granted',security_storage:'granted',wait_for_update:500
  });
  gtag('js',new Date());
  gtag('config','G-4YHYSZQJT5',{anonymize_ip:true});
  var t=document.createElement('script');
  t.async=true;t.src='https://www.googletagmanager.com/gtag/js?id=G-4YHYSZQJT5';
  document.head.appendChild(t);
  // called by the cookie banner
  window.setAnalyticsConsent=function(on){
    gtag('consent','update',{analytics_storage:on?'granted':'denied'});
    if(on) gtag('event','page_view');
  };
})();