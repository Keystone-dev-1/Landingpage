// Tiny local detector used by both redesign directions. Mirrors what the product does: detect → placeholder → restore.
(function(){
const NAMES='Anna Maria Lukas Sophie Jonas Elena Thomas Laura Felix Clara David Sarah Michael Julia Paul Lena Juan Carlos Pedro Pablo Javier Lucia Carmen Sofia Isabel Andrea Daniel Alexander Max Leon Noah Emma Mia Hannah Lea Marie Johanna Katharina Christina Stefan Markus Martin Peter Andreas Florian Tobias Simon Jakob Elias Tim Jan Ben Finn Luis Mark John James Robert William Richard Joseph Charles Mary Jennifer Linda Elizabeth Susan Jessica Karen Nancy Lisa Emily Olivia Ava Isabella Liam Oliver Ethan Lucas Mateo Ana Laura Marta Elisa Giulia Marco Luca Matteo Francesco Pierre Jean Louis Camille Chloe Manon Ahmed Mohamed Ali Fatima Yusuf Omar Ivan Olga Anja Petra Eva Sabine Monika Ursula Wolfgang Helmut Georg Franz Josef Karl Hans Klaus Jürgen Günter Müller Mueller Schmidt Huber Wagner Bauer Gruber Weber Fischer Novak Berger Hofmann Keller Meyer Maier Mayer Schneider Becker Schulz Koch Richter Klein Wolf Neumann Schwarz Zimmermann Braun Krüger Hartmann Lange Werner Krause Lehmann Steiner Moser Pichler Leitner Fuchs Eder Winkler Brunner Lang Garcia Rodriguez Martinez Lopez Gonzalez Hernandez Perez Sanchez Ramirez Torres Flores Rivera Gomez Diaz Ruiz Alvarez Romero Smith Johnson Williams Brown Jones Miller Davis Wilson Anderson Taylor Thomas Moore Jackson White Harris Clark Lewis Walker Hall Young King Wright Rossi Russo Ferrari Esposito Bianchi Romano Dubois Martin Bernard Petit Durand Leroy Moreau'.split(' ');
const CITIES='Vienna Wien Berlin Munich München Graz Salzburg Zurich Zürich Hamburg Linz Paris London Madrid Barcelona Valencia Sevilla Seville Bilbao Malaga Málaga Lisbon Lissabon Porto Rome Rom Milan Mailand Naples Turin Florence Venice Amsterdam Rotterdam Brussels Brüssel Antwerp Copenhagen Stockholm Oslo Helsinki Dublin Edinburgh Manchester Birmingham Prague Prag Budapest Warsaw Warschau Krakow Bratislava Ljubljana Zagreb Bucharest Sofia Athens Athen Istanbul Geneva Genf Basel Bern Lausanne Innsbruck Klagenfurt Villach Bregenz Wels Steyr Frankfurt Cologne Köln Düsseldorf Stuttgart Leipzig Dresden Hannover Nuremberg Nürnberg Bremen Bonn Mannheim Freiburg Heidelberg Augsburg Regensburg Lyon Marseille Nice Toulouse Bordeaux Lille Nantes Strasbourg Luxembourg Monaco Madrid Mexico Bogota Bogotá Lima Santiago Quito Caracas Havana Miami Chicago Boston Seattle Austin Dallas Houston Denver Atlanta Toronto Montreal Vancouver Sydney Melbourne Tokyo Seoul Beijing Shanghai Singapore Dubai Mumbai Delhi Cairo Johannesburg Nairobi Lagos'.split(' ');
const STOP=new Set('The This That These Those Dear Hi Hello Hey Best Kind Regards Thanks Thank Please Help Write Draft Summarise Summarize Sign Call Contact Subject Monday Tuesday Wednesday Thursday Friday Saturday Sunday January February March April May June July August September October November December I We You My Our Your Mr Ms Mrs Dr Herr Frau HR AI KI Schreibe Fasse Hilf Ruf Unterschreibe Betreff Sehr Bitte Mit Kontakt Rechnung Erinnerung Gehalt Konto Bank Juni März Mai Januar Februar Juli Oktober Dezember Liebe Lieber Hallo Grüße Danke New Old North South East West Street Road Lane Avenue'.split(' '));
const RULES=[
 ['EMAIL',/[\w.+-]+@[\w-]+\.[\w.]+/g],
 ['IBAN',/\b[A-Z]{2}\d{2}(?: ?[A-Z0-9]{4}){3,7}\b/g],
 ['SSN',/\b\d{3}-\d{2}-\d{4}\b/g],
 ['PHONE',/(?:\+|00)?\d[\d ()\/.-]{6,}\d/g],
 ['INVOICE',/\b(?:INV|RE)-?\d{3,}\b/gi],
 ['MONEY',/(?:€|\$|EUR\s?)\s?\d[\d.,]*(?:\s?(?:k|K|Mio))?|\b\d[\d.,]*\s?(?:€|EUR)\b/g],
 ['NAME',new RegExp('(?<![\\wÄÖÜäöüß])(?:'+NAMES.join('|')+')(?![\\wÄÖÜäöüß])','g')],
 ['CITY',new RegExp('(?<![\\wÄÖÜäöüß])(?:'+CITIES.join('|')+')(?![\\wÄÖÜäöüß])','g')],
 // unknown names: after a cue word, or two capitalised words in a row
 ['NAME',/(?<=\b(?:Dear|Hi|Hello|Hey|Mr\.?|Ms\.?|Mrs\.?|Dr\.?|Herr|Frau|Liebe|Lieber|Hallo|named|called|I am|I'm|ich bin|from|von|with|mit|to|an|for|für|as|als|by|cc)\s)[A-ZÄÖÜ][a-zäöüß]{2,}(?:\s[A-ZÄÖÜ][a-zäöüß]{2,})?/g,true],
 ['NAME',/(?<![\wÄÖÜäöüß])[A-ZÄÖÜ][a-zäöüß]{2,}\s[A-ZÄÖÜ][a-zäöüß]{2,}(?![\wÄÖÜäöüß])/g,true],
 // unknown cities: after in / in der / aus / near
 ['CITY',/(?<=\b(?:in|aus|near|nach|based in|located in|living in)\s)[A-ZÄÖÜ][a-zäöüß]{3,}/g,true]
];
function detect(text){
  const hits=[];
  for(const [type,re,heur] of RULES){re.lastIndex=0;let m;while((m=re.exec(text))){let v=m[0];
    if(heur){const w=v.split(/\s/);if(STOP.has(w[0]))continue;if(w[1]&&STOP.has(w[1]))v=w[0];if(type==='CITY'&&STOP.has(v))continue;}
    const s=m.index,e=s+v.length;if(!hits.some(h=>s<h.e&&e>h.s))hits.push({type,s,e,v});}}
  hits.sort((a,b)=>a.s-b.s);
  const counts={},map={};
  hits.forEach(h=>{const key=h.type+'|'+h.v;if(!map[key]){counts[h.type]=(counts[h.type]||0)+1;map[key]='['+h.type+'_'+counts[h.type]+']';}h.ph=map[key];});
  return hits;
}
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
// mode: 'mark' (highlight real values) | 'redact' (placeholders) 
function render(text,hits,mode,skip){
  let out='',i=0;skip=skip||new Set();
  hits.forEach((h,k)=>{out+=esc(text.slice(i,h.s));
    if(skip.has(k)) out+=esc(h.v);
    else out+= mode==='redact'?`<mark class="ph" data-t="${h.type}">${h.ph}</mark>`:`<mark class="pii" data-k="${k}" data-t="${h.type}">${esc(h.v)}</mark>`;
    i=h.e;});
  return out+esc(text.slice(i));
}
function restore(reply,hits,wrap){const m={};hits.forEach(h=>m[h.ph]=h.v);return esc(reply).replace(/\[([A-Z]+_\d+)\]/g,(x)=>m[x]?(wrap?`<mark class="back">${esc(m[x])}</mark>`:esc(m[x])):x);}
function phs(reply){return esc(reply).replace(/\[([A-Z]+_\d+)\]/g,'<mark class="ph">$&</mark>');}
const presets=[
 {k:'Payment reminder',p:'Write a polite reminder to Anna Müller (anna.mueller@gruber.at) that invoice INV-20481 over €12,400 is overdue. Sign as Lukas from Vienna.',
  r:'Subject: Reminder – [INVOICE_1]\n\nDear [NAME_1] [NAME_2],\n\nI hope you are well. This is a friendly reminder that invoice [INVOICE_1] for [MONEY_1] is now past its due date. Could you let me know when we can expect payment?\n\nBest regards,\n[NAME_3], [CITY_1]'},
 {k:'Bank complaint',p:'Help me complain to my bank: on 3 March €2,350 left my account AT61 1904 3002 3457 3201 without consent. Call me on +43 664 1234567. I am Sophie Berger.',
  r:'Dear Sir or Madam,\n\nOn 3 March a payment of [MONEY_1] was debited from my account [IBAN_1] without my authorisation. Please reverse the transaction and confirm in writing.\n\nYou can reach me on [PHONE_1].\n\nKind regards,\n[NAME_1] [NAME_2]'},
 {k:'HR memo',p:'Summarise for HR: Jonas Weber (SSN 123-45-6789) moves from Graz to Berlin on 1 June, new salary €78,000. Contact: jonas.weber@firma.de',
  r:'HR summary\n\n• Employee: [NAME_1] [NAME_2]\n• Relocation: [CITY_1] → [CITY_2], from 1 June\n• New annual salary: [MONEY_1]\n• Identifier on file: [SSN_1]\n• Contact: [EMAIL_1]'}
];
const presetsDe=[
 {k:'Zahlungserinnerung',p:'Schreibe eine höfliche Erinnerung an Anna Müller (anna.mueller@gruber.at), dass die Rechnung RE-20481 über €12.400 überfällig ist. Unterschreibe als Lukas aus Wien.',
  r:'Betreff: Erinnerung – [INVOICE_1]\n\nSehr geehrte Frau [NAME_2],\n\nwir möchten Sie freundlich daran erinnern, dass die Rechnung [INVOICE_1] über [MONEY_1] inzwischen überfällig ist. Könnten Sie uns mitteilen, wann wir mit der Zahlung rechnen dürfen?\n\nMit freundlichen Grüßen\n[NAME_3], [CITY_1]'},
 {k:'Bankbeschwerde',p:'Hilf mir, mich bei meiner Bank zu beschweren: Am 3. März wurden €2.350 ohne meine Zustimmung von meinem Konto AT61 1904 3002 3457 3201 abgebucht. Ruf mich an unter +43 664 1234567. Ich bin Sophie Berger.',
  r:'Sehr geehrte Damen und Herren,\n\nam 3. März wurde ein Betrag von [MONEY_1] ohne meine Zustimmung von meinem Konto [IBAN_1] abgebucht. Bitte machen Sie die Buchung rückgängig und bestätigen Sie dies schriftlich.\n\nSie erreichen mich unter [PHONE_1].\n\nMit freundlichen Grüßen\n[NAME_1] [NAME_2]'},
 {k:'HR-Notiz',p:'Fasse für HR zusammen: Jonas Weber (SSN 123-45-6789) zieht am 1. Juni von Graz nach Berlin, neues Gehalt €78.000. Kontakt: jonas.weber@firma.de',
  r:'HR-Zusammenfassung\n\n• Mitarbeiter: [NAME_1] [NAME_2]\n• Umzug: [CITY_1] → [CITY_2], ab 1. Juni\n• Neues Jahresgehalt: [MONEY_1]\n• Kennung in der Akte: [SSN_1]\n• Kontakt: [EMAIL_1]'}
];
window.FW={detect,render,esc,restore,phs,presets:window.SITE_LANG==='de'?presetsDe:presets};
})();
