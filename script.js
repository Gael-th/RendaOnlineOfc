/* ============================================================
   RENDA INTELIGENTE — script.js
   Gerenciamento de posts, filtros, interações
   ============================================================ */

// ── DADOS DOS POSTS ──────────────────────────────────────────
const posts = [
  {
    id: 1,
    title: "Como Ganhar R$3.000 por Mês como Afiliado Iniciante (Guia 2025)",
    excerpt: "Você não precisa ter produto, experiência ou capital para começar. Neste guia completo, mostro exatamente como trabalhar com marketing de afiliados do zero.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    date: "12 Jan 2025",
    readTime: "8 min",
    icon: "💸",
    featured: true,
    affiliate: { text: "Curso: Afiliados do Zero →", link: "#LINK_AFILIADO" },
    image: "img/curso-marketing.jpg", // <--- Adicione esta linha
    url: "post.html"
  },
  {
    id: 2,
    title: "10 Formas de Ganhar Dinheiro Extra no Fim de Semana (Sem Sair de Casa)",
    excerpt: "Do delivery de textos a revenda de produtos, essas são as formas mais rápidas de aumentar sua renda ainda esse mês — sem precisar largar o emprego.",
    category: "renda",
    categoryLabel: "Renda Extra",
    date: "8 Jan 2025",
    readTime: "6 min",
    icon: "📱",
    featured: false,
    affiliate: { text: "Aplicativo recomendado →", link: "#LINK_AFILIADO" },
    image: "img/curso-marketing.jpg", // <--- Adicione esta linha
    url: "post.html"
  },
  {
    id: 3,
    title: "Tesouro Direto em 2025: Vale a Pena? Guia para Quem Tem Menos de R$1.000",
    excerpt: "Investir não é só para ricos. Com R$30 você já pode começar no Tesouro Direto e fazer seu dinheiro render mais do que na poupança. Saiba como.",
    category: "investimentos",
    categoryLabel: "Investimentos",
    date: "5 Jan 2025",
    readTime: "7 min",
    icon: "📊",
    featured: false,
    affiliate: { text: "Plataforma de investimentos →", link: "#LINK_AFILIADO" },
    image: "img/curso-marketing.jpg", // <--- Adicione esta linha
    url: "post.html"
  },
  {
    id: 4,
    title: "Instagram Para Negócios: Como Chegar a 10K Seguidores e Monetizar em 60 Dias",
    excerpt: "O Instagram ainda é uma das melhores plataformas para quem quer vender online. Aprenda a estratégia que grandes criadores usam para crescer rápido.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    date: "2 Jan 2025",
    readTime: "9 min",
    icon: "📸",
    featured: false,
    affiliate: { text: "Curso de Instagram →", link: "#LINK_AFILIADO" },
    image: "img/curso-marketing.jpg", // <--- Adicione esta linha
    url: "post.html"
  },
  {
    id: 5,
    title: "Freelancer: Como Cobrar o Que Você Vale e Nunca Ficar Sem Cliente",
    excerpt: "O maior erro dos freelancers iniciantes é cobrar barato demais. Veja como precificar seus serviços corretamente e construir uma carteira de clientes fiéis.",
    category: "renda",
    categoryLabel: "Renda Extra",
    date: "29 Dez 2024",
    readTime: "5 min",
    icon: "💼",
    featured: false,
    affiliate: { text: "Plataforma para freelancers →", link: "#LINK_AFILIADO" },
    image: "img/curso-marketing.jpg", // <--- Adicione esta linha
    url: "post.html"
  },
  {
    id: 6,
    title: "CDB vs. Poupança: Onde Deixar Seu Dinheiro Render Mais em 2025",
    excerpt: "A poupança rende menos que a inflação. Descubra alternativas simples, seguras e acessíveis para quem quer guardar dinheiro e ver ele crescer de verdade.",
    category: "investimentos",
    categoryLabel: "Investimentos",
    date: "26 Dez 2024",
    readTime: "6 min",
    icon: "🏦",
    featured: false,
    affiliate: { text: "Abrir conta gratuita →", link: "#LINK_AFILIADO" },
    image: "img/curso-marketing.jpg", // <--- Adicione esta linha
    url: "post.html"
  },
  {
  id: 7,
  title: "Curso Completo de Marketing Digital: Aprenda a Vender Todos os Dias como Afiliado",
  excerpt: "Conheça o curso ideal para quem quer começar no marketing digital do zero e aprender estratégias práticas para gerar vendas todos os dias como afiliado.",
  category: "marketing",
  categoryLabel: "Marketing Digital",
  date: "13 Jan 2025",
  readTime: "6 min",
  icon: "🎯",
  featured: false,
  affiliate: { text: "🚀 Acessar Curso Completo →", link: "#SEU_LINK_AFILIADO" },
  image: "img/curso-marketing.jpg", // <--- Adicione esta linha
  url: "post.html"
},
{
  id: 8,
  title: "Abra sua Conta no Nubank e Comece a Organizar Seu Dinheiro Hoje",
  excerpt: "Veja como criar sua conta no Nubank em poucos minutos e ter acesso a um banco digital sem tarifas, com controle total pelo celular.",
  category: "financas",
  categoryLabel: "Finanças",
  date: "14 Jan 2025",
  readTime: "4 min",
  icon: "💳",
  featured: false,
  affiliate: { text: "💜 Criar Conta no Nubank →", link: "#SEU_LINK_INDICACAO" },
  image: "img/curso-marketing.jpg", // <--- Adicione esta linha
  url: "post.html"
},
{
  id: 9,
  title: "Organize Seus Leads e Aumente Suas Vendas com um CRM Profissional",
  excerpt: "Descubra como um app de CRM pode te ajudar a organizar contatos, acompanhar clientes e aumentar suas vendas no marketing digital.",
  category: "marketing",
  categoryLabel: "Marketing Digital",
  date: "15 Jan 2025",
  readTime: "5 min",
  icon: "📊",
  featured: false,
  affiliate: { text: "📈 Testar CRM Gratuito →", link: "#SEU_LINK_CRM" },
  image: "img/curso-marketing.jpg",
  url: "post.html"
},
{
  id: 10,
  title: "Os Melhores Livros de Finanças para Mudar Sua Vida Financeira em 2025",
  excerpt: "Descubra os livros mais recomendados sobre finanças, investimentos e mentalidade milionária para quem quer sair das dívidas e começar a enriquecer.",
  category: "financas",
  categoryLabel: "Finanças",
  date: "16 Jan 2025",
  readTime: "7 min",
  icon: "📚",
  featured: false,
  affiliate: { text: "📖 Ver Livros Recomendados →", link: "#SEU_LINK_AFILIADO_AMAZON" },
  image: "img/curso-marketing.jpg",
  url: "post.html"
},
{
  id: 11,
  title: "Como Criar uma Conta na Coinbase e Começar a Investir em Criptomoedas",
  excerpt: "Aprenda passo a passo como abrir sua conta na Coinbase e dar os primeiros passos no mundo das criptomoedas de forma simples e segura.",
  category: "financas",
  categoryLabel: "Finanças",
  date: "17 Jan 2025",
  readTime: "5 min",
  icon: "🪙",
  featured: false,
  affiliate: { text: "💰 Criar Conta na Coinbase →", link: "#SEU_LINK_INDICACAO" },
  image: "img/curso-marketing.jpg",
  url: "post.html"
}
];

