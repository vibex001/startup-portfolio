import { useEffect, useState } from 'react';

const CONTACT_EMAIL = 'olaiya.ayomide2005@gmail.com';
const solutions = [
  { title: 'Rider & COD Reconciliation', category: 'Logistics Operations', icon: 'fa-truck-fast', description: 'Track riders, assigned orders, delivery fees, COD settlements, and daily reconciliation from one control hub.' },
  { title: 'Curriculum & Exam Generator', category: 'School Productivity', icon: 'fa-book-open', description: 'Generate curriculum-aligned lesson plans, weekly schedules, exam papers, and marking schemes.' },
  { title: 'Micro-Inventory & Stock Alerts', category: 'Retail Automation', icon: 'fa-boxes-stacked', description: 'Monitor product levels, expiry dates, low-stock alerts, and replenishment activity across your business.' },
  { title: 'Student Fee Recovery Portal', category: 'School Finance', icon: 'fa-money-bill-transfer', description: 'Manage student balances, payment progress, overdue accounts, digital receipts, and automated reminders.' },
  { title: 'Instant Report Card Compiler', category: 'Academic Reporting', icon: 'fa-chart-column', description: 'Compile student scores, subject assessments, grades, remarks, and printable report cards in one workflow.' },
  { title: 'WhatsApp Orders & Invoicing', category: 'Sales Automation', icon: 'fa-file-invoice-dollar', description: 'Turn WhatsApp conversations into structured orders, invoices, payment links, and trackable fulfillment stages.' }
];

