const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const languageToggle = document.querySelector(".nav-lang");
let currentLanguage = "so";

const amharicTranslations = {
  "Open navigation": "የዳሰሳ ምናሌን ክፈት",
  "Close navigation": "የዳሰሳ ምናሌን ዝጋ",
  "Main navigation": "ዋና የዳሰሳ ምናሌ",
  "Sorella home": "የሶሬላ መነሻ",
  "Restaurant and food photo gallery": "የምግብ ቤትና ምግብ ፎቶ ጋለሪ",
  "Warm candlelit restaurant table set for dinner": "በሻማ ብርሃን የተዘጋጀ የምግብ ቤት ጠረጴዛ",
  "Translate to Amharic": "ወደ አማርኛ ተርጉም",
  "Switch to English": "ወደ እንግሊዝኛ ቀይር",
  "Switch to Somali": "ወደ ሶማሊኛ ቀይር",
  "Our story": "ስለ እኛ",
  "The menu": "ምናሌ",
  "The space": "የምግብ ቤቱ",
  "Find us": "እኛን ያግኙ",
  "Find us ↗": "እኛን ያግኙ ↗",
  "Book a table": "ጠረጴዛ ይያዙ",
  "A little corner of Italy in the city": "በከተማው ውስጥ ትንሽ የጣሊያን ማዕዘን",
  "Come for dinner.": "ለእራት ይምጡ።",
  "Stay for the feeling.": "ለደስታው ይቆዩ።",
  "Handmade pasta, good wine, and a table that always has room for one more.": "በእጅ የተዘጋጀ ፓስታ፣ ጥሩ ወይን እና ሁልጊዜ ለአንድ ተጨማሪ ሰው ቦታ ያለው ጠረጴዛ።",
  "Find your table": "ጠረጴዛዎን ይምረጡ",
  "Get to know us": "ስለ እኛ ይወቁ",
  "EST. 2018": "ከ2018 ጀምሮ",
  "MADE WITH AMORE": "በፍቅር የተሰራ",
  "Scroll to our story": "ወደ ታሪካችን ይሸብልሉ",
  "SCROLL A LITTLE": "ትንሽ ወደ ታች ይሸብልሉ",
  "FATTO CON": "በፍቅር",
  "AMORE": "ፍቅር",
  "Benvenuti, you're home": "እንኳን ደህና መጡ፣ ቤትዎ ነው",
  "Somewhere between": "በእርስዎ ቤት እና በእኛ መካከል",
  "your place": "",
  "and ours.": "እዚህ ቤትዎ ነው።",
  "Sorella started with a simple idea: the best nights are never rushed. So we make the pasta by hand, pour one more glass, and save you a seat at the table. Italian at heart, right at home in the neighborhood.": "ሶሬላ በቀላል ሀሳብ ተጀመረ፦ ጥሩ ምሽቶች በጥድፊያ አያልፉም። ስለዚህ ፓስታችንን በእጅ እናዘጋጃለን፣ አንድ ተጨማሪ ብርጭቆ እናፈሳለን፣ እና በጠረጴዛችን ቦታ እናስቀምጥልዎታለን። በልባችን ጣሊያናዊ፣ በአካባቢው ውስጥ ግን የቤትዎ ነው።",
  "Take a look around": "ዙሪያውን ይመልከቱ",
  "Friends sharing dinner at a warmly lit restaurant": "በሞቅ ያለ ብርሃን በተሞላ ምግብ ቤት እራት የሚጋሩ ጓደኞች",
  "Good food. Better company.": "ጥሩ ምግብ። የተሻለ ወዳጅነት።",
  "Fresh handmade pasta with seasonal ingredients": "በወቅታዊ ንጥረ ነገሮች የተዘጋጀ ትኩስ በእጅ የተሰራ ፓስታ",
  "Straight from our kitchen": "ከኩሽናችን በቀጥታ",
  "A little flour.": "ትንሽ ዱቄት።",
  "A lot of love.": "ብዙ ፍቅር።",
  "Rolled, shaped, and finished by hand. Our menu follows the seasons, takes the scenic route through Italy, and always leaves room for dessert.": "በእጅ የተዘረጋ፣ ቅርጽ የተሰጠው እና የተጠናቀቀ። ምናሌያችን ወቅቶችን ይከተላል፣ በጣሊያን ጣዕሞች ይጓዛል፣ እና ሁልጊዜ ለጣፋጭ ምግብ ቦታ ይተዋል።",
  "Brown butter ravioli": "በቅቤ እና ሪኮታ የተሞላ ራቫዮሊ",
  "sage · hazelnut · parmesan": "ሳጅ · ሃዘልነት · ፓርሜዛን",
  "Sunday ragù pappardelle": "የእሁድ ራጉ ፓፓርዴሌ",
  "slow-braised beef · pecorino": "በቀስታ የበሰለ ስጋ · ፔኮሪኖ",
  "Antipasti": "ቀዳሚ ምግቦች",
  "TO BEGIN": "ለመጀመር",
  "Bruschetta al pomodoro": "ብሩሼታ ከቲማቲም ጋር",
  "heirloom tomato · basil · grilled sourdough": "ትኩስ ቲማቲም · ባዚል · የተጠበሰ ዳቦ",
  "Burrata & peaches": "ቡራታ እና ፒች",
  "summer peach · arugula · aged balsamic": "የበጋ ፒች · አሩጉላ · የበሰለ ባልሳሚክ",
  "Pasta fatta a mano": "በእጅ የተሰራ ፓስታ",
  "FROM THE PASTA POT": "ከፓስታ ድስታችን",
  "Secondi": "ዋና ምግቦች",
  "THE MAIN EVENT": "ዋናው ምግብ",
  "Pollo alla griglia": "በጥብስ የተዘጋጀ ዶሮ",
  "herb-roasted chicken · lemon · capers": "በቅመም የተጠበሰ ዶሮ · ሎሚ · ኬፐር",
  "Branzino al limone": "ባርባንያ ዓሳ በሎሚ",
  "pan-seared sea bass · fennel · lemon": "በምጣድ የተጠበሰ የባህር ዓሳ · ፌነል · ሎሚ",
  "Dolci": "ጣፋጭ ምግቦች",
  "A LITTLE SOMETHING SWEET": "ትንሽ ጣፋጭ ነገር",
  "Tiramisu della casa": "የቤት ቲራሚሱ",
  "espresso · mascarpone · cocoa": "ኤስፕሬሶ · ማስካርፖኔ · ኮኮዋ",
  "Vanilla panna cotta": "ቫኒላ ፓና ኮታ",
  "seasonal berries · honey": "የወቅቱ ቤሪዎች · ማር",
  "Reserve your table": "ጠረጴዛዎን ያስይዙ",
  "A seat is waiting": "ቦታዎ እየጠበቀ ነው",
  "Make yourself": "እራስዎን",
  "at home.": "ቤት እንደሆኑ ይቁጠሩ።",
  "Long lunches, first dates, one more round.": "ረጅም ምሳዎች፣ የመጀመሪያ ቀጠሮዎች፣ አንድ ተጨማሪ ዙር።",
  "There’s a little room for all of it.": "ለእነዚህ ሁሉ ትንሽ ቦታ አለ።",
  "Beautifully plated Italian dinner in an intimate restaurant": "በሚያምር ሁኔታ የቀረበ የጣሊያን እራት",
  "The table is yours": "ጠረጴዛው የእርስዎ ነው",
  "Fresh pasta being prepared with care": "በጥንቃቄ የሚዘጋጅ ትኩስ ፓስታ",
  "Made fresh, every day": "በየቀኑ ትኩስ ይዘጋጃል",
  "The cozy dining room at Sorella": "የሶሬላ ምቹ የመመገቢያ ክፍል",
  "Your new favorite corner": "አዲሱ ተወዳጅ ማዕዘንዎ",
  "Warm, welcoming restaurant interior ready for dinner": "ለእራት ዝግጁ የሆነ ሞቅ ያለና አቀባበል የሚያደርግ የምግብ ቤት ውስጣዊ ክፍል",
  "Room for one more": "ለአንድ ተጨማሪ ሰው ቦታ አለ",
  "A bowl of fresh pasta with tomatoes and herbs": "ከቲማቲምና ቅጠላ ቅመሞች ጋር ትኩስ ፓስታ",
  "A little pasta, a lot of love": "ትንሽ ፓስታ፣ ብዙ ፍቅር",
  "Fresh seasonal Italian food served at the table": "በጠረጴዛ የቀረበ ትኩስ ወቅታዊ የጣሊያን ምግብ",
  "Seasonal and made to share": "በወቅቱ የተዘጋጀ፣ ለመጋራት",
  "A colorful plate of fresh food from the kitchen": "ከኩሽና የመጣ ትኩስ እና ያሸበረቀ ምግብ",
  "Straight from our kitchen": "ከኩሽናችን በቀጥታ",
  "Five out of five stars": "ከአምስት ኮከቦች አምስት",
  "“The kind of place that makes an ordinary Tuesday feel like a little celebration.”": "“መደበኛ ማክሰኞን እንደ ትንሽ በዓል የሚያደርግ ዓይነት ቦታ ነው።”",
  "THE NEIGHBORHOOD LOVES US": "የአካባቢው ሰዎች ይወዱናል",
  "Read our reviews on Google": "በGoogle ላይ ያሉ ግምገማዎቻችንን ያንብቡ",
  "Right around the corner": "ከዚህ ጥቂት ርቀት ላይ",
  "Come on": "ይምጡ",
  "over.": "ወደ እኛ።",
  "We’re easy to find and even easier to stay at. Pop in for a plate, a pour, or just to say ciao.": "እኛን ማግኘት ቀላል ነው፣ ከዚያም መቆየት ይበልጥ ቀላል ነው። ለምግብ፣ ለመጠጥ ወይም ሰላም ለማለት ይግቡ።",
  "18 Little Italy Lane": "18 ሊትል ኢታሊ ሌን",
  "New York, NY 10013": "ኒው ዮርክ, NY 10013",
  "Every day, a good day": "በየቀኑ ክፍት ነን",
  "Lunch 12–3 · Dinner 5–10": "ምሳ 12–3 · እራት 5–10",
  "Get directions": "አቅጣጫውን ያግኙ",
  "Map showing Sorella in Little Italy, New York": "በኒው ዮርክ ሊትል ኢታሊ የሚገኘውን ሶሬላ የሚያሳይ ካርታ",
  "RIGHT HERE IN THE NEIGHBORHOOD": "እዚሁ በአካባቢያችን",
  "Your table is waiting": "ጠረጴዛዎ እየጠበቀ ነው",
  "Good things happen": "ጥሩ ነገሮች ይፈጠራሉ",
  "around the table.": "በጠረጴዛ ዙሪያ።",
  "Bring your appetite. We’ll take care of the rest.": "የምግብ ፍላጎትዎን ይዘው ይምጡ። ቀሪውን እኛ እንወጣለን።",
  "Call us to book": "ለቦታ ማስያዝ ይደውሉ",
  "Made with amore, right here in the neighborhood.": "በፍቅር የተሰራ፣ እዚሁ በአካባቢያችን።",
  "Instagram": "ኢንስታግራም",
  "TikTok": "ቲክቶክ",
  "Telegram": "ቴሌግራም",
  "TikTok @sorella": "ቲክቶክ @sorella",
  "Telegram @sorella": "ቴሌግራም @sorella",
  "© 2025 SORELLA": "© 2025 ሶሬላ",
  "Sorella — Italian, with a little more soul": "ሶሬላ — ጣሊያናዊ ጣዕም ከልብ ጋር",
  "Sorella is a neighborhood Italian restaurant for long lunches, candlelit dinners, and the moments in between.": "ሶሬላ ረጅም ምሳዎች፣ በሻማ ብርሃን የሚታጀቡ እራቶች እና በመካከላቸው ላሉ ውብ ጊዜያት የተዘጋጀ የአካባቢያችን የጣሊያን ምግብ ቤት ነው።"
};