// ── UTILITÁRIOS ──────────────────────────────────────────────
const getCategoryColors = (cat) => {
  const colors = {
    marketing:    { bg: '#e3f2fd', text: '#1565c0' },
    renda:        { bg: '#e8f5e9', text: '#2e7d32' },
    investimentos: { bg: '#fff8e1', text: '#f57f17' }
  };
  return colors[cat] || { bg: '#f5f5f5', text: '#444' };
};

// ── RENDERIZAR CARD DE POST ──────────────────────────────────
function createPostCard(post, index) {
  const card = document.createElement('article');
  card.className = `post-card${post.featured && index === 0 ? ' featured' : ''}`;
  card.dataset.category = post.category;
  card.style.animationDelay = `${index * 0.08}s`;
  card.classList.add('animate-in');

  card.innerHTML = `
    <div class="post-card-img">
  <img src= ${post.image} alt= ${post.title} style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }} 
  />
  <span class="card-category-badge"> ${post.categoryLabel}</span>
</div>
    <div class="post-card-body">
      <div class="post-card-meta">
        <span class="post-card-date">📅 ${post.date}</span>
        <span class="post-card-read">⏱ ${post.readTime}</span>
      </div>
      <h2 class="post-card-title">${post.title}</h2>
      <p class="post-card-excerpt">${post.excerpt}</p>
      <div class="post-card-footer">
        <a href="${post.url}" class="read-more-btn">Ler Artigo Completo →</a>
        <div class="post-card-affiliate">
          <a href="${post.affiliate.link}" target="_blank" rel="noopener">${post.affiliate.text}</a>
        </div>
      </div>
    </div>
  `;

  return card;
}

