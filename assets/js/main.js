// ==========================================================================
// HIPNOSIS PARA DESPERTAR - Interactividad y Funcionalidad
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú Móvil
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      mobileBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Cerrar menú móvil al hacer click en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Acordeón de Preguntas Frecuentes
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Cerrar todos los demás
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });

        // Toggle actual
        item.classList.toggle('active', !isActive);
      });
    }
  });

  // 3. Modal Lightbox (Diplomas y Artículos)
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openModal(htmlContent) {
    if (modalBody && modalBackdrop) {
      modalBody.innerHTML = htmlContent;
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
      if (modalBody) modalBody.innerHTML = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Click en diplomas para vista previa ampliada
  const diplomaCards = document.querySelectorAll('.diploma-card');
  diplomaCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('h4')?.innerText || 'Certificación';
      const desc = card.querySelector('p')?.innerText || '';
      
      openModal(`
        <div style="text-align: center;">
          <h3 style="margin-bottom: 0.5rem; font-size: 1.4rem; color: #0f2438;">${title}</h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem;">${desc}</p>
          <img src="${img.src}" alt="${title}" style="max-width: 100%; max-height: 70vh; margin: 0 auto; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.15);" />
        </div>
      `);
    });
  });

  // Contenido de los artículos para el modal
  const articlesData = {
    espiritualidad: {
      title: "Hipnosis y Espiritualidad: El viaje hacia la autoconsciencia",
      author: "Carlos Larraguibel F. • Hipnoterapeuta Certificado",
      content: `
        <p>Muchas personas descubren que la hipnosis puede ayudarlos a acceder a un sentido más profundo de conciencia y conectarse con su yo interior en un nivel más profundo. Mediante el poder de la sugestión y la meditación guiada, la hipnosis puede facilitar una mejor comprensión del lugar que uno ocupa en el mundo y cómo se relaciona con las personas y las circunstancias que lo rodean.</p>
        <p>Es como un viaje de expansión de la mente que le permite ver las cosas desde una nueva perspectiva y comprender mejor sus propias creencias y valores.</p>
        <h4 style="margin: 1.5rem 0 0.75rem 0; color: #0f2438;">Uniendo Hipnosis y Espiritualidad</h4>
        <p>Al proporcionar acceso directo a la mente subconsciente, las personas pueden descubrir sus propios patrones mentales y su programación interna. A través de la hipnosis, uno puede profundizar en su psique interna y descubrir la raíz de sus luchas psicológicas, allanando el camino para una vida más plena.</p>
        <p>Ambas prácticas implican introspección, autoconciencia y crecimiento personal. La hipnosis nos ayuda a aprovechar nuestra mente subconsciente para abordar nuestros miedos y creencias inconscientes, mientras que la espiritualidad implica conectarnos con nuestro sentido de propósito trascendente en la vida.</p>
        <h4 style="margin: 1.5rem 0 0.75rem 0; color: #0f2438;">Conclusión</h4>
        <p>La hipnosis y la terapia de regresión son herramientas poderosas para descubrir lo que hay más allá de la conciencia ordinaria, ayudando a superar traumas pasados o comprender los misterios de la propia mente con serenidad y confianza.</p>
      `
    },
    transpersonal: {
      title: "La interconexión de la Psicología Transpersonal y la Hipnoterapia",
      author: "Carlos Larraguibel F. • Hipnoterapeuta Certificado",
      content: `
        <p>La psicología transpersonal y la hipnoterapia son dos disciplinas que buscan la exploración y el entendimiento de los estados de conciencia no ordinarios para lograr el bienestar mental y emocional de las personas. Ambas se enfocan en la conexión del individuo con algo más allá de lo puramente material y físico, permitiendo una perspectiva más amplia y profunda de la existencia.</p>
        <h4 style="margin: 1.5rem 0 0.75rem 0; color: #0f2438;">La Psicología Transpersonal</h4>
        <p>Se enfoca en la exploración de la conciencia y su relación con el bienestar y la autorrealización. Esta disciplina se basa en la idea de que la persona no se limita a su identidad personal y su historia superficial de vida, sino que es también parte de una realidad trascendental y espiritual más amplia. Busca la conexión con el ser esencial y el sentido de unidad.</p>
        <h4 style="margin: 1.5rem 0 0.75rem 0; color: #0f2438;">El Rol de la Hipnoterapia</h4>
        <p>La hipnoterapia utiliza técnicas de relajación profunda y enfoque guiado para acceder a estados de conciencia donde el sujeto puede consultar sus propios recursos internos para sanar y resolver conflictos. Se utiliza eficazmente para tratar ansiedad, depresión, fobias, dolor crónico y problemas del sueño, trabajando a nivel subconsciente para transformar patrones limitantes.</p>
        <p>Al trabajar en conjunto, la hipnoterapia y la psicología transpersonal permiten superar bloqueos profundos y encontrar un propósito de vida renovado y en paz.</p>
      `
    }
  };

  const articleButtons = document.querySelectorAll('[data-article]');
  articleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const articleKey = btn.getAttribute('data-article');
      const article = articlesData[articleKey];
      if (article) {
        openModal(`
          <article style="line-height: 1.8; color: #334155;">
            <div style="margin-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
              <span style="display: inline-block; font-size: 0.8rem; font-weight: 700; color: #0d9488; text-transform: uppercase; margin-bottom: 0.4rem;">Lectura Terapéutica</span>
              <h2 style="font-size: 1.65rem; color: #0f2438; margin-bottom: 0.5rem;">${article.title}</h2>
              <small style="color: #64748b;">${article.author}</small>
            </div>
            <div style="font-size: 1.05rem;">
              ${article.content}
            </div>
            <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0; text-align: center;">
              <a href="https://wa.me/56993438325?text=Hola%20Carlos,%20leí%20tu%20artículo%20sobre%20${encodeURIComponent(article.title)}%20y%20me%20gustaría%20consultar%20por%20una%20sesión." target="_blank" rel="noopener" class="btn btn-whatsapp" style="display: inline-flex;">
                Consultar por Terapia con Carlos
              </a>
            </div>
          </article>
        `);
      }
    });
  });

  // 3.2 Modal de Pago Internacional (Lemon Squeezy - Stripe)
  const LEMON_SQUEEZY_CHECKOUT_URL = 'https://hipnosisparadespertar.lemonsqueezy.com/checkout/buy/99336eab-afb1-4500-9313-6e63c4d47165';

  function openPaymentModal(serviceType = 'Sesión Online de Hipnosis') {
    const paymentHtml = `
      <div class="payment-modal-wrapper">
        <div class="payment-modal-header">
          <span class="section-tag" style="margin-bottom: 0.5rem; display: inline-block;">🌍 Pacientes en el Extranjero</span>
          <h3 class="payment-modal-title">Pago Seguro con Tarjeta</h3>
          <p class="payment-modal-sub">Checkout internacional procesado con tecnología Stripe vía Lemon Squeezy</p>
        </div>

        <div class="payment-lemon-box">
          <span class="badge-lemon">🔒 Checkout Directo y Seguro</span>
          
          <div class="payment-price-row">
            <div>
              <div class="payment-price-label">${serviceType}</div>
              <small style="color: #64748b;">Videollamada 1 a 1 (1 hora y 15 minutos aprox.)</small>
            </div>
            <div class="payment-price-tag">US$ 50.00</div>
          </div>

          <ul class="payment-features-list">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Acepta tarjetas de crédito y débito internacionales (Visa, Mastercard, AMEX).</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Compatible con pagos rápidos mediante Apple Pay y Google Pay.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><strong>Sin necesidad de crear cuentas:</strong> Pagas directo como invitado.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Encriptación bancaria SSL de 256 bits y respaldo oficial de Stripe.</span>
            </li>
          </ul>

          <a href="${LEMON_SQUEEZY_CHECKOUT_URL}" 
             target="_blank" 
             rel="noopener" 
             class="btn btn-lemonsqueezy"
             id="btnLemonSqueezyCheckout">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            🔒 Ir al Pago Seguro (US$50)
          </a>

          <div class="payment-chile-box">
            <h5>🇨🇱 ¿Estás en Chile?</h5>
            <p>
              Para pacientes en Chile, la reserva y los datos de transferencia bancaria se entregan directamente por WhatsApp de forma personalizada.
            </p>
            <a href="https://wa.me/56993438325?text=${encodeURIComponent('Hola Carlos, quisiera coordinar mi sesión online desde Chile y los datos para transferir.')}" 
               target="_blank" 
               rel="noopener" 
               class="btn btn-whatsapp" 
               style="display: inline-flex; justify-content: center; width: 100%; font-size: 0.9rem;">
              <span>💬</span> Coordinar por WhatsApp (Chile)
            </a>
          </div>
        </div>

        <div class="payment-footer-note">
          <p>💬 ¿Tienes dudas sobre horarios o la sesión antes de pagar? <a href="https://wa.me/56993438325?text=${encodeURIComponent('Hola Carlos, quisiera consultar disponibilidad antes de realizar el pago.')}" target="_blank" rel="noopener" style="color: var(--color-accent); font-weight: 600; text-decoration: underline;">Conversa directamente conmigo por WhatsApp</a>.</p>
        </div>
      </div>
    `;

    openModal(paymentHtml);
  }

  // Activar botones que abren el modal de pagos
  const openPaymentButtons = document.querySelectorAll('.open-payment-btn');
  openPaymentButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service') || 'Sesión de Hipnosis Terapéutica';
      openPaymentModal(serviceName);
    });
  });

  // 4. Formulario de Contacto interactivo
  const contactForm = document.getElementById('appointmentForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const modality = document.getElementById('formModality').value;
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !phone) {
        alert('Por favor completa tu nombre y teléfono.');
        return;
      }

      const text = `Hola Carlos, mi nombre es ${name}.\n` +
                   `Estoy interesado/a en una sesión ${modality}.\n` +
                   `Mi teléfono de contacto es: ${phone}.\n` +
                   (message ? `Motivo de consulta: ${message}` : '');

      const whatsappUrl = `https://wa.me/56993438325?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
});
