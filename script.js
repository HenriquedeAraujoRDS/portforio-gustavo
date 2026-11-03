/**
 * ==========================================================================
 * PORTFÓLIO - HENRIQUE DE ARAUJO PINTO
 * Escola Raphael Di Santo | 2º Ano do Ensino Médio | Tecnologia da Informação
 * Lógica, Interatividades, Modo Escuro/Claro, Efeito Explosão e Validações
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. ALTERNÂNCIA ENTRE MODO CLARO E MODO ESCURO (PRIORIDADE 6)
  // ------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;
  const STORAGE_KEY = 'henrique_portfolio_theme';

  // Verificar preferência salva ou preferência do sistema operacional
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    rootElement.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersDark) {
    rootElement.setAttribute('data-theme', 'dark');
  } else {
    rootElement.setAttribute('data-theme', 'light');
  }

  // Alternar tema ao clicar no botão
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);

    // Efeito sutil de explosão de faíscas ao trocar de tema
    const rect = themeToggleBtn.getBoundingClientRect();
    criarExplosao(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
  });

  // ------------------------------------------------------------------------
  // 2. MENU FIXO DE NAVEGAÇÃO E SCROLLSPY (PRIORIDADE 1)
  // ------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Menu mobile hambúrguer
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Fechar menu mobile ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  // Destacar link ativo conforme a rolagem (Scrollspy)
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Sombra reforçada no navbar durante a rolagem
    if (scrollY > 40) {
      navbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.12)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // Botão voltar ao topo
  const btnBackToTop = document.getElementById('btn-back-to-top');
  if (btnBackToTop) {
    btnBackToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ------------------------------------------------------------------------
  // 3. ANIMAÇÕES SUAVES NA ROLAGEM: SCROLL REVEAL (PRIORIDADE 4)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-element');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ------------------------------------------------------------------------
  // 4. ELEMENTO FLUTUANTE ESTILO IVRESS (ALTERNA TEXTOS DINAMICAMENTE)
  // ------------------------------------------------------------------------
  const ivressItem = document.getElementById('ivress-item');
  const ivressText = document.getElementById('ivress-text');
  
  const mensagensIvress = [
    '<Henrique.code />',
    'Escola Raphael Di Santo',
    '⚡ 2º Ano do Ensino Médio',
    'Tecnologia da Informação',
    'JavaScript // HTML5 // CSS3',
    'Futuro Desenvolvedor de Software'
  ];

  let ivressIndex = 0;
  if (ivressItem && ivressText) {
    ivressItem.addEventListener('animationiteration', () => {
      ivressIndex = (ivressIndex + 1) % mensagensIvress.length;
      ivressText.textContent = mensagensIvress[ivressIndex];
    });
  }

  // ------------------------------------------------------------------------
  // 5. ANIMAÇÃO DE EXPLOSÃO DE ELEMENTOS (INSPIRAÇÃO NOOMO AGENCY)
  // ------------------------------------------------------------------------
  const canvas = document.getElementById('explosion-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function redimensionarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', redimensionarCanvas);
  redimensionarCanvas();

  class Particula {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.size = Math.random() * 9 + 4;
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.015;
      this.gravity = 0.12;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.2;
      this.shape = Math.random() > 0.5 ? 'square' : 'circle';

      // Paleta oficial: Vermelho (#D90429), Amarelo (#FFCC00), Preto (#121212)
      const colors = ['#D90429', '#FF2A42', '#FFCC00', '#FFE066', '#FFFFFF', '#121212'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.vx *= 0.98;
      this.rotation += this.rotationSpeed;
      this.alpha -= this.decay;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(this.alpha, 0);
      ctx.fillStyle = this.color;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);

      if (this.shape === 'square') {
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  function criarExplosao(x, y, quantidade = 45) {
    for (let i = 0; i < quantidade; i++) {
      particles.push(new Particula(x, y));
    }
  }

  function animarParticulas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();
      if (particles[i].alpha <= 0) {
        particles.splice(i, 1);
      }
    }
    requestAnimationFrame(animarParticulas);
  }

  animarParticulas();

  // Botão Explodir Criatividade
  const btnExplode = document.getElementById('btn-explode');
  if (btnExplode) {
    btnExplode.addEventListener('click', (e) => {
      const rect = btnExplode.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      criarExplosao(x, y, 70);
    });
  }

  // Explosão ao clicar na seção Hero
  const heroSection = document.getElementById('inicio');
  heroSection.addEventListener('click', (e) => {
    // Apenas se não clicou diretamente em um botão ou link
    if (!e.target.closest('a') && !e.target.closest('button')) {
      criarExplosao(e.clientX, e.clientY, 35);
    }
  });

  // Explosão suave de boas-vindas ao carregar
  setTimeout(() => {
    criarExplosao(window.innerWidth / 2, window.innerHeight / 2.5, 40);
  }, 600);

  // ------------------------------------------------------------------------
  // 6. PRIORIDADE 5: FORMULÁRIO DE CONTATO COM VALIDAÇÃO (SEM BACKEND)
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const inputNome = document.getElementById('nome');
  const inputEmail = document.getElementById('email');
  const inputAssunto = document.getElementById('assunto');
  const textareaMensagem = document.getElementById('mensagem');
  const charCounter = document.getElementById('char-counter');
  const btnSubmit = document.getElementById('btn-submit');
  const toastSuccess = document.getElementById('toast-success');
  const toastClose = document.getElementById('toast-close');
  const formGeneralStatus = document.getElementById('form-general-status');

  // Contador de caracteres para a mensagem
  textareaMensagem.addEventListener('input', () => {
    const len = textareaMensagem.value.trim().length;
    charCounter.textContent = `${len} / 10 mín.`;
    if (len >= 10) {
      charCounter.style.color = '#2ECC71';
    } else {
      charCounter.style.color = 'var(--text-muted)';
    }
    validarCampo(textareaMensagem, len >= 10, 'group-mensagem');
  });

  // Validador Regex de e-mail
  function validarEmailFormato(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Função auxiliar de validação visual de campo
  function validarCampo(inputElement, condicaoValida, groupId) {
    const group = document.getElementById(groupId);
    if (!group) return condicaoValida;

    if (condicaoValida) {
      group.classList.remove('has-error');
      group.classList.add('is-valid');
    } else {
      group.classList.remove('is-valid');
      group.classList.add('has-error');
    }
    return condicaoValida;
  }

  // Validação ao perder o foco (blur)
  inputNome.addEventListener('blur', () => {
    validarCampo(inputNome, inputNome.value.trim().length >= 3, 'group-nome');
  });

  inputEmail.addEventListener('blur', () => {
    validarCampo(inputEmail, validarEmailFormato(inputEmail.value.trim()), 'group-email');
  });

  inputAssunto.addEventListener('blur', () => {
    validarCampo(inputAssunto, inputAssunto.value.trim().length >= 3, 'group-assunto');
  });

  // Limpeza de erro ao digitar
  [inputNome, inputEmail, inputAssunto].forEach(input => {
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group && group.classList.contains('has-error')) {
        group.classList.remove('has-error');
      }
    });
  });

  // Submissão do formulário
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNomeValido = validarCampo(inputNome, inputNome.value.trim().length >= 3, 'group-nome');
    const isEmailValido = validarCampo(inputEmail, validarEmailFormato(inputEmail.value.trim()), 'group-email');
    const isAssuntoValido = validarCampo(inputAssunto, inputAssunto.value.trim().length >= 3, 'group-assunto');
    const isMensagemValida = validarCampo(textareaMensagem, textareaMensagem.value.trim().length >= 10, 'group-mensagem');

    if (!isNomeValido || !isEmailValido || !isAssuntoValido || !isMensagemValida) {
      formGeneralStatus.textContent = '⚠️ Verifique os campos destacados em vermelho!';
      formGeneralStatus.style.color = 'var(--color-primary)';
      return;
    }

    // Simulação de envio com spinner (sem backend real)
    btnSubmit.classList.add('loading');
    btnSubmit.disabled = true;
    formGeneralStatus.textContent = 'Enviando sua mensagem...';
    formGeneralStatus.style.color = 'var(--color-accent)';

    setTimeout(() => {
      btnSubmit.classList.remove('loading');
      btnSubmit.disabled = false;

      // Disparar efeito festivo de explosão de partículas
      const rect = btnSubmit.getBoundingClientRect();
      criarExplosao(rect.left + rect.width / 2, rect.top + rect.height / 2, 60);

      // Exibir Toast de Sucesso
      toastSuccess.classList.add('show');
      formGeneralStatus.textContent = 'Mensagem enviada!';
      formGeneralStatus.style.color = '#2ECC71';

      // Resetar formulário
      contactForm.reset();
      charCounter.textContent = '0 / 10 mín.';
      charCounter.style.color = 'var(--text-muted)';
      document.querySelectorAll('.form-group').forEach(grp => {
        grp.classList.remove('is-valid');
        grp.classList.remove('has-error');
      });

      // Fechar toast automaticamente após 6 segundos
      setTimeout(() => {
        toastSuccess.classList.remove('show');
        formGeneralStatus.textContent = 'Preencha os campos abaixo';
        formGeneralStatus.style.color = 'var(--text-muted)';
      }, 6000);
    }, 1200);
  });

  // Fechar toast manualmente
  if (toastClose) {
    toastClose.addEventListener('click', () => {
      toastSuccess.classList.remove('show');
    });
  }

  // Exportar funções globais para os modais
  window.criarExplosao = criarExplosao;
});

// --------------------------------------------------------------------------
// 7. MODAL DE DEMONSTRAÇÃO DE PROJETOS
// --------------------------------------------------------------------------
function abrirDemoModal(titulo, descricao) {
  const modal = document.getElementById('demo-modal');
  const titleEl = document.getElementById('modal-project-title');
  const descEl = document.getElementById('modal-project-desc');

  if (modal && titleEl && descEl) {
    titleEl.textContent = titulo;
    descEl.textContent = descricao;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

    // Explosão suave na abertura da demo
    if (window.criarExplosao) {
      window.criarExplosao(window.innerWidth / 2, window.innerHeight / 2, 30);
    }
  }
}

function fecharDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
}

// Fechar modal ao clicar fora ou pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    fecharDemoModal();
  }
});

const modalBackdrop = document.getElementById('demo-modal');
if (modalBackdrop) {
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      fecharDemoModal();
    }
  });
}

