/**
 * Frans Kurniawan Portfolio - Interactive Script with Bilingual i18n Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initSecurityShield();
  initI18n();
  initNavbar();
  initAmbientCanvas();
  initCardTilt();
  initScrollSpy();
  initPhotoModal();
  initBackToTop();
});

/* ==========================================================================
   1. Bilingual i18n Engine (EN / ID)
   ========================================================================== */
const translations = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Get In Touch",

    hero_status: "Available for Global Remote & Full-time Roles",
    hero_greeting: "Hi, I'm",
    hero_role: "Full-Stack PHP Web Developer",
    avatar_role: "Full-Stack Engineer",
    avatar_status: "Online & Ready to Work",
    avatar_hint: "Click to enlarge",
    tooltip_top: "Back to top",
    modal_badge: "Profile Photo Preview",
    hero_desc: "<strong>3+ years</strong> of hands-on experience designing, developing, and maintaining robust web applications from <em>initial concept</em> through <em>production</em>. Specialized in <strong>PHP Native, Laravel, MySQL</strong>, and integrating <strong>AI Agent Workflows</strong> for accelerated enterprise-grade software delivery.",
    hero_cta_projects: "View Selected Projects",
    hero_cta_contact: "Let's Connect",
    metric_exp: "Years Experience",
    metric_delivery: "End-to-End Delivery",
    metric_tested: "Tested & Maintained",
    cli_success: "System Ready: Fast, Secure & Business-Oriented.",

    about_eyebrow: "PROFESSIONAL SUMMARY",
    about_heading: "Engineering Web Solutions with Precision & Scale",
    about_card1_title: "End-to-End Full-Stack",
    about_card1_desc: "Proficient in building complete application architectures from relational MySQL database design and robust PHP backend logic to interactive, user-friendly frontend interfaces.",
    about_card2_title: "AI-Assisted Workflow",
    about_card2_desc: "Leveraging AI agents within software development workflows to accelerate feature implementation, unit testing, refactoring, code reviews, and comprehensive technical documentation.",
    about_card3_title: "Business-Oriented Systems",
    about_card3_desc: "Proven track record delivering mission-critical operational software: Service Queue Systems, Cargo & Logistics Platforms, and Corporate Asset Inventory Management.",

    skills_eyebrow: "TECH STACK & EXPERTISE",
    skills_heading: "Core Skills & Specializations",
    skills_subtitle: "Combining solid software engineering fundamentals with modern, AI-enhanced development practices.",
    skills_cat_backend: "Backend & Database",
    skills_cat_frontend: "Frontend Interface",
    skills_cat_ai: "Software Engineering & AI Workflow",
    skills_responsive: "Responsive & Clean UI Design",
    skills_debug: "Debugging & Profiling",
    skills_refactor: "Code Refactoring & Optimization",
    skills_scratch: "System Architecture from Scratch",

    proj_eyebrow: "PORTFOLIO SHOWCASE",
    proj_heading: "Featured Production Projects",
    proj_subtitle: "Real-world business systems built and architected from scratch through production deployment.",

    p1_title: "Public Service Queue System",
    p1_desc: "Interactive digital queue management platform built for public service centers. Features self-service ticket dispensing, real-time multi-counter audiovisual calling, waiting time tracking, and analytics dashboards for staff efficiency.",
    p1_h1: "Multi-counter & automated voice synthesizer calling",
    p1_h2: "Real-time queue monitoring & workload analytics",
    p1_h3: "Architected and deployed from scratch to production",

    p2_title: "Online Ticket Booking & QR Verification",
    p2_desc: "End-to-end ticketing and seat reservation platform. Allows customers to interactively select schedules and seats, automated payment verification, encrypted QR Code E-Ticket generation, and barcode validation for rapid gate check-in.",
    p2_h1: "Interactive seat map & live inventory allocation",
    p2_h2: "Encrypted QR Code PDF E-Ticket issuance",
    p2_h3: "Real-time gate check-in & barcode scanner validator",

    p3_title: "Employee KPI Appraisal System",
    p3_desc: "Comprehensive employee appraisal system utilizing Key Performance Indicators (KPI) and weighted score matrices. Includes self-assessment modules, multi-tier managerial reviews, automated scoring, and trend analytics to guide promotions and bonuses.",
    p3_h1: "Dynamic KPI criteria weighting & automated calculation",
    p3_h2: "Multi-tier managerial approval & review workflows",
    p3_h3: "Interactive performance graphs & reporting exports",

    p4_title: "Customer Care QA & Complaint System",
    p4_desc: "Omnichannel customer service and complaint resolution ticketing system. Integrates Service Level Agreement (SLA) timers, automated escalation rules, Quality Assurance (QA) audit scoring for support agent responses, and customer satisfaction sentiment analytics.",
    p4_h1: "Ticket lifecycle management & SLA compliance tracking",
    p4_h2: "QA sampling audit module & agent scorecard grading",
    p4_h3: "Trend analytics dashboard for issue root-cause analysis",

    p5_title: "Cargo & Expedition Logistics Platform",
    p5_desc: "Enterprise logistics and freight forwarding management web application. Streamlines cargo shipment tracking, automated distance/weight tariff calculation, shipping manifest creation, and airway bill/delivery order documentation.",
    p5_h1: "Manifest management & multi-point route dispatching",
    p5_h2: "End-to-end logistics milestone status tracking",
    p5_h3: "High-volume transactional query optimization",

    p6_title: "Corporate Asset & Inventory Management",
    p6_desc: "Centralized asset tracking and inventory monitoring system. Provides complete lifecycle management, asset condition classification, employee lending/mutation histories, and automated audit logs for transparent organizational compliance.",
    p6_h1: "Asset lifecycle tracking, condition & location tagging",
    p6_h2: "Immutable audit logs for asset transfers & maintenance",
    p6_h3: "Automated reconciliation & inventory reporting exports",

    view_on_github: "View on GitHub",

    exp_eyebrow: "TRACK RECORD",
    exp_heading: "Professional Experience & Education",
    exp_role: "Freelance Full-Stack Web Developer",
    exp_loc: "Indonesia | Freelance & Remote",
    exp_period: "3 Years Experience",
    exp_b1: "Design and develop web applications from initial concept through production deployment.",
    exp_b2: "Develop robust backend architectures using PHP Native and Laravel framework.",
    exp_b3: "Design, optimize, and maintain relational database schemas using MySQL.",
    exp_b4: "Build modern, responsive, and intuitive user interfaces using JavaScript, HTML5/CSS3, and Bootstrap.",
    exp_b5: "Refactor legacy codebases to improve maintainability, performance, security, and scalability.",
    exp_b6: "Leverage AI agent workflows to accelerate feature development, test coverage, technical documentation, and debugging.",
    edu_degree: "Bachelor of Information Systems (S.Kom / B.S.)",
    edu_period: "Graduated 2017",
    edu_desc: "Coursework focused on business information systems analysis, software engineering, relational database management systems, and enterprise IT architecture design.",

    contact_eyebrow: "LET'S COLLABORATE",
    contact_heading: "Ready to Build Your Next Web Project",
    contact_subtext: "Open for <strong>Full-Stack PHP Developer, Laravel Developer, Backend Engineer</strong> positions across contract, freelance, and <em>full-time global remote</em> opportunities.",
    contact_email_label: "Official Email",
    contact_wa_label: "WhatsApp Direct",
    contact_gh_label: "GitHub Repository",
    contact_gh_val: "View GitHub Profile",
    contact_li_label: "LinkedIn Network",
    contact_li_val: "Connect on LinkedIn",
    toast_copied: "Copied to clipboard!"
  },
  id: {
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_projects: "Project",
    nav_experience: "Pengalaman",
    nav_contact: "Hubungi Saya",

    hero_status: "Tersedia untuk Remote Global & Full-time Roles",
    hero_greeting: "Halo, Saya",
    hero_role: "Full-Stack PHP Web Developer",
    avatar_role: "Full-Stack Engineer",
    avatar_status: "Aktif & Siap Bekerja",
    avatar_hint: "Klik untuk perbesar",
    tooltip_top: "Kembali ke atas",
    modal_badge: "Preview Foto Profil",
    hero_desc: "Berpengalaman <strong>3+ tahun</strong> merancang, membangun, dan memelihara aplikasi web tangguh dari <em>initial concept</em> hingga <em>production</em>. Spesialisasi dalam <strong>PHP Native, Laravel, MySQL</strong>, dan integrasi <strong>AI Agent Workflow</strong> untuk efisiensi pengembangan sistem berskala bisnis.",
    hero_cta_projects: "Lihat Portofolio Project",
    hero_cta_contact: "Mari Diskusi",
    metric_exp: "Tahun Pengalaman",
    metric_delivery: "End-to-End Delivery",
    metric_tested: "Tested & Maintained",
    cli_success: "Sistem Siap: Cepat, Aman & Berorientasi Bisnis.",

    about_eyebrow: "RINGKASAN PROFIL",
    about_heading: "Membangun Solusi Web dengan Presisi & Efisiensi",
    about_card1_title: "End-to-End Full-Stack",
    about_card1_desc: "Terbiasa membangun arsitektur aplikasi dari tahap perancangan database relasional MySQL, logika backend PHP yang solid, hingga tampilan frontend interaktif dan user-friendly.",
    about_card2_title: "AI-Assisted Workflow",
    about_card2_desc: "Mengintegrasikan kecerdasan buatan (AI Agents) dalam workflow pengembangan untuk mempercepat feature implementation, unit testing, refactoring, dan penyusunan dokumentasi teknis.",
    about_card3_title: "Sistem Skala Bisnis",
    about_card3_desc: "Spesialis dalam pembuatan aplikasi manajemen operasional nyata: Sistem Antrean Layanan, Sistem Ekspedisi & Kargo, hingga Manajemen Inventaris Aset Perusahaan.",

    skills_eyebrow: "KEAHLIAN & TEKNOLOGI",
    skills_heading: "Tech Stack & Spesialisasi",
    skills_subtitle: "Kombinasi fondasi rekayasa perangkat lunak yang kokoh dengan teknologi modern.",
    skills_cat_backend: "Backend & Database",
    skills_cat_frontend: "Frontend Interface",
    skills_cat_ai: "Software Engineering & AI Workflow",
    skills_responsive: "Responsive & Clean UI Design",
    skills_debug: "Debugging & Profiling",
    skills_refactor: "Refactoring & Optimasi Kode",
    skills_scratch: "Arsitektur Sistem dari Scratch",

    proj_eyebrow: "PORTFOLIO KARYA",
    proj_heading: "Project Pilihan yang Telah Dibangun",
    proj_subtitle: "Sistem web nyata berbasis kebutuhan operasional bisnis yang dikembangkan dari nol hingga produksi.",

    p1_title: "Sistem Antrean Layanan Publik",
    p1_desc: "Sistem antrean digital interaktif untuk instansi & layanan publik. Mengintegrasikan pencetakan tiket nomor antrean mandiri, display audio-visual panggilan loket otomatis, pemantauan estimasi waktu tunggu, serta dashboard rekapitulasi efisiensi pelayanan petugas loket.",
    p1_h1: "Multi-loket & Voice synthesizer panggilan antrean",
    p1_h2: "Monitoring waktu tunggu & analitik beban kerja",
    p1_h3: "Dibangun dari scratch hingga live production",

    p2_title: "Sistem Pemesanan Tiket Online",
    p2_desc: "Platform reservasi dan booking tiket terintegrasi. Memungkinkan pengguna memilih jadwal dan tempat duduk secara interaktif, verifikasi pembayaran otomatis, penerbitan E-Ticket ber-QR Code terenkripsi, serta modul pemindai barcode untuk validasi check-in di pintu masuk.",
    p2_h1: "Pemilihan kursi interaktif & manajemen kuota live",
    p2_h2: "Generate E-Ticket PDF dengan QR Code terenkripsi",
    p2_h3: "Validator scanner check-in pintu gerbang",

    p3_title: "Sistem Penilaian Kinerja (KPI Appraisal)",
    p3_desc: "Aplikasi evaluasi performa pegawai berbasis Key Performance Indicators (KPI) dan matriks berbobot. Memfasilitasi self-assessment karyawan, evaluasi berjenjang atasan, kalkulasi skor objektif, hingga visualisasi tren kinerja berkala untuk penentuan reward & promosi.",
    p3_h1: "Pembobotan kriteria KPI dinamis & otomatis",
    p3_h2: "Alur approval penilaian bertingkat (multi-tier)",
    p3_h3: "Grafik komparasi performa dan rekap ekspor",

    p4_title: "Sistem Care QA & Keluhan Customer",
    p4_desc: "Sistem customer care dan penanganan komplain komprehensif. Dilengkapi alur ticketing pengaduan, pengawasan Service Level Agreement (SLA) waktu resolusi, scoring audit Quality Assurance (QA) atas respon tim support, serta analisis sentimen kendala pelanggan.",
    p4_h1: "Manajemen siklus tiket komplain & tracking SLA",
    p4_h2: "Modul audit QA sampling & grading performa agen",
    p4_h3: "Dashboard analitik tren isu kepuasan pelanggan",

    p5_title: "Cargo & Expedition Management System",
    p5_desc: "Aplikasi web komprehensif untuk mengelola rantai proses operasional logistik, ekspedisi pengiriman, dan kargo. Membantu tracking status barang, kalkulasi tarif rute ekspedisi, serta pendataan manifest dan dokumen surat jalan pengiriman secara terpadu.",
    p5_h1: "Manajemen manifest dan rute pengiriman",
    p5_h2: "Pencatatan status logistik end-to-end",
    p5_h3: "Optimasi query database transaksi volume tinggi",

    p6_title: "Asset Inventory Management System",
    p6_desc: "Sistem manajemen dan monitoring inventaris aset organisasi. Dilengkapi pelacakan siklus hidup aset, status kondisi barang, histori peminjaman/mutasi, hingga pelaporan otomatis untuk mempermudah audit aset perusahaan secara transparan.",
    p6_h1: "Tracking status kondisi dan lokasi aset",
    p6_h2: "Riwayat audit mutasi dan pemeliharaan",
    p6_h3: "Laporan otomatis rekapitulasi inventaris",

    view_on_github: "Lihat di GitHub",

    exp_eyebrow: "REKAM JEJAK",
    exp_heading: "Pengalaman Kerja & Pendidikan",
    exp_role: "Freelance Full-Stack Web Developer",
    exp_loc: "Indonesia | Freelance & Remote",
    exp_period: "3 Tahun Pengalaman",
    exp_b1: "Merancang dan membangun aplikasi web dari tahap konsep hingga deployment production.",
    exp_b2: "Mengembangkan backend tangguh menggunakan PHP Native dan framework Laravel.",
    exp_b3: "Mendesain dan memelihara struktur database relasional menggunakan MySQL.",
    exp_b4: "Membangun antarmuka responsif dan modern dengan JavaScript, HTML5/CSS3, dan Bootstrap.",
    exp_b5: "Melakukan refactoring kode guna meningkatkan maintainability, performa, dan skalabilitas sistem.",
    exp_b6: "Memanfaatkan AI Agent workflow untuk mempercepat perancangan fitur, pengujian (testing), penulisan dokumentasi, dan debugging sistem.",
    edu_degree: "Sarjana Sistem Informasi (S.Kom / B.S.)",
    edu_period: "Lulusan 2017",
    edu_desc: "Mempelajari analisis sistem informasi bisnis, rekayasa perangkat lunak, manajemen basis data relasional, dan perancangan arsitektur teknologi informasi.",

    contact_eyebrow: "MARI BEKERJASAMA",
    contact_heading: "Siap Membantu Project Web Anda",
    contact_subtext: "Terbuka untuk peluang <strong>Full-Stack PHP Developer, Laravel Developer, Backend Engineer</strong>, baik kontrak, freelance, maupun <em>remote full-time</em> di tim lokal maupun internasional.",
    contact_email_label: "Email Resmi",
    contact_wa_label: "WhatsApp Direct",
    contact_gh_label: "GitHub Repository",
    contact_gh_val: "Buka Profil GitHub",
    contact_li_label: "LinkedIn Network",
    contact_li_val: "Terhubung di LinkedIn",
    toast_copied: "Teks berhasil disalin!"
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'en';

function initI18n() {
  const langToggle = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');

  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'id' : 'en';
      localStorage.setItem('portfolio_lang', currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = lang.toUpperCase();
  }

  document.documentElement.lang = lang;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

/* ==========================================================================
   2. Navbar Scroll Effect & Mobile Navigation
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars-staggered');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars-staggered');
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars-staggered');
        }
      });
    });
  }
}

/* ==========================================================================
   3. Interactive Ambient Canvas Particles
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = { x: null, y: null, radius: 120 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.6;
      this.speedY = (Math.random() - 0.5) * 0.6;
      this.color = Math.random() > 0.5 ? 'rgba(56, 189, 248, ' : 'rgba(99, 102, 241, ';
      this.alpha = Math.random() * 0.4 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > width) this.speedX = -this.speedX;
      if (this.y < 0 || this.y > height) this.speedY = -this.speedY;

      if (mouse.x && mouse.y) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 3;
          this.y -= (dy / distance) * force * 3;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  let particlesArray = [];
  function initParticles() {
    particlesArray = [];
    const count = Math.min(Math.floor((width * height) / 18000), 65);
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
  }

  function connectParticles() {
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a + 1; b < particlesArray.length; b++) {
        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          const opacity = 1 - distance / 110;
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.15})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    connectParticles();
    requestAnimationFrame(animate);
  }

  initParticles();
  animate();
}

/* ==========================================================================
   4. 3D Subtle Tilt Effect on Cards
   ========================================================================== */
function initCardTilt() {
  const cards = document.querySelectorAll('.glass-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
  });
}

/* ==========================================================================
   5. Scroll Spy Navigation Highlight
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-item');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   6. Toast Helper
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/* ==========================================================================
   7. Security Shield & Hardening
   ========================================================================== */
function initSecurityShield() {
  // 1. Anti-Clickjacking & Iframe Hijacking Buster
  try {
    if (window.top !== window.self) {
      window.top.location = window.self.location;
    }
  } catch (e) {
    console.warn('Frame navigation restricted.');
  }

  // 2. Tabnabbing Protection on all External Links
  const links = document.querySelectorAll('a[target="_blank"]');
  links.forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
  });

  // 3. Prevent Protocol Injection on Links
  document.addEventListener('click', (e) => {
    const targetLink = e.target.closest('a');
    if (targetLink && targetLink.href) {
      const href = targetLink.getAttribute('href');
      if (href && href.toLowerCase().startsWith('javascript:')) {
        e.preventDefault();
        console.warn('Blocked untrusted script execution attempt.');
      }
    }
  }, true);
}

/* ==========================================================================
   8. Photo Detail Modal (Lightbox)
   ========================================================================== */
function initPhotoModal() {
  const avatarTrigger = document.getElementById('avatarTrigger');
  const modal = document.getElementById('photoModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const backdrop = document.getElementById('modalBackdrop');

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (avatarTrigger) avatarTrigger.focus();
  }

  if (avatarTrigger) {
    avatarTrigger.addEventListener('click', openModal);
    avatarTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   9. Floating Back to Top Navigation
   ========================================================================== */
function initBackToTop() {
  const floatingBtn = document.getElementById('floatingBackToTop');
  const allBackToTopBtns = document.querySelectorAll('.back-to-top, #floatingBackToTop');

  // Handle visibility based on scroll position
  window.addEventListener('scroll', () => {
    if (floatingBtn) {
      if (window.scrollY > 300) {
        floatingBtn.classList.add('visible');
      } else {
        floatingBtn.classList.remove('visible');
      }
    }
  });

  // Smooth scroll to top on click
  allBackToTopBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}