const somaliTranslations = {
  "Open navigation": "Fur hagidda",
  "Close navigation": "Xir hagidda",
  "Main navigation": "Hagidda ugu weyn",
  "Sorella home": "Bogga hore ee Sorella",
  "Restaurant and food photo gallery": "Sawirrada maqaayadda iyo cuntada",
  "Warm candlelit restaurant table set for dinner": "Miiska maqaayadda ee shumacyadu u ifinayaan cashada",
  "Translate to Amharic": "U beddel Amxaari",
  "Switch to English": "U beddel Ingiriisi",
  "Switch to Somali": "U beddel Af-Soomaali",
  "Our story": "Sheekadeenna",
  "The menu": "Liiska cuntada",
  "The space": "Goobta",
  "Find us": "Nala soo xiriir",
  "Find us ↗": "Nala soo xiriir ↗",
  "Book a table": "Miis sii qabso",
  "A little corner of Italy in the city": "Qayb yar oo Talyaani ah oo magaalada ku taal",
  "Come for dinner.": "Casho u kaalay.",
  "Stay for the feeling.": "U joog jawiga wanaagsan.",
  "Handmade pasta, good wine, and a table that always has room for one more.": "Baasto gacanta lagu sameeyey, khamri wanaagsan, iyo miis mar walba qof kale boos u haya.",
  "Find your table": "Miiskaaga hel",
  "Get to know us": "Wax badan naga baro",
  "EST. 2018": "La aasaasay 2018",
  "MADE WITH AMORE": "Jacayl lagu sameeyey",
  "Scroll to our story": "U rog sheekadeenna",
  "SCROLL A LITTLE": "Wax yar hoos u rog",
  "FATTO CON": "Lagu sameeyey",
  "AMORE": "Jacayl",
  "Benvenuti, you're home": "Soo dhowow, gurigaaga ayaad joogtaa",
  "Somewhere between": "Meel u dhexaysa",
  "your place": "gurigaaga",
  "and ours.": "iyo kaayaga.",
  "Sorella started with a simple idea: the best nights are never rushed. So we make the pasta by hand, pour one more glass, and save you a seat at the table. Italian at heart, right at home in the neighborhood.": "Sorella waxay ku bilaabatay fikrad fudud: habeenada ugu wanaagsan laguma degdego. Sidaas darteed baastada gacanta ayaan ku samaynaa, koob kale ayaan kuu shubnaa, miiskana meel ayaan kuugu reebnaa. Qalbi ahaan Talyaani, xaafaddana gurigaaga ayay kula tahay.",
  "Take a look around": "Hareeraha eeg",
  "Friends sharing dinner at a warmly lit restaurant": "Saaxiibo casho ku wadaagaya maqaayad iftiin diirran leh",
  "Good food. Better company.": "Cunto wanaagsan. Wehel ka sii wanaagsan.",
  "Fresh handmade pasta with seasonal ingredients": "Baasto cusub oo gacanta lagu sameeyey, laguna daray waxyaabaha xilliga la helo",
  "Straight from our kitchen": "Si toos ah jikadayada",
  "A little flour.": "Bur yar.",
  "A lot of love.": "Jacayl badan.",
  "Rolled, shaped, and finished by hand. Our menu follows the seasons, takes the scenic route through Italy, and always leaves room for dessert.": "Gacanta ayaa lagu fidiyey, qaabeeyey, laguna dhammeeyey. Liiskayagu wuxuu raacaa xilliyada, wuxuu kuu soo bandhigaa dhadhanka Talyaaniga, mar walbana meel macmacaan ah ayuu u reebaa.",
  "Brown butter ravioli": "Baasto la buuxiyey oo subag bunni ah leh",
  "sage · hazelnut · parmesan": "Caleen sage ah · laws geedeed · farmaajo parmesan ah",
  "Sunday ragù pappardelle": "Baasto ballaadhan oo maraq hilibka Axadda leh",
  "slow-braised beef · pecorino": "Hilib lo'aad oo si tartiib ah loo kariyey · farmaajo pecorino ah",
  "Antipasti": "Cuntooyinka bilowga",
  "TO BEGIN": "BILOWGA",
  "Bruschetta al pomodoro": "Bruschetta yaanyo leh",
  "heirloom tomato · basil · grilled sourdough": "Yaanyo tayo gaar ah leh · caleen basil ah · rooti khamiir dabiici ah lagu dubay",
  "Burrata & peaches": "Burrata iyo fersken",
  "summer peach · arugula · aged balsamic": "Fersken xagaaga · caleen arugula ah · khal balsamic ah oo bislaaday",
  "Pasta fatta a mano": "Baasto gacanta lagu sameeyey",
  "FROM THE PASTA POT": "DHERIGA BAASTADA",
  "Secondi": "Cuntooyinka waaweyn",
  "THE MAIN EVENT": "CUNTADA UGU WEYN",
  "Pollo alla griglia": "Digaag la dubay",
  "herb-roasted chicken · lemon · capers": "Digaag geedo udgoon lagu dubay · liin · miro capers ah",
  "Branzino al limone": "Kalluun branzino oo liin leh",
  "pan-seared sea bass · fennel · lemon": "Kalluun bass ah oo digsiga lagu dubay · geed fennel ah · liin",
  "Dolci": "Macmacaan",
  "A LITTLE SOMETHING SWEET": "MACMACAAN YAR",
  "Tiramisu della casa": "Tiramisu-ga guriga",
  "espresso · mascarpone · cocoa": "Qaxwo espresso ah · farmaajo mascarpone ah · kookaha",
  "Vanilla panna cotta": "Panna cotta vanilje leh",
  "seasonal berries · honey": "Miro yaryar oo xilliyeed · malab",
  "Reserve your table": "Miiskaaga sii qabso",
  "A seat is waiting": "Kursi ayaa kuu diyaar ah",
  "Make yourself": "Iska dhig",
  "at home.": "inaad guriga joogto.",
  "Long lunches, first dates, one more round.": "Qadooyin dhaadheer, ballamaha ugu horreeya, iyo wareeg kale.",
  "There’s a little room for all of it.": "Dhammaantood meel yar baa loogu hayaa.",
  "Beautifully plated Italian dinner in an intimate restaurant": "Casho Talyaani ah oo si qurux badan loo diyaariyey, kuna taal maqaayad raaxo leh",
  "The table is yours": "Miisku adigaa leh",
  "Fresh pasta being prepared with care": "Baasto cusub oo si taxaddar leh loo diyaarinayo",
  "Made fresh, every day": "Maalin kasta cusub ayaa loo sameeyaa",
  "The cozy dining room at Sorella": "Qolka cuntada ee raaxada leh ee Sorella",
  "Your new favorite corner": "Meesha cusub ee aad ugu jeceshahay",
  "Warm, welcoming restaurant interior ready for dinner": "Gudaha maqaayad diirran oo soo dhoweyn leh, cashona diyaar u ah",
  "Room for one more": "Qof kale boos baa u bannaan",
  "A bowl of fresh pasta with tomatoes and herbs": "Madiibad baasto cusub ah oo yaanyo iyo geedo udgoon leh",
  "A little pasta, a lot of love": "Baasto yar, jacayl badan",
  "Fresh seasonal Italian food served at the table": "Cunto Talyaani ah oo cusub, xilliyeed, miiskana laguugu keenayo",
  "Seasonal and made to share": "Xilliyeed oo la wadaagi karo",
  "A colorful plate of fresh food from the kitchen": "Saxan midab leh oo cunto cusub ah kana timid jikada",
  "Five out of five stars": "Shan xiddigood shantii",
  "“The kind of place that makes an ordinary Tuesday feel like a little celebration.”": "“Meel Talaadada caadiga ah ka dhigta xaflad yar.”",
  "THE NEIGHBORHOOD LOVES US": "Xaafaddu way na jeceshahay",
  "Read our reviews on Google": "Faallooyinkayaga Google ka akhri",
  "Right around the corner": "Meel dhow",
  "Come on": "Soo",
  "over.": "booqo.",
  "We’re easy to find and even easier to stay at. Pop in for a plate, a pour, or just to say ciao.": "Way fududahay inaad na hesho, joogitaankuna intaas wuu ka sii fudud yahay. U kaalay cunto, cabitaan, ama inaad nagu salaanto.",
  "18 Little Italy Lane": "18 Little Italy Lane",
  "New York, NY 10013": "New York, NY 10013",
  "Every day, a good day": "Maalin kasta waa maalin wanaagsan",
  "Lunch 12–3 · Dinner 5–10": "Qado 12–3 · Casho 5–10",
  "Get directions": "Hel tilmaamaha jidka",
  "Map showing Sorella in Little Italy, New York": "Khariidad muujinaysa Sorella ee Little Italy, New York",
  "RIGHT HERE IN THE NEIGHBORHOOD": "HALKAN XAAFADDA DHEXDEEDA",
  "Your table is waiting": "Miiskaagu wuu ku sugayaa",
  "Good things happen": "Waxyaabo wanaagsan ayaa dhaca",
  "around the table.": "miiska hareerihiisa.",
  "Bring your appetite. We’ll take care of the rest.": "Rabitaanka cuntada la imow. Inta kale annagaa qabanayna.",
  "Call us to book": "Na soo wac si aad u sii qabsato",
  "Made with amore, right here in the neighborhood.": "Jacayl lagu sameeyey, halkan xaafadda dhexdeeda.",
  "Instagram": "Instagram",
  "TikTok": "TikTok",
  "Telegram": "Telegram",
  "TikTok @sorella": "TikTok @sorella",
  "Telegram @sorella": "Telegram @sorella",
  "© 2025 SORELLA": "© 2025 SORELLA",
  "Sorella — Italian, with a little more soul": "Sorella — Talyaani leh dareen dheeraad ah",
  "Sorella is a neighborhood Italian restaurant for long lunches, candlelit dinners, and the moments in between.": "Sorella waa maqaayad Talyaani ah oo xaafadda ku taal, kuna habboon qadooyin dhaadheer, cashooyin shumac leh, iyo waqtiyada dhexdooda."
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function translatePage(language) {
  const translations = language === "am" ? amharicTranslations : somaliTranslations;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;

  while ((textNode = walker.nextNode())) {
    if (!originalText.has(textNode)) originalText.set(textNode, textNode.nodeValue);
    const original = originalText.get(textNode);
    const trimmed = original.trim();
    const translation = translations[trimmed];
    if (translation === undefined) continue;

    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    textNode.nodeValue = language !== "en"
      ? `${leading}${translation}${trailing}`
      : original;
  }

  document.querySelectorAll("[alt], [aria-label], [title]").forEach((element) => {
    ["alt", "aria-label", "title"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      let originals = originalAttributes.get(element);
      if (!originals) {
        originals = {};
        originalAttributes.set(element, originals);
      }
      if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
      const original = originals[attribute];
      element.setAttribute(attribute, language === "en" ? original : (translations[original] || original));
    });
  });

  document.documentElement.lang = language;
  document.title = language === "en"
    ? "Sorella — Italian, with a little more soul"
    : translations["Sorella — Italian, with a little more soul"];
  document.querySelector('meta[name="description"]').content = language === "en"
    ? "Sorella is a neighborhood Italian restaurant for long lunches, candlelit dinners, and the moments in between."
    : translations["Sorella is a neighborhood Italian restaurant for long lunches, candlelit dinners, and the moments in between."];
}