function App() {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceFilter, setServiceFilter] = useState('all');
  const [roleSpecsOpen, setRoleSpecsOpen] = useState(false);
  const brand = 'CRANK ENERGY';
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationSuccess, setConsultationSuccess] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll('.solution-card');
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const navigateTo = (page) => { setActivePage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);
  const filterServices = (category) => setServiceFilter(category);
  const toggleRoleSpecs = () => setRoleSpecsOpen((open) => !open);
  const closeConsultationModal = () => { setConsultationOpen(false); setConsultationSuccess(false); };
  const openConsultationModal = (service) => {
    setConsultationSuccess(false);
    setConsultationOpen(true);
    if (service) { const select = document.getElementById('lead-service'); if (select) select.value = service; }
  };
  const handleConsultationSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const value = (id) => form.querySelector('#' + id).value.trim();
    const service = form.querySelector('#lead-service').value;
    const orgType = form.querySelector('#lead-org-type').value;
    const subject = `Consultation request: ${service}`;
    const body = [
      `Name: ${value('lead-name')}`,
      `Email: ${value('lead-email')}`,
      `Organization type: ${orgType}`,
      `Service: ${service}`,
      '',
      'Project brief:',
      value('lead-notes')
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setConsultationSuccess(true);
  };
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-cyan-400 selection:text-charcoal-950">

  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 cyber-grid cyber-grid-fade"></div>
    <div className="ambient-glow absolute -top-32 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    <div className="ambient-glow absolute top-1/2 -right-24 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"></div>
  </div>

  
  
  
  <header className="sticky top-0 z-40 bg-charcoal-950/85 backdrop-blur-xl border-b border-cyan-500/15">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 text-left group">
            <button onClick={(event) => { navigateTo('home') }} aria-label="Go to homepage" className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-charcoal-950 font-extrabold text-xl shadow-cyan-sm group-hover:shadow-cyan-md transition-all">
              <i className="fa-solid fa-layer-group"></i>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <button onClick={(event) => { navigateTo('home') }} id="brand-name-display" className="text-white font-extrabold text-lg sm:text-xl tracking-tight text-left focus:outline-none">{brand}</button>
              </div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 -mt-1">Technology Solutions</span>
            </div>
          </div>
        </div>

        
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <button onClick={(event) => { navigateTo('home') }} data-nav="home" className={activePage === 'home' ? 'nav-link px-4 py-2 rounded-lg text-sm font-medium text-cyan-400 bg-cyan-500/10 transition-all' : 'nav-link px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-charcoal-800/70 transition-all'}>
            Home
          </button>
          <button onClick={(event) => { navigateTo('services') }} data-nav="services" className={activePage === 'services' ? 'nav-link px-4 py-2 rounded-lg text-sm font-medium text-cyan-400 bg-cyan-500/10 transition-all' : 'nav-link px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-charcoal-800/70 transition-all'}>
            Services &amp; Staffing
          </button>
          <button onClick={(event) => { navigateTo('portfolio') }} data-nav="portfolio" className={activePage === 'portfolio' ? 'nav-link px-4 py-2 rounded-lg text-sm font-medium text-cyan-400 bg-cyan-500/10 transition-all' : 'nav-link px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-charcoal-800/70 transition-all'}>
            Solutions Portfolio
          </button>
        </nav>

        
        <div className="hidden md:flex items-center gap-3">
          <button onClick={(event) => { openConsultationModal() }} className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-charcoal-950 font-bold text-sm shadow-cyan-sm hover:shadow-cyan-md transition-all flex items-center gap-2">
            <span>Request Consultation</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        
        <div className="flex items-center gap-2 md:hidden">
          <button id="mobile-menu-btn" onClick={(event) => { toggleMobileMenu() }} className="p-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-slate-200 hover:text-cyan-400">
            <i className="fa-solid fa-bars text-lg"></i>
          </button>
        </div>
      </div>
    </div>

    
    <div id="mobile-menu" className={(mobileMenuOpen ? '' : 'hidden') + ' md:hidden bg-charcoal-900 border-b border-cyan-500/20 px-4 pt-2 pb-5 space-y-2'}>
      <button onClick={(event) => { navigateTo('home'); toggleMobileMenu() }} data-nav-mobile="home" className={activePage === 'home' ? 'block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-cyan-400 bg-cyan-500/10' : 'block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-charcoal-800'}>Home</button>
      <button onClick={(event) => { navigateTo('services'); toggleMobileMenu() }} data-nav-mobile="services" className={activePage === 'services' ? 'block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-cyan-400 bg-cyan-500/10' : 'block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-charcoal-800'}>Services &amp; Staffing</button>
      <button onClick={(event) => { navigateTo('portfolio'); toggleMobileMenu() }} data-nav-mobile="portfolio" className={activePage === 'portfolio' ? 'block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-cyan-400 bg-cyan-500/10' : 'block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-charcoal-800'}>Solutions Portfolio</button>
      <div className="pt-2">
        <button onClick={(event) => { openConsultationModal(); toggleMobileMenu() }} className="w-full py-3 rounded-xl bg-cyan-400 text-charcoal-950 font-bold text-sm shadow-cyan-sm">
          Request Consultation
        </button>
      </div>
    </div>
  </header>

  
  
  
  <main className="relative z-10 flex-grow">

    
    
    
    <section id="view-home" className={'page-view ' + (activePage === 'home' ? 'active' : '')}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-24 lg:pb-28">
        <div className="text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-charcoal-850/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-8 shadow-cyan-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>ELITE TECH STAFFING &amp; DIGITAL INFRASTRUCTURE</span>
          </div>

          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300">Tech Staffing</span> &amp; <br className="hidden sm:inline" />
            Business Solutions for <span className="underline decoration-cyan-400/60 decoration-2 underline-offset-8">Schools</span> &amp; <span className="underline decoration-cyan-400/60 decoration-2 underline-offset-8">Enterprises</span>.
          </h1>

          
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            We help schools and growing businesses improve day-to-day operations with software, workflow automation, and technology staffing. Our solution work includes student systems, fee tracking, retail inventory, delivery coordination, and sales workflows.
          </p>

          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={(event) => { openConsultationModal() }} className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-charcoal-950 font-extrabold text-base shadow-cyan-md hover:shadow-cyan-lg transition-all flex items-center justify-center gap-3">
              <i className="fa-solid fa-headset"></i>
              <span>Request Consultation</span>
            </button>
            <button onClick={(event) => { navigateTo('services') }} className="w-full sm:w-auto px-8 py-4 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 text-white border border-cyan-500/30 hover:border-cyan-400 font-semibold text-base transition-all flex items-center justify-center gap-2">
              <span>Explore Staffing &amp; Services</span>
              <i className="fa-solid fa-chevron-right text-xs text-cyan-400"></i>
            </button>
          </div>
        </div>

        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div onClick={(event) => { navigateTo('services') }} className="tech-card rounded-2xl p-6 cursor-pointer group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-sitemap"></i>
              </div>
              <span className="text-xs font-mono text-cyan-400/80">01 // STAFFING</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Tech Staffing &amp; Architects</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Place senior Solutions Architects, full-stack engineers, and IT leads tailored to your project timeline.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400">
              Inspect Roles <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </span>
          </div>

          
          <div onClick={(event) => { navigateTo('services') }} className="tech-card rounded-2xl p-6 cursor-pointer group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <span className="text-xs font-mono text-cyan-400/80">02 // EDTECH</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">School Digital Systems</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Modern student portals, automated grading workflows, fee tracking, and campus network architecture.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400">
              View School Suite <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </span>
          </div>

          
          <div onClick={(event) => { navigateTo('services') }} className="tech-card rounded-2xl p-6 cursor-pointer group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-gears"></i>
              </div>
              <span className="text-xs font-mono text-cyan-400/80">03 // AUTOMATION</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Workflow Automation</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Eliminate manual bottlenecks for small businesses with custom APIs, Node.js backends, and CRM pipelines.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400">
              Automate Now <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </span>
          </div>

          
          <div onClick={(event) => { navigateTo('portfolio') }} className="tech-card rounded-2xl p-6 cursor-pointer group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <span className="text-xs font-mono text-cyan-400/80">04 // SOLUTIONS</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Solutions Portfolio</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Explore the software systems we design for schools, retailers, logistics teams, and growing businesses.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400">
              Explore Solutions <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </span>
          </div>
        </div>

        
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">DIGITAL SOLUTIONS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Systems We Build</h2>
            </div>
            <button onClick={(event) => { navigateTo('services') }} className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors">
              Explore service capabilities <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <article key={solution.title} className="solution-card tech-card rounded-2xl overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 border-b border-charcoal-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 cyber-grid opacity-50"></div>
                  <i className={`fa-solid ${solution.icon} relative text-5xl text-cyan-400/80 transition-transform duration-500 group-hover:scale-110`} aria-hidden="true"></i>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">{solution.category}</span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">{solution.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed min-h-[60px]">{solution.description}</p>
                  <button
                    onClick={(event) => { openConsultationModal() }}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Request this solution <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        
        <div className="mt-20">
          <div className="tech-card rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">How We Execute</h2>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">SERVICE-FIRST METHODOLOGY</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-charcoal-900/80 border border-charcoal-700">
                <div className="text-cyan-400 font-mono text-sm font-bold mb-1">01. DISCOVER</div>
                <h4 className="text-white font-semibold mb-1.5">System &amp; Talent Audit</h4>
                <p className="text-xs text-slate-400 leading-relaxed">We evaluate your school or business operations to pinpoint exact engineering or staffing gaps.</p>
              </div>
              <div className="p-4 rounded-xl bg-charcoal-900/80 border border-charcoal-700">
                <div className="text-cyan-400 font-mono text-sm font-bold mb-1">02. ARCHITECT</div>
                <h4 className="text-white font-semibold mb-1.5">Match &amp; Blueprint</h4>
                <p className="text-xs text-slate-400 leading-relaxed">We outline a practical approach and identify specialists suited to the project.</p>
              </div>
              <div className="p-4 rounded-xl bg-charcoal-900/80 border border-charcoal-700">
                <div className="text-cyan-400 font-mono text-sm font-bold mb-1">03. SCALE</div>
                <h4 className="text-white font-semibold mb-1.5">Deploy &amp; Support</h4>
                <p className="text-xs text-slate-400 leading-relaxed">We develop, test, and refine the solution with your team.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    
    
    <section id="view-services" className={'page-view ' + (activePage === 'services' ? 'active' : '')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">CAPABILITIES &amp; TALENT DEPLOYMENT</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Services &amp; Staffing Hub</h1>
            <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base">
              Select a specialized practice area or click any technical role to inspect required competencies and request immediate placement.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button onClick={(event) => { filterServices('all') }} data-srv-filter="all" className={serviceFilter === 'all' ? 'srv-filter-btn px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-400 text-charcoal-950' : 'srv-filter-btn px-4 py-2 rounded-xl text-xs font-mono bg-charcoal-850 text-slate-300 border border-charcoal-700 hover:border-cyan-400'}>ALL SOLUTIONS</button>
            <button onClick={(event) => { filterServices('staffing') }} data-srv-filter="staffing" className={serviceFilter === 'staffing' ? 'srv-filter-btn px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-400 text-charcoal-950' : 'srv-filter-btn px-4 py-2 rounded-xl text-xs font-mono bg-charcoal-850 text-slate-300 border border-charcoal-700 hover:border-cyan-400'}>TECH STAFFING</button>
            <button onClick={(event) => { filterServices('schools') }} data-srv-filter="schools" className={serviceFilter === 'schools' ? 'srv-filter-btn px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-400 text-charcoal-950' : 'srv-filter-btn px-4 py-2 rounded-xl text-xs font-mono bg-charcoal-850 text-slate-300 border border-charcoal-700 hover:border-cyan-400'}>SCHOOLS &amp; EDTECH</button>
            <button onClick={(event) => { filterServices('business') }} data-srv-filter="business" className={serviceFilter === 'business' ? 'srv-filter-btn px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-400 text-charcoal-950' : 'srv-filter-btn px-4 py-2 rounded-xl text-xs font-mono bg-charcoal-850 text-slate-300 border border-charcoal-700 hover:border-cyan-400'}>SME STRATEGY</button>
          </div>
        </div>

        
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          
          <div data-category="staffing" className={"service-item tech-card rounded-2xl p-7 flex flex-col justify-between " + (serviceFilter !== 'all' && serviceFilter !== 'staffing' ? 'hidden' : '')}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">TECH STAFFING</span>
                <i className="fa-solid fa-chess-knight text-2xl text-cyan-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Solutions Architect &amp; Engineering Placement</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                We connect businesses with experienced technical leaders who plan software architecture and guide development teams through implementation.
              </p>
              
              
              <div className="p-4 rounded-xl bg-charcoal-950/90 border border-cyan-500/25 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400"><i className="fa-solid fa-star mr-1.5"></i>FEATURED ROLE: SOLUTIONS ARCHITECT</span>
                  <button onClick={(event) => { toggleRoleSpecs('arch-specs') }} className="text-xs text-cyan-300 underline hover:text-white">View Competencies</button>
                </div>
                <p className="text-xs text-slate-400">Designs cloud/hybrid infrastructure, API ecosystems, security compliance, and database schemas (SQLite/PostgreSQL).</p>
                <div id="arch-specs" className={(roleSpecsOpen ? '' : 'hidden') + ' mt-3 pt-3 border-t border-charcoal-800 space-y-2 text-xs text-slate-300'}>
                  <div><strong className="text-cyan-400">Core Stack:</strong> Node.js, Cloud Architecture, System Design, Security &amp; API Gateways.</div>
                  <div><strong className="text-cyan-400">Key Deliverable:</strong> End-to-end technical blueprints that prevent costly engineering rework.</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-charcoal-700/70">
              <span className="text-xs font-mono text-slate-400">Contract &bull; Dedicated &bull; Fractional CTO</span>
              <button onClick={(event) => { openConsultationModal('Tech Staffing - Solutions Architect') }} className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-charcoal-950 font-bold text-xs transition-all">
                Hire Talent <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>

          
          <div data-category="staffing" className={"service-item tech-card rounded-2xl p-7 flex flex-col justify-between " + (serviceFilter !== 'all' && serviceFilter !== 'staffing' ? 'hidden' : '')}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">ENGINEERING PODS</span>
                <i className="fa-solid fa-code text-2xl text-cyan-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Web &amp; Backend Development</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Rapidly augment your internal team or commission turnkey web applications built with modern Node.js, SQLite/SQL databases, and high-performance frontends.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> Custom Admin Dashboards &amp; Client Portals</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> RESTful API Development &amp; Third-Party Integrations</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> Legacy System Modernization &amp; Performance Audits</li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-charcoal-700/70">
              <span className="text-xs font-mono text-slate-400">Agile Sprints &bull; Full Lifecycle</span>
              <button onClick={(event) => { openConsultationModal('Full-Stack Software Engineering') }} className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-charcoal-950 font-bold text-xs transition-all">
                Request Engineers <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>

          
          <div data-category="schools" className={"service-item tech-card rounded-2xl p-7 flex flex-col justify-between " + (serviceFilter !== 'all' && serviceFilter !== 'schools' ? 'hidden' : '')}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">SCHOOL SOLUTIONS</span>
                <i className="fa-solid fa-school text-2xl text-cyan-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Campus &amp; School Digital Infrastructure</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Purpose-built digital management systems and on-site IT staffing for K-12 schools, academies, and training institutes looking to digitize records and parent communication.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> Student Information, Attendance &amp; Result Portals</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> Automated Fee Billing &amp; Digital Receipt Tracking</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> Dedicated School IT Support &amp; Computer Lab Setup</li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-charcoal-700/70">
              <span className="text-xs font-mono text-slate-400">K-12 &bull; Colleges &bull; Training Hubs</span>
              <button onClick={(event) => { openConsultationModal('School Digital Infrastructure') }} className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-charcoal-950 font-bold text-xs transition-all">
                Book School Demo <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>

          
          <div data-category="business" className={"service-item tech-card rounded-2xl p-7 flex flex-col justify-between " + (serviceFilter !== 'all' && serviceFilter !== 'business' ? 'hidden' : '')}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">BUSINESS STRATEGY</span>
                <i className="fa-solid fa-chart-line text-2xl text-cyan-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">SME Workflow Automation &amp; Growth Tech</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Data-driven operational strategy and custom automation pipelines that cut administrative overhead so small business owners can focus on revenue.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> Automated Lead Capture, Invoicing &amp; Inventory Alerts</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> Lightweight Local/Cloud Databases (Node + SQLite)</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400"></i> Digital Brand Presence &amp; Conversion Optimization</li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-charcoal-700/70">
              <span className="text-xs font-mono text-slate-400">SMEs &bull; Startups &bull; Local Enterprises</span>
              <button onClick={(event) => { openConsultationModal('Business Strategy & Automation') }} className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-charcoal-950 font-bold text-xs transition-all">
                Automate Business <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    
    
    <section id="view-portfolio" className={'page-view ' + (activePage === 'portfolio' ? 'active' : '')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">OUR SOLUTIONS</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Solutions Portfolio</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Explore the systems we build for schools, retailers, logistics teams, and growing businesses. GitHub links will be added when available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <article key={solution.title} className="tech-card rounded-2xl overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 border-b border-charcoal-800 flex items-center justify-center relative">
                <div className="absolute inset-0 cyber-grid opacity-50"></div>
                <i className={`fa-solid ${solution.icon} relative text-5xl text-cyan-400/80 transition-transform duration-500 group-hover:scale-110`} aria-hidden="true"></i>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">{solution.category}</span>
                    <h2 className="text-lg font-bold text-white mt-2">{solution.title}</h2>
                  </div>
                  <button
                    type="button"
                    disabled
                    title="GitHub repository link coming soon"
                    aria-label={`GitHub repository link for ${solution.title} coming soon`}
                    className="shrink-0 p-2 rounded-lg border border-charcoal-700 text-slate-500 cursor-not-allowed"
                  >
                    <i className="fa-brands fa-github text-lg"></i>
                  </button>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mt-3">{solution.description}</p>
                <div className="mt-5 pt-4 border-t border-charcoal-800 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  Repository link coming soon
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    
    
    
  </main>

  
  
  
  <footer className="relative z-10 border-t border-charcoal-800 bg-charcoal-950/90 mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-sm">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <div>
            <span id="footer-brand-name" className="text-white font-bold text-sm">{brand}</span>
            <p className="text-xs text-slate-500">Technology Staffing &bull; School Systems &bull; Workflow Automation</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
          <button onClick={(event) => { navigateTo('home') }} className="hover:text-cyan-400 transition-colors">Home</button>
          <button onClick={(event) => { navigateTo('services') }} className="hover:text-cyan-400 transition-colors">Services</button>
          <button onClick={(event) => { navigateTo('portfolio') }} className="hover:text-cyan-400 transition-colors">Solutions</button>
        </div>
      </div>
    </div>
  </footer>

  
  
  
  <div id="consultation-modal" className={'fixed inset-0 z-50 ' + (consultationOpen ? 'flex' : 'hidden') + ' items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-md'}>
    <div className="tech-card rounded-2xl w-full max-w-lg p-6 sm:p-8 relative border-cyan-400/40 shadow-cyan-lg">
      <button onClick={(event) => { closeConsultationModal() }} className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-charcoal-800 text-slate-400 hover:text-white flex items-center justify-center">
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className={consultationSuccess ? 'hidden' : ''}>
        <span className="text-xs font-mono text-cyan-400">DIRECT SERVICE INQUIRY</span>
        <h2 className="text-2xl font-extrabold text-white mt-1 mb-2">Request a Consultation</h2>
        <p className="text-xs text-slate-400 mb-6">
          Share your project details. Submitting opens an email draft for you to review and send.
        </p>

        <form onSubmit={(event) => { handleConsultationSubmit(event) }} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">FULL NAME *</label>
              <input type="text" id="lead-name" required placeholder="Jane Doe" className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-charcoal-700 focus:border-cyan-400 focus:outline-none text-sm text-white" />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">WORK EMAIL *</label>
              <input type="email" id="lead-email" required placeholder="jane@organization.com" className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-charcoal-700 focus:border-cyan-400 focus:outline-none text-sm text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">ORGANIZATION TYPE *</label>
              <select id="lead-org-type" className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-charcoal-700 focus:border-cyan-400 focus:outline-none text-sm text-white">
                <option value="Small / Medium Business">Small / Medium Business</option>
                <option value="School / Educational Institute">School / Educational Institute</option>
                <option value="Tech Startup / Enterprise">Tech Startup / Enterprise</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">PRIMARY SERVICE *</label>
              <select id="lead-service" className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-charcoal-700 focus:border-cyan-400 focus:outline-none text-sm text-white">
                <option value="Tech Staffing - Solutions Architect">Tech Staffing - Solutions Architect</option>
                <option value="Full-Stack Software Engineering">Full-Stack Software Engineering</option>
                <option value="School Digital Infrastructure">School Digital Infrastructure</option>
                <option value="Business Strategy & Automation">Business Strategy &amp; Automation</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">PROJECT OR STAFFING BRIEF *</label>
            <textarea id="lead-notes" rows="3" required placeholder="Describe your timeline, team size, or system requirements..." className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-charcoal-700 focus:border-cyan-400 focus:outline-none text-sm text-white"></textarea>
          </div>

          <button type="submit" className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-charcoal-950 font-extrabold text-sm shadow-cyan-sm transition-all">
            Open Email Draft
          </button>
        </form>
      </div>

      
      <div className={consultationSuccess ? 'text-center py-6' : 'hidden text-center py-6'}>
        <div className="w-16 h-16 rounded-2xl bg-cyan-400/15 border border-cyan-400 text-cyan-400 flex items-center justify-center text-3xl mx-auto mb-4 shadow-cyan-sm">
          <i className="fa-solid fa-check"></i>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Your request is ready</h3>
        <p className="text-sm text-slate-300 mb-6">
          Your email app should open with the request details. Review and send the message to complete your inquiry. If it did not open, email <a className="text-cyan-400 underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <button onClick={(event) => { closeConsultationModal() }} className="px-5 py-2.5 rounded-xl bg-charcoal-800 text-white text-xs font-semibold hover:bg-charcoal-700">Close</button>
      </div>
    </div>
  </div>


  
  
  
  
    </div>
  );
}

export default App;
