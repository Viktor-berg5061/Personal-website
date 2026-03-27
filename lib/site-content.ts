export type ProjectVisibility = 'public' | 'private' | 'future';

export type Project = {
  slug: string;
  title: string;
  displayTitle: string;
  category: string;
  status: string;
  visibility: ProjectVisibility;
  year: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  outcomes: string[];
  learned: string[];
  previewHeadline: string;
  previewBlurb: string;
  previewStats: Array<{ label: string; value: string }>;
  repo?: string;
  liveUrl?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: 'webbtjanst-com',
    title: 'webbtjanst.com',
    displayTitle: 'Webbtjänst',
    category: 'Webb / erbjudande',
    status: 'Live',
    visibility: 'public',
    year: '2026',
    summary:
      'En konverteringsfokuserad tjänstesida för att sälja hemsidor snabbt med tydlig struktur, trygg leverans och professionell känsla.',
    description:
      'Det här är min offentliga säljsida för hemsidor. Poängen är att få in förfrågningar snabbt, visa att leveransen är proffsig och att ta bort onödigt friktion i köpresan.',
    role: 'Erbjudande, copy, struktur och visuell riktning',
    stack: ['Next.js', 'Tailwind CSS', 'Motion', 'Copywriting'],
    outcomes: [
      'Tydlig sida för att sälja hemsidor med fokus på resultat och enkel kommunikation.',
      'Gjorde det lättare att förklara vad kunden får, hur snabbt det går och varför det är värt det.',
      'Byggd för att kunna utökas med case, priser och kontaktflöde senare.',
    ],
    learned: [
      'Hur man skriver säljinriktad copy utan att tappa känslan av premium.',
      'Hur man strukturerar en landningssida så den känns snabb och tydlig.',
      'Hur man blandar teknik med affärsmål i samma upplevelse.',
    ],
    previewHeadline: 'Vi bygger din hemsida innan du hinner blinka.',
    previewBlurb:
      'Professionell, konverterande och estetisk sida för kunder som vill ha något snabbt men fortfarande välbyggt.',
    previewStats: [
      { label: 'Leverans', value: '48h' },
      { label: 'Fokus', value: 'Konvertering' },
      { label: 'Format', value: 'Landing page' },
    ],
    liveUrl: 'https://www.webbtjanst.com',
  },
  {
    slug: 'personal-website',
    title: 'Personal Website',
    displayTitle: 'Personal Website',
    category: 'Portfolio / identitet',
    status: 'Live',
    visibility: 'public',
    year: '2026',
    summary:
      'Min personliga presentationssida för att visa vad jag gör nu, vad jag har byggt och vad jag planerar framåt.',
    description:
      'Den här sidan är navet för mitt offentliga arbete. Den samlar mina projekt, min riktning och mina framtidsplaner i en form som känns mer som en riktig produkt än en vanlig portfolio.',
    role: 'Design, struktur, animationer och informationsarkitektur',
    stack: ['Next.js', 'TypeScript', 'Motion', 'Tailwind CSS'],
    outcomes: [
      'Skapade en tydligare och mer professionell presentation av allt jag gör.',
      'La grunden för klickbara projektsidor och mer strukturerat innehåll.',
      'Byggd för att kunna växa med nya projekt utan att kännas spretig.',
    ],
    learned: [
      'Hur man bygger en portfolio som också fungerar som produktpresentation.',
      'Hur man håller en mörk UI-stil ren utan att den blir tung eller platt.',
      'Hur man kopplar ihop startsida, projektlista och detaljsidor.',
    ],
    previewHeadline: 'Viktor Berg',
    previewBlurb:
      'Stor typografi, tydlig riktning och projektkort som leder vidare till detaljerad information.',
    previewStats: [
      { label: 'Status', value: 'Live' },
      { label: 'Fokus', value: 'Portfolio' },
      { label: 'Sidor', value: 'Flera sektioner' },
    ],
    liveUrl: 'https://viktor-berg5061.github.io/Personal-website/',
    repo: 'https://github.com/Viktor-berg5061/Personal-website',
  },
  {
    slug: 'perplexity-serch-v2',
    title: 'Perplexity Search MCP',
    displayTitle: 'Perplexity Search v2',
    category: 'MCP / search',
    status: 'Live',
    visibility: 'public',
    year: '2025',
    summary:
      'En förbättrad MCP-server för webbsök som bygger på Perplexity API och skapades efter att första versionen inte höll tillräckligt bra.',
    description:
      'Det här är min andra version av en MCP-server för webbsök. Den tog över efter en äldre variant som inte fungerade tillräckligt stabilt, så fokus var att få en bättre och tydligare implementation.',
    role: 'Byggde om servern, förbättrade flödet och gjorde den mer användbar i praktiken',
    stack: ['Node.js', 'MCP', 'Perplexity API', 'Environment config'],
    outcomes: [
      'Blev en fungerande och mer pålitlig version av min första MCP-server.',
      'Gav mig bättre förståelse för hur man bygger verktyg som andra AI-assistenter kan använda.',
      'La grunden för fler interna verktyg och sökflöden senare.',
    ],
    learned: [
      'Hur man bygger en MCP-server som är lätt att integrera.',
      'Hur man förbättrar ett verktyg genom att ersätta en svag första version.',
      'Hur man håller en teknisk repo-lösning tillräckligt enkel för att kunna användas igen.',
    ],
    previewHeadline: 'Perplexity Search MCP Server',
    previewBlurb:
      'En praktisk sökserver med tydlig integration, version 2 av min första MCP-lösning.',
    previewStats: [
      { label: 'Typ', value: 'MCP' },
      { label: 'Version', value: 'v2' },
      { label: 'Syfte', value: 'Webbsök' },
    ],
    repo: 'https://github.com/Viktor-berg5061/perplexity-serch-v2',
  },
  {
    slug: 'sistem-ai-24-7',
    title: 'Sistem AI 24/7',
    displayTitle: 'Sistem AI 24/7',
    category: 'YouTube / AI automation',
    status: 'Private',
    visibility: 'private',
    year: '2025-2026',
    summary:
      'En automatiserad YouTube-pipeline med AI-modeller, scenproduktion, optimeringar och säkerhetsuppdelad systemkod.',
    description:
      'Det här projektet hör ihop med min YouTube-automatisering med AI men är uppdelat av säkerhetsskäl. Offentligt kan jag beskriva det på hög nivå som en komplett produktionspipeline för att planera, generera, bearbeta och publicera innehåll snabbare.',
    role: 'Arkitektur, automation, prestandaoptimering och pipeline-flöden',
    stack: ['Python', 'WAN', 'Gemini', 'VibeVoice', 'ComfyUI'],
    outcomes: [
      'Kortade ner stora delar av produktionskedjan för bild och video.',
      'Fick pipeline-flöden att gå från långsamma experiment till praktisk produktion.',
      'Byggde ett system som kunde köras mer konsekvent och med mindre manuellt arbete.',
    ],
    learned: [
      'Hur man optimerar AI-pipelines på riktigt, inte bara i teori.',
      'Hur man delar upp system av säkerhetsskäl utan att tappa helheten.',
      'Hur man får modellkörningar att bli användbara i ett content-flöde.',
    ],
    previewHeadline: 'YouTube automation with AI',
    previewBlurb:
      'En privat men tung pipeline för innehållsproduktion, optimering och publiceringsflöden.',
    previewStats: [
      { label: 'Läge', value: 'Private' },
      { label: 'Fokus', value: 'Automation' },
      { label: 'Domän', value: 'YouTube' },
    ],
    note: 'Delad kodbas av säkerhetsskäl, så bara hög nivå visas offentligt.',
  },
  {
    slug: 'confy-ui-parts',
    title: 'ComfyUI Parts',
    displayTitle: 'ComfyUI Parts',
    category: 'AI / media pipeline',
    status: 'Private',
    visibility: 'private',
    year: '2025',
    summary:
      'Delar och optimeringar för ComfyUI-flöden som hjälpte bild- och videoproduktion bli mycket snabbare.',
    description:
      'Det här är ett av de viktigaste interna optimeringsprojekten. Jag jobbade på modellen, pipelines och prestanda så att output gick mycket snabbare än innan.',
    role: 'Prestandaoptimering, modellflöden och systemförbättringar',
    stack: ['ComfyUI', 'Python', 'Upscaling', 'Local models'],
    outcomes: [
      'Gjorde bild- och videoproduktion betydligt snabbare.',
      'Sänkte tiden från generering till färdig klippkedja.',
      'Stabiliserade delar av processen som annars var för långsam för praktisk användning.',
    ],
    learned: [
      'Hur mycket optimering faktiskt betyder i AI-baserade mediaflöden.',
      'Hur man kombinerar flera modeller i en enda pipeline utan att tappa fart.',
      'Hur man bygger komponenter som går att återanvända i andra projekt.',
    ],
    previewHeadline: 'Pipeline optimization parts',
    previewBlurb:
      'Internt verktyg för att göra generering, uppskalning och mediaproduktion snabbare.',
    previewStats: [
      { label: 'Läge', value: 'Private' },
      { label: 'Typ', value: 'Optimization' },
      { label: 'Resultat', value: 'Faster pipeline' },
    ],
  },
  {
    slug: 'study-ai',
    title: 'Study Ai',
    displayTitle: 'Study Ai',
    category: 'EdTech',
    status: 'Private',
    visibility: 'private',
    year: '2025',
    summary:
      'En studieplattform med AI-chatt, flashcards, textanalys och verktyg för att göra plugg mer effektivt.',
    description:
      'Det här var en mer komplett studieplattform med flera verktyg och en tydlig produktidé. Den användes för att testa hur man kan kombinera AI med lärande i en enda upplevelse.',
    role: 'Produktdesign, funktioner och teknisk implementation',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'NextAuth'],
    outcomes: [
      'Visade att AI kan användas som studiehjälp utan att hela appen blir rörig.',
      'Byggde flera funktioner i samma produktflöde.',
      'Gav en tydlig grund för nästa version av studieplattformar.',
    ],
    learned: [
      'Hur man designar en verktygsplattform med många funktioner.',
      'Hur man håller fokus på nytta i stället för att lägga till funktioner för sakens skull.',
      'Hur autentisering och databashantering passar in i en AI-produkt.',
    ],
    previewHeadline: 'Modern study platform',
    previewBlurb:
      'En bred studieprodukt med AI-funktioner, struktur och produktkänsla.',
    previewStats: [
      { label: 'Läge', value: 'Private' },
      { label: 'Typ', value: 'Study app' },
      { label: 'Verktyg', value: 'Many' },
    ],
  },
  {
    slug: 'study-ai-1',
    title: 'Study Ai 1',
    displayTitle: 'Study Ai 1',
    category: 'EdTech prototype',
    status: 'Private',
    visibility: 'private',
    year: '2024',
    summary:
      'Den första versionen av min studieidé, byggd för att lära mig snabbare och förbereda mig inför prov.',
    description:
      'Det här var en tidig prototyp för att testa hur jag kunde använda AI och struktur för att själv lära mig saker snabbare och bättre.',
    role: 'Experiment, lärplattform och första strukturförsök',
    stack: ['Next.js', 'AI features', 'Study tools'],
    outcomes: [
      'Blev min första riktiga studieplattform-idé.',
      'Lärde mig hur man bygger funktioner runt ett tydligt syfte.',
      'La grunden för Study Ai senare.',
    ],
    learned: [
      'Hur man går från idé till funktionell prototyp snabbt.',
      'Hur man prioriterar vad som faktiskt hjälper användaren.',
      'Hur man bygger något som är bra nog att utvecklas vidare.',
    ],
    previewHeadline: 'First study prototype',
    previewBlurb:
      'En tidig version skapad för att hjälpa dig plugga och utveckla idéer snabbare.',
    previewStats: [
      { label: 'Läge', value: 'Private' },
      { label: 'Typ', value: 'Prototype' },
      { label: 'Fokus', value: 'Learning' },
    ],
  },
  {
    slug: 'polymarket-trading-bot',
    title: 'Polymarket Trading Bot',
    displayTitle: 'Polymarket Trading Bot',
    category: 'Trading / research',
    status: 'Private',
    visibility: 'private',
    year: '2025-2026',
    summary:
      'Ett av mina mest komplexa pågående projekt, fokuserat på arbitrage, backtesting, data och realtidsstrategier.',
    description:
      'Det här är det mest avancerade arbetet jag har nu. Jag jobbar på att förstå marknadsineffektivitet, jämföra strategier och bygga ett system som kan testa och utvärdera sannolikheter på ett strukturerat sätt.',
    role: 'Strategi, dataanalys, backtesting och automatisering',
    stack: ['Python', 'Data pipelines', 'Backtesting', 'Automation'],
    outcomes: [
      'Byggde baktestning över flera års data för att hitta mönster.',
      'Jobbade fram metoder för att resonera om vinst, risk och budget.',
      'Fokuserade på att hitta edge i ett område där andra redan är snabba.',
    ],
    learned: [
      'Hur svårt det är att hitta verklig edge i tävlingsinriktade marknader.',
      'Hur viktigt det är att validera idéer med data i stället för känsla.',
      'Hur man tänker kring risk, sannolikhet och budget samtidigt.',
    ],
    previewHeadline: 'Momentum breakout alpha',
    previewBlurb:
      'Högintensiv researchmiljö med fokus på edge, risk och backtesting.',
    previewStats: [
      { label: 'Läge', value: 'Private' },
      { label: 'Fokus', value: 'Trading' },
      { label: 'Status', value: 'Active' },
    ],
  },
  {
    slug: 'saas-genius',
    title: 'SaaS Genius',
    displayTitle: 'SaaS Genius',
    category: 'SaaS / concept',
    status: 'Private',
    visibility: 'private',
    year: '2025',
    summary:
      'Ett privat SaaS-spår utan publik yta ännu, men med potential att bli en produktidé senare.',
    description:
      'Det här finns mest som intern utforskning just nu. Jag kan visa det som ett framtida eller privat spår utan att gå in på detaljer.',
    role: 'Experiment och konceptarbete',
    stack: ['SaaS', 'Product thinking', 'Internal'],
    outcomes: [
      'Har fungerat som ett kreativt testspår för produktidéer.',
      'Kan återanvändas när du vill visa fler kommersiella projekt.',
      'Passar bra som dold eller intern rad i portföljen.',
    ],
    learned: [
      'Hur man skiljer mellan idé, koncept och färdig produkt.',
      'Hur man håller privata projekt sammanfattade utan att avslöja för mycket.',
      'Hur man bygger en portfölj som klarar både öppna och låsta delar.',
    ],
    previewHeadline: 'Private SaaS concept',
    previewBlurb:
      'En intern produktidé som kan utvecklas senare, men inte visas i full detalj nu.',
    previewStats: [
      { label: 'Läge', value: 'Private' },
      { label: 'Typ', value: 'Concept' },
      { label: 'Status', value: 'Hidden' },
    ],
  },
  {
    slug: 'ai-vechon-bygare',
    title: 'Ai Vechon Bygare',
    displayTitle: 'AI Vechon Bygare',
    category: 'AI agents',
    status: 'Private',
    visibility: 'private',
    year: '2025',
    summary:
      'Ett internt spår för att bygga AI-agenter och autonoma flöden som kan göra mer självständigt arbete.',
    description:
      'Det här projektet passar in i din större vision om helt självstyrda företag och flera AI-agenter. Offentligt kan det visas som ett framtida eller internt experiment.',
    role: 'Agentlogik, struktur och experiment',
    stack: ['AI agents', 'Automation', 'Workflow design'],
    outcomes: [
      'Fungerar som testfält för framtida agentdrivna produkter.',
      'Hjälper till att forma hur du tänker kring autonoma flöden.',
      'Passar bra som framtida del i portföljen.',
    ],
    learned: [
      'Hur man planerar agentbaserade system utan att de blir otydliga.',
      'Hur man håller stora visioner kopplade till faktisk implementation.',
      'Hur man beskriver AI-arbete på ett sätt som känns trovärdigt.',
    ],
    previewHeadline: 'Agent-built company systems',
    previewBlurb:
      'Ett framtidsorienterat spår för autonoma AI-agenter och självstyrda flöden.',
    previewStats: [
      { label: 'Läge', value: 'Private' },
      { label: 'Typ', value: 'Agents' },
      { label: 'Status', value: 'Research' },
    ],
  },
];