function closeMobileNav() {
  if (!menuToggle || !primaryNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", currentLanguage === "am"
    ? amharicTranslations["Open navigation"]
    : currentLanguage === "so" ? somaliTranslations["Open navigation"] : "Open navigation");
  primaryNav.classList.remove("is-open");
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      currentLanguage === "am"
        ? amharicTranslations[isExpanded ? "Open navigation" : "Close navigation"]
        : currentLanguage === "so"
          ? somaliTranslations[isExpanded ? "Open navigation" : "Close navigation"]
          : (isExpanded ? "Open navigation" : "Close navigation")
    );
    primaryNav.classList.toggle("is-open", !isExpanded);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = { so: "en", en: "am", am: "so" }[currentLanguage];
    translatePage(currentLanguage);
    const nextLanguage = { so: "en", en: "am", am: "so" }[currentLanguage];
    const nextLanguageLabel = { en: "English", am: "አማርኛ", so: "Af-Soomaali" }[nextLanguage];
    const switchLabel = {
      en: "Switch to English",
      am: "Translate to Amharic",
      so: "Switch to Somali"
    }[nextLanguage];
    const translations = currentLanguage === "am"
      ? amharicTranslations
      : currentLanguage === "so" ? somaliTranslations : {};
    const localizedSwitchLabel = translations[switchLabel] || switchLabel;
    languageToggle.textContent = nextLanguageLabel;
    languageToggle.setAttribute("aria-label", localizedSwitchLabel);
    languageToggle.setAttribute("title", localizedSwitchLabel);
    closeMobileNav();
  });
}

translatePage(currentLanguage);
languageToggle.textContent = "English";

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}