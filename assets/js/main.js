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

  // 3.2 Modal de Pagos (PayPal & Banco Santander)
  function openPaymentModal(serviceType = 'Sesión de Hipnosis Terapéutica') {
    const paymentHtml = `
      <div class="payment-modal-wrapper">
        <div class="payment-modal-header">
          <span class="section-tag" style="margin-bottom: 0.5rem; display: inline-block;">Reserva y Confirmación</span>
          <h3 class="payment-modal-title">Métodos de Pago Disponibles</h3>
          <p class="payment-modal-sub">Valor de la sesión: <strong>US$50.-</strong> (o equivalente en moneda local)</p>
        </div>

        <div class="payment-methods-grid">
          <!-- Tarjeta 1: PayPal y Tarjetas Internacionales -->
          <div class="payment-card">
            <div>
              <span class="payment-card-badge badge-paypal">🌐 Internacional / Tarjetas</span>
              <h4 class="payment-card-title">PayPal / Tarjeta</h4>
              <div class="payment-card-amount">US$ 50.00</div>
              <p style="font-size: 0.875rem; color: #64748b; margin-bottom: 1.25rem; line-height: 1.5;">
                Paga de forma inmediata y protegida usando tu saldo PayPal o cualquier tarjeta de crédito o débito internacional.
              </p>
            </div>
            <div>
              <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=carloslarraguibelf%40hotmail.com&item_name=${encodeURIComponent(serviceType)}&amount=50.00&currency_code=USD" 
                 target="_blank" 
                 rel="noopener" 
                 class="btn btn-paypal" 
                 style="width: 100%; text-align: center; justify-content: center; display: flex; align-items: center; gap: 0.5rem; text-decoration: none; padding: 0.85rem 1rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .77-.655h7.625c3.705 0 6.137 1.776 5.677 5.15-.362 2.656-2.19 4.195-4.78 4.195h-2.52a.855.855 0 0 0-.845.72l-.995 6.207h-.001zm14.398-13.41c-.48 3.518-2.923 5.485-6.388 5.485h-2.22a.965.965 0 0 0-.954.814l-1.07 6.677a.641.641 0 0 1-.633.541H5.786a.428.428 0 0 1-.422-.494l.226-1.417.842-5.26.04-.216a.855.855 0 0 1 .845-.72h2.52c2.59 0 4.418-1.539 4.78-4.195.46-3.374-1.972-5.15-5.677-5.15H6.383a.78.78 0 0 0-.77.655L3.71 18.067a.428.428 0 0 0 .422.494h3.693l1.173-7.32a.965.965 0 0 1 .954-.814h2.22c3.465 0 5.908-1.967 6.388-5.485.426-3.13-1.636-4.942-5.06-4.942H6.94a.5.5 0 0 0-.494.422L6.15 2.11a.78.78 0 0 1 .77-.655h5.58c3.424 0 5.486 1.812 5.06 4.942l3.914 1.53z"/></svg>
                Pagar US$50 con PayPal
              </a>
            </div>
          </div>

          <!-- Tarjeta 2: Transferencia Bancaria (Chile) -->
          <div class="payment-card">
            <div>
              <span class="payment-card-badge badge-chile">🇨🇱 Chile / Transferencia</span>
              <h4 class="payment-card-title">Banco Santander Chile</h4>
              <div class="payment-card-amount">Transferencia Bancaria</div>
              <div class="payment-bank-details" id="bankDetailsBox">
                <p><strong>Banco:</strong> Banco Santander Chile</p>
                <p><strong>Tipo de Cuenta:</strong> Cuenta Corriente</p>
                <p><strong>N° de Cuenta:</strong> 0047182-8</p>
                <p><strong>Nombre:</strong> Carlos Larraguibel Fuentes</p>
                <p><strong>RUT:</strong> 11.508.426-7</p>
                <p><strong>Email:</strong> carloslarraguibelf@gmail.com</p>
              </div>
            </div>
            <div>
              <button type="button" class="btn btn-copy" id="btnCopyBank">
                📋 Copiar Datos Bancarios
              </button>
              <a href="https://wa.me/56993438325?text=${encodeURIComponent('Hola Carlos, he realizado la transferencia para mi sesión de hipnosis (' + serviceType + '). Adjunto mi comprobante:')}" 
                 target="_blank" 
                 rel="noopener" 
                 class="btn btn-whatsapp" 
                 style="width: 100%; text-align: center; justify-content: center; font-size: 0.9rem; padding: 0.75rem 1rem;">
                <span>💬</span> Enviar Comprobante por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div class="payment-footer-note">
          <p>💬 ¿Prefieres coordinar fecha y hora antes de pagar? <a href="https://wa.me/56993438325?text=${encodeURIComponent('Hola Carlos, quisiera consultar disponibilidad de horarios para una ' + serviceType + '.')}" target="_blank" rel="noopener" style="color: var(--color-accent); font-weight: 600; text-decoration: underline;">Escríbeme directamente por WhatsApp</a>.</p>
        </div>
      </div>
    `;

    openModal(paymentHtml);

    // Event listener para el botón de copiar datos bancarios
    const copyBtn = document.getElementById('btnCopyBank');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const textToCopy = `Banco: Banco Santander Chile\nTipo de Cuenta: Cuenta Corriente\nN° de Cuenta: 0047182-8\nNombre: Carlos Larraguibel Fuentes\nRUT: 11.508.426-7\nEmail: carloslarraguibelf@gmail.com`;

        const copySuccess = () => {
          const originalText = copyBtn.innerHTML;
          copyBtn.innerHTML = '✅ ¡Datos Copiados al Portapapeles!';
          copyBtn.style.background = '#dcfce7';
          copyBtn.style.borderColor = '#86efac';
          copyBtn.style.color = '#15803d';
          copyBtn.style.fontWeight = '700';
          setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
            copyBtn.style.borderColor = '';
            copyBtn.style.color = '';
            copyBtn.style.fontWeight = '';
          }, 2500);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(copySuccess).catch(() => {
            fallbackCopy(textToCopy);
            copySuccess();
          });
        } else {
          fallbackCopy(textToCopy);
          copySuccess();
        }
      });
    }

    function fallbackCopy(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textarea);
    }
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
