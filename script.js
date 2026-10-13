const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const languageToggle = document.querySelector(".nav-lang");
let isAmharic = false;

const amharicTranslations = {
  "Open navigation": "የዳሰሳ ምናሌን ክፈት",
  "Close navigation": "የዳሰሳ ምናሌን ዝጋ",
  "Main navigation": "ዋና የዳሰሳ ምናሌ",
  "Sorella home": "የሶሬላ መነሻ",
  "Translate to Amharic": "ወደ አማርኛ ተርጉም",
  "Switch to English": "ወደ እንግሊዝኛ ቀይር",
  "Our story": "ስለ እኛ",
  "The menu": "ምናሌ",
  "The space": "የምግብ ቤቱ",
  "Find us": "እኛን ያግኙ",
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
  "TikTok @sorella": "ቲክቶክ @sorella",
  "Telegram @sorella": "ቴሌግራም @sorella",
  "© 2025 SORELLA": "© 2025 ሶሬላ",
  "Sorella — Italian, with a little more soul": "ሶሬላ — ጣሊያናዊ ጣዕም ከልብ ጋር",
  "Sorella is a neighborhood Italian restaurant for long lunches, candlelit dinners, and the moments in between.": "ሶሬላ ረጅም ምሳዎች፣ በሻማ ብርሃን የሚታጀቡ እራቶች እና በመካከላቸው ላሉ ውብ ጊዜያት የተዘጋጀ የአካባቢያችን የጣሊያን ምግብ ቤት ነው።"
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function translatePage(toAmharic) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;

  while ((textNode = walker.nextNode())) {
    if (!originalText.has(textNode)) originalText.set(textNode, textNode.nodeValue);
    const original = originalText.get(textNode);
    const trimmed = original.trim();
    const translation = amharicTranslations[trimmed];
    if (translation === undefined) continue;

    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    textNode.nodeValue = toAmharic
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
      element.setAttribute(attribute, toAmharic ? (amharicTranslations[original] || original) : original);
    });
  });

  document.documentElement.lang = toAmharic ? "am" : "en";
  document.title = toAmharic
    ? amharicTranslations["Sorella — Italian, with a little more soul"]
    : "Sorella — Italian, with a little more soul";
  document.querySelector('meta[name="description"]').content = toAmharic
    ? amharicTranslations["Sorella is a neighborhood Italian restaurant for long lunches, candlelit dinners, and the moments in between."]
    : "Sorella is a neighborhood Italian restaurant for long lunches, candlelit dinners, and the moments in between.";
}

function closeMobileNav() {
  if (!menuToggle || !primaryNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", isAmharic ? "የዳሰሳ ምናሌን ክፈት" : "Open navigation");
  primaryNav.classList.remove("is-open");
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      isAmharic
        ? (isExpanded ? "የዳሰሳ ምናሌን ክፈት" : "የዳሰሳ ምናሌን ዝጋ")
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
    isAmharic = !isAmharic;
    translatePage(isAmharic);
    languageToggle.textContent = isAmharic ? "English" : "አማርኛ";
    languageToggle.setAttribute("aria-label", isAmharic ? "Switch to English" : "Translate to Amharic");
    languageToggle.setAttribute("title", isAmharic ? "Switch to English" : "Translate to Amharic");
    closeMobileNav();
  });
}

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