export const publicProjects = projects.filter((project) => project.visibility === 'public');

export const privateProjects = projects.filter((project) => project.visibility === 'private');

export const futureProjects = [
  {
    title: 'PEGASUS',
    category: 'Future vision',
    summary:
      'Palantir för hedgefonder och investeringsbolag, beskrivet som en framtida riktning snarare än något färdigt.',
  },
];

export const focusAreas = [
  {
    title: 'Byggda system',
    body:
      'Jag bygger inte bara demos. Jag gör verktyg, automation och produkter som kan användas, förbättras och växa.',
  },
  {
    title: 'AI och optimering',
    body:
      'Mycket av mitt arbete handlar om att få AI-flöden att bli snabbare, mer användbara och mindre manuella.',
  },
  {
    title: 'Tydlig presentation',
    body:
      'Jag vill att varje projekt ska vara lätt att förstå, lätt att klicka in i och tydligt visa vad jag faktiskt gjorde.',
  },
];

export const currentWork = [
  {
    title: 'Polymarket trading bot',
    detail:
      'Det mest avancerade pågående arbetet. Fokus på data, backtesting, arbitrage och att hitta verklig edge.',
  },
  {
    title: 'Sistem AI 24/7',
    detail:
      'YouTube-automatisering med AI, uppdelad av säkerhetsskäl men fortfarande en del av samma större system.',
  },
  {
    title: 'Webbtjänst-sidan',
    detail:
      'Den offentliga säljsidan för hemsidor, byggd för att vara snabb att förstå och enkel att köpa från.',
  },
];

export const timeline = [
  {
    year: 'Now',
    title: 'Building a public body of work',
    detail:
      'Sharpening the portfolio so it clearly shows what is public, what is private, and what is coming next.',
  },
  {
    year: '2025',
    title: 'Shipped more complete products',
    detail:
      'Moved from isolated experiments to fuller systems in AI, search, automation, and public web presentation.',
  },
  {
    year: '2024',
    title: 'Deepened technical foundation',
    detail:
      'Focused on rapid iteration, frontend structure, and understanding how to turn ideas into working tools.',
  },
];

export const metrics = [
  { value: '3', label: 'Public projects' },
  { value: '8+', label: 'Private systems' },
  { value: '1', label: 'Clear direction' },
];

export const contactLinks = [
  { label: 'Phone', value: '+46 704 949 087', href: 'tel:+46704949087' },
  {
    label: 'YouTube',
    value: '@TheHiddenLedger-v1e',
    href: 'https://www.youtube.com/@TheHiddenLedger-v1e',
  },
  {
    label: 'GitHub',
    value: 'Viktor-berg5061',
    href: 'https://github.com/Viktor-berg5061',
  },
];
