const translations = {
  en: {
    navHome: 'HOME', navServices: 'SERVICES', navAbout: 'ABOUT US', navContact: 'CONTACT US',
    getQuote: 'GET QUOTE', heroTitle: 'Jeddah AC Repairing services', heroSub: 'جدة للتبريد والتكييف',
    heroText: 'Top-Notch Air Conditioning AC Technicians in Jeddah Saudi Arabia for AC, fridge, refrigerator and automatic washing machine repair services.',
    contactUs: 'CONTACT US', s1Title: 'Air Condition Repair Service', s1Text: 'Split AC, window AC installation, maintenance, gas refill, duct and compressor repair with expert technicians.',
    s2Title: 'Automatic Washing Machine Repair Service', s2Text: 'Complete front-load and top-load washer diagnostics, motor repair, spin issues, water leakage and installation.',
    s3Title: 'Refrigerators Repair Service', s3Text: 'Fridge not cooling? We fix compressor, thermostat, condenser coils, gas leak and electrical issues fast.',
    aboutTitle: 'We are Professional AC Installation & Maintenance For Home or Office', aboutText: 'For 8+ years, Talal Centre has delivered reliable home appliance maintenance in Jeddah with quick response and quality workmanship.',
    learnMore: 'LEARN MORE', ourServices: 'OUR SERVICES', numberSpeaks: 'Number Speaks', contactTitle: 'Contact Talal Centre',
    contactText: 'Book your AC, fridge, and washing machine repair service in Jeddah now.', contactNow: 'CONTACT NOW', viewAllServices:'VIEW ALL SERVICES', why:'Why Choose Us?', supportTitle:'24/7 Customer Support', supportText:'24/7 Customer Support available at any time. Our team are available 24 hours for maintenance of your home appliance.', freeConsultation:'FREE CONSULTATION', address:'Address:', hours:'Open Hours:', aboutShortTitle:'About', aboutShort:'Talal Centre provides AC, refrigerator and washing machine repair services in Jeddah with trained technicians and fast response.', conditioning:'Conditioning', servicesPageTitle:'Our Services in Jeddah', servicesPageText:'Complete appliance maintenance and repair solutions for homes and offices.', bookNow:'BOOK SERVICE NOW'
  },
  ar: {
    navHome: 'الرئيسية', navServices: 'الخدمات', navAbout: 'من نحن', navContact: 'اتصل بنا',
    getQuote: 'اطلب عرض سعر', heroTitle: 'خدمات إصلاح مكيفات جدة', heroSub: 'جدة للتبريد والتكييف',
    heroText: 'فنيون محترفون في جدة لصيانة المكيفات والثلاجات والغسالات الأوتوماتيك بخدمة منزلية سريعة.',
    contactUs: 'اتصل بنا', s1Title: 'خدمة صيانة المكيفات', s1Text: 'صيانة وتركيب مكيفات سبليت وشباك، تعبئة غاز، إصلاح تسريبات وكومبروسر بأيدي فنية خبيرة.',
    s2Title: 'خدمة صيانة الغسالات الأوتوماتيك', s2Text: 'فحص شامل للغسالات الأمامية والعلوية وإصلاح مشاكل العصر والتسريب والمحرك والتركيب.',
    s3Title: 'خدمة صيانة الثلاجات', s3Text: 'إذا كانت الثلاجة لا تبرد، نقوم بإصلاح الكومبروسر والثرموستات ودوائر الكهرباء وتسريب الغاز.',
    aboutTitle: 'نحن محترفون في تركيب وصيانة المكيفات للمنزل أو المكتب', aboutText: 'منذ أكثر من 8 سنوات يقدم مركز طلال خدمات صيانة منزلية موثوقة في جدة بسرعة وجودة عالية.',
    learnMore: 'اعرف المزيد', ourServices: 'خدماتنا', numberSpeaks: 'الأرقام تتحدث', contactTitle: 'تواصل مع مركز طلال',
    contactText: 'احجز الآن خدمة صيانة المكيفات والثلاجات والغسالات في جدة.', contactNow: 'تواصل الآن', viewAllServices:'عرض كل الخدمات', why:'لماذا تختارنا؟', supportTitle:'دعم عملاء 24/7', supportText:'دعم العملاء متاح طوال الوقت، وفريقنا جاهز 24 ساعة لصيانة أجهزتك المنزلية.', freeConsultation:'استشارة مجانية', address:'العنوان:', hours:'ساعات العمل:', aboutShortTitle:'نبذة', aboutShort:'يقدم مركز طلال خدمات صيانة المكيفات والثلاجات والغسالات في جدة بفنيين محترفين واستجابة سريعة.', conditioning:'التكييف', servicesPageTitle:'خدماتنا في جدة', servicesPageText:'حلول متكاملة لصيانة وإصلاح الأجهزة المنزلية والمكتبية.', bookNow:'احجز الخدمة الآن'
  }
};

const buttons = document.querySelectorAll('[data-lang-btn]');
const nodes = document.querySelectorAll('[data-i18n]');
const nav = document.getElementById('navMenu');
document.getElementById('year').textContent = new Date().getFullYear();

function setLang(lang) {
  const t = translations[lang] || translations.en;
  nodes.forEach((n) => { const k = n.dataset.i18n; if (t[k]) n.textContent = t[k]; });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  buttons.forEach((b) => b.classList.toggle('active', b.dataset.langBtn === lang));
  localStorage.setItem('talal_lang', lang);
}

buttons.forEach((b) => b.addEventListener('click', () => setLang(b.dataset.langBtn)));
document.getElementById('hamburger').addEventListener('click', () => nav.classList.toggle('open'));
setLang(localStorage.getItem('talal_lang') || 'en');