// ── RENDERIZAR POSTS NA HOME ─────────────────────────────────
function renderPosts(filter = 'all') {
  const grid1 = document.getElementById('postsGrid');
  const grid2 = document.getElementById('postsGrid2');
  if (!grid1) return;

  const filtered = filter === 'all'
    ? posts
    : posts.filter(p => p.category === filter);

  grid1.innerHTML = '';
  if (grid2) grid2.innerHTML = '';

  const half = Math.ceil(filtered.length / 2);

  filtered.forEach((post, i) => {
    const card = createPostCard(post, i);
    if (i < half) {
      grid1.appendChild(card);
    } else if (grid2) {
      grid2.appendChild(card);
    } else {
      grid1.appendChild(card);
    }
  });
}

// ── FILTROS DE CATEGORIA ─────────────────────────────────────
function initFilters() {
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderPosts(pill.dataset.filter);
    });
  });
}

// ── POSTS RELACIONADOS (post.html) ──────────────────────────
function renderRelatedPosts() {
  const container = document.getElementById('relatedPosts');
  if (!container) return;

  const related = posts.slice(1, 4);
  related.forEach(post => {
    const card = document.createElement('article');
    card.className = 'related-card';
    card.innerHTML = `
      <div class="related-card-img">${post.icon}</div>
      <div class="related-card-body">
        <p class="related-card-cat">${post.categoryLabel}</p>
        <h4 class="related-card-title">${post.title}</h4>
        <a href="${post.url}" class="related-card-link">Ler artigo →</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// ── POSTS POPULARES (sidebar) ────────────────────────────────
function renderPopularPosts() {
  const container = document.getElementById('popularPosts');
  if (!container) return;

  const popular = posts.slice(0, 4);
  popular.forEach((post, i) => {
    const item = document.createElement('div');
    item.className = 'popular-post-item';
    item.innerHTML = `
      <span class="popular-num">0${i + 1}</span>
      <div class="popular-post-info">
        <a href="${post.url}" class="popular-post-title">${post.title}</a>
        <span class="popular-post-cat">${post.categoryLabel} · ${post.readTime}</span>
      </div>
    `;
    container.appendChild(item);
  });
}

// ── MENU MOBILE ──────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    // Animate hamburger
    const spans = toggle.querySelectorAll('span');
    const isOpen = nav.classList.contains('open');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close menu on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    });
  });
}

// ── NEWSLETTER FORM ──────────────────────────────────────────
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Inscrito com sucesso!';
    btn.style.background = '#4caf50';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Quero Receber Grátis →';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });

  // Sidebar forms
  document.querySelectorAll('.sidebar-form').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = f.querySelector('button');
      btn.textContent = 'Inscrito!';
      btn.disabled = true;
    });
  });
}

// ── COPIAR LINK ──────────────────────────────────────────────
function initCopyLink() {
  const btn = document.getElementById('copyLink');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href).then(() => {
      const original = btn.textContent;
      btn.textContent = 'Link copiado!';
      setTimeout(() => { btn.textContent = original; }, 2000);
    });
  });
}

// ── SCROLL REVEAL ────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.post-card, .sidebar-widget, .affiliate-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
}

// ── ACTIVE NAV LINK ──────────────────────────────────────────
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href) && href !== '#') {
      link.classList.add('active');
    }
  });
}

// ── STICKY HEADER SHADOW ────────────────────────────────────
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,.3)';
    } else {
      header.style.boxShadow = '';
    }
  });
}

// ── PROGRESS BAR (post.html) ────────────────────────────────
function initReadingProgress() {
  if (!document.querySelector('.post-article')) return;

  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed;
    top: 64px;
    left: 0;
    height: 3px;
    background: #00c853;
    width: 0%;
    z-index: 999;
    transition: width .1s linear;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(pct, 100)}%`;
  });
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderPosts();
  renderRelatedPosts();
  renderPopularPosts();
  initFilters();
  initMobileMenu();
  initNewsletterForm();
  initCopyLink();
  initHeaderScroll();
  initReadingProgress();
  setActiveNavLink();

  // Delay scroll reveal to let DOM settle
  setTimeout(initScrollReveal, 100);
});
