"use client";

import { useEffect, useState, useRef } from "react";
import "../globals.css";

export default function XixiECocoPage() {
  const [timer, setTimer] = useState("00:59:59");
  const [showDownsell, setShowDownsell] = useState(false);
  const reviewTrackRef = useRef(null);

  // Timer countdown
  useEffect(() => {
    let timeLeft = 3599; // 59m 59s
    const interval = setInterval(() => {
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(interval);
        return;
      }
      const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
      const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
      const s = (timeLeft % 60).toString().padStart(2, '0');
      setTimer(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Today Date
  const todayDate = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  // Carousel navigation helper
  const scrollTrack = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 340;
      ref.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // FAQ Toggle Logic
  const handleFaqToggle = (e) => {
    const questionBtn = e.currentTarget;
    const answerDiv = questionBtn.nextElementSibling;
    
    questionBtn.classList.toggle("active");
    if (answerDiv.style.display === "block") {
      answerDiv.style.display = "none";
    } else {
      answerDiv.style.display = "block";
    }
  };

  // Exit intent popup
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 0 && !showDownsell) {
        setShowDownsell(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [showDownsell]);

  // Back redirect UTMify mimic
  useEffect(() => {
    window.history.pushState({}, '', window.location.href);
    window.history.pushState({}, '', window.location.href);
    
    const handlePopState = () => {
      setShowDownsell(true);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
      {/* URGENCY BAR */}
      <div className="urgency-bar">
        Oferta válida até <span id="today-date">{todayDate}</span> - <span className="urgency-timer" id="timer">{timer}</span>
      </div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">ADESTRA FÁCIL</div>
          <h1>Cansado de Xixi e Cocô Fora do Lugar?</h1>

          <img src="/capas/pagina-1.webp" alt="Mockup Guia Xixi e Cocô" className="hero-mockup" />
          
          <p className="hero-subheadline">Descubra o passo a passo prático e infalível para ensinar o seu cão a acertar o xixi e o cocô em até 14 dias — sem brigas, sem punições e em apenas 15 minutos por dia. Para TODOS os cachorros.</p>
          
          <a href="#planos" className="hero-cta">QUERO AGORA</a>
          
          <div className="trust-badges">
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
            <span className="secure-text">🔒 100% Compra Segura</span>
          </div>
        </div>
      </section>

      <div className="main-column">

        {/* THE TRANSFORMATION (3 PASSOS) */}
        <section className="transformation-section reveal active">
          <h2 className="section-title">A Transformação em 3 Passos</h2>
          <p className="section-subtitle">O método foi desenhado para quem não tem tempo a perder e quer resultados rápidos usando apenas reforço positivo.</p>
          
          <div className="transformation-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">🧼</div>
              <h3>Limpeza Correta</h3>
              <p>Elimine o cheiro residual invisível que funciona como um "ímã" para o cão voltar ao local errado.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">🎯</div>
              <h3>Espaço Controlado</h3>
              <p>O segredo de restrição temporária que induz o cão a escolher o tapete higiênico naturalmente.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">🥩</div>
              <h3>Recompensa Exata</h3>
              <p>Como usar o petisco no segundo exato do acerto para fixar o comportamento na mente do cão.</p>
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ VAI RECEBER */}
        <section className="features-section reveal active">
          <h2 className="section-title">O Que Tem Dentro do Guia?</h2>
          
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
              </div>
              <h3>Módulo 1: Fundamentos Anti-Sujeira</h3>
            </div>
            <ul className="feature-bullets">
              <li>Por que esfregar o focinho destrói o aprendizado.</li>
              <li>A psicologia canina da marcação de território.</li>
              <li>Diferença entre xixi por ansiedade e necessidade.</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h3>Módulo 2: O Cronograma de 14 Dias</h3>
            </div>
            <ul className="feature-bullets">
              <li>A rotina passo a passo: acordar, comer e banheiro.</li>
              <li>Como restringir o espaço de forma inteligente.</li>
              <li>Guia de transição para liberar a casa inteira.</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
              </div>
              <h3>Módulo 3: Casos Difíceis e Soluções</h3>
            </div>
            <ul className="feature-bullets">
              <li>Adestrando cães adultos teimosos (3+ anos).</li>
              <li>O que fazer quando ele dorme no tapete higiênico.</li>
              <li>Receita do limpador enzimático caseiro.</li>
            </ul>
          </div>
        </section>

        {/* SOBRE NÓS */}
        <section className="sobre-nos-section reveal active" style={{padding: "10px 0 60px 0"}}>
          <h2 className="section-title" style={{textAlign: "center", marginBottom: "8px"}}>Sobre Nós</h2>
          <div className="container" style={{maxWidth: "800px", margin: "0 auto", textAlign: "center", color: "var(--text-main)", fontSize: "16px", lineHeight: "1.6"}}>
            <p style={{marginBottom: "24px", padding: "0 20px"}}>
              A Adestra Fácil nasceu da experiência de nossos profissionais que vivem o comportamento canino todos os dias. Reunimos o que funciona de verdade e transformamos em um método simples, que qualquer tutor consegue aplicar em casa, sem gritos, sem punição e sem precisar contratar ninguém.
            </p>
          </div>
          <div className="trainers-carousel">
            <img src="/adestradores/dog-trainer-with-happy-dog-202607151939.webp" alt="Adestrador" className="trainer-img" />
            <img src="/adestradores/place-logo-on-woman-s-t-shirt-202607151939.webp" alt="Adestrador" className="trainer-img" />
            <img src="/adestradores/dog-trainer-with-happy-dog-202607151939-2.webp" alt="Adestrador" className="trainer-img" />
            <img src="/adestradores/dog-trainer-with-happy-dog-202607151939-3.webp" alt="Adestrador" className="trainer-img" />
            <img src="/adestradores/dog-trainer-with-puppy-park-202607151939.webp" alt="Adestrador" className="trainer-img" />
            <img src="/adestradores/dog-trainer-with-small-dog-202607151939.webp" alt="Adestrador" className="trainer-img" />
            <img src="/adestradores/place-logo-onto-t-shirt-202607151939.webp" alt="Adestrador" className="trainer-img" />
            <img src="/adestradores/place-logo-on-t-shirt-202607151939.webp" alt="Adestrador" className="trainer-img" />
          </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "16px", padding: "0 20px", color: "var(--gray-700)", fontSize: "0.95rem", fontWeight: "500", textAlign: "center"}}>
            <svg style={{color: "#10b981", flexShrink: 0}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            É prática validada por quem entende do assunto.
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section className="social-proof-section reveal active">
          <h2 className="section-title" style={{textAlign: "center", marginBottom: "8px"}}>O Que os Nossos Alunos Estão Falando</h2>
          <div className="social-proof-stars" style={{textAlign: "center", marginBottom: "30px"}}>
            <span className="stars-icon">★★★★★</span> <span className="rating-text" style={{color: "var(--gray-800)"}}>4.9/5</span>
            <p style={{color: "var(--gray-600)", marginTop: "4px", fontSize: "14px"}}>Recomendado por 1,200+ tutores de cães</p>
          </div>
          <div className="carousel-container">
            <div className="prova-container-wrapper marquee-wrapper" id="reviewWrapper" ref={reviewTrackRef}>
              <div className="marquee-track" id="reviewTrack">
                
                {/* DEPOIMENTO 1 */}
                <div className="prova-card-html">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p className="quote">"Eu já não aguentava mais limpar o tapete da sala. Em apenas 5 dias aplicando a regra do espaço delimitado, a Belinha passou a procurar o tapete higiênico sozinha!"</p>
                  <div className="author-info">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Mariana Silva" className="author-img" style={{backgroundColor: '#e2e8f0'}} />
                    <div className="author-text">
                      <span className="author-name">Mariana Silva</span>
                      <span className="author-city">Tutora de Shih Tzu</span>
                    </div>
                  </div>
                </div>

                {/* DEPOIMENTO 2 */}
                <div className="prova-card-html">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p className="quote">"Sempre achei que esfregar o focinho e brigar era o certo. Esse guia me mostrou que eu estava criando trauma no Max. Mudei a tática pro reforço positivo e ele aprendeu na mesma semana."</p>
                  <div className="author-info">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Roberto Gomes" className="author-img" style={{backgroundColor: '#e2e8f0'}} />
                    <div className="author-text">
                      <span className="author-name">Roberto Gomes</span>
                      <span className="author-city">Tutor de Golden Retriever</span>
                    </div>
                  </div>
                </div>

                {/* DEPOIMENTO 3 */}
                <div className="prova-card-html">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p className="quote">"O melhor investimento que fiz pelo meu cãozinho. A rotina de 14 dias tirou toda a bagunça do nosso apartamento. Recomendo para qualquer dono de filhote!"</p>
                  <div className="author-info">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Clara Souza" className="author-img" style={{backgroundColor: '#e2e8f0'}} />
                    <div className="author-text">
                      <span className="author-name">Clara Souza</span>
                      <span className="author-city">Tutora de Border Collie</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="carousel-nav-buttons">
              <button className="carousel-arrow left" onClick={() => scrollTrack(reviewTrackRef, "prev")}>❮</button>
              <button className="carousel-arrow right" onClick={() => scrollTrack(reviewTrackRef, "next")}>❯</button>
            </div>
          </div>
        </section>

        {/* BONUS EXCLUSIVOS */}
        <section className="bonus-section reveal active">
          <h2 className="section-title" style={{textAlign: "center"}}>🎁 Bônus Exclusivos</h2>
          <div className="bonus-container">
            <div className="bonus-header">
              <p>VALOR TOTAL DOS BÔNUS: <span className="val">R$ 137,00</span> · HOJE: <span className="free">GRÁTIS</span></p>
            </div>
            
            <div className="bonus-grid">
              
              <div className="bonus-card">
                <img src="/capas/sil-ncio-e-calma.webp" alt="Bonus 1" className="bonus-img" />
                <div className="bonus-card-content">
                  <h3>🎁 Bônus #1: Guia Silêncio em Casa (Latidos + Choro)</h3>
                  <p className="bonus-price">Valor: <span>R$ 19,90</span> | Hoje: <strong>GRÁTIS</strong></p>
                  <ul className="bonus-list">
                    <li>Controle latidos excessivos por tédio ou campainha.</li>
                    <li>Como lidar com a ansiedade de separação.</li>
                  </ul>
                </div>
              </div>

              <div className="bonus-card">
                <img src="/capas/passeio-tranquilo.webp" alt="Bonus 2" className="bonus-img" />
                <div className="bonus-card-content">
                  <h3>🎁 Bônus #2: O Passeio Perfeito (Sem Puxar)</h3>
                  <p className="bonus-price">Valor: <span>R$ 27,90</span> | Hoje: <strong>GRÁTIS</strong></p>
                  <ul className="bonus-list">
                    <li>Acabe com os puxões e a reatividade na coleira.</li>
                    <li>Torne a caminhada prazerosa para você e seu cão.</li>
                  </ul>
                </div>
              </div>

              <div className="bonus-card">
                <img src="/capas/dicion-rio-canino.webp" alt="Bonus 3" className="bonus-img" />
                <div className="bonus-card-content">
                  <h3>🎁 Bônus #3: Dicionário Canino de Comunicação</h3>
                  <p className="bonus-price">Valor: <span>R$ 34,90</span> | Hoje: <strong>GRÁTIS</strong></p>
                  <ul className="bonus-list">
                    <li>Entenda o que as posturas do seu cão significam.</li>
                    <li>Identifique níveis de estresse e apaziguamento.</li>
                  </ul>
                </div>
              </div>

              <div className="bonus-card">
                <img src="/capas/socializa--o.webp" alt="Bonus 4" className="bonus-img" />
                <div className="bonus-card-content">
                  <h3>🎁 Bônus #4: Guia de Socialização Perfeita</h3>
                  <p className="bonus-price">Valor: <span>R$ 39,90</span> | Hoje: <strong>GRÁTIS</strong></p>
                  <ul className="bonus-list">
                    <li>Acostume seu cão com visitas e crianças sem estresse.</li>
                    <li>Elimine a agressividade e o medo de outros cães.</li>
                  </ul>
                </div>
              </div>

            </div>
            
            <div className="bonus-total">
              VALOR TOTAL DOS BÔNUS: <span>R$ 122,60</span> · TUDO GRÁTIS HOJE
            </div>
          </div>
        </section>

        {/* PLANOS (PRICING DUAL TIER) */}
        <section className="pricing-section reveal active" id="planos">
          <h2 className="section-title" style={{textAlign: "center"}}>Escolha o Seu Plano</h2>
          
          <div className="pricing-grid">
            
            {/* Basic Pack */}
            <div className="plan-card">
              <img src="/capas/b-sico-16-9.webp" alt="Guia do Xixi e Cocô" className="plan-img-16x9" />
              <div className="plan-card-body">
                <div className="plan-name">Guia do Xixi e Cocô</div>
                <div className="plan-price"><sup>R$</sup>17,90</div>
                <p className="plan-installments">Pagamento único</p>
                <ul className="plan-features">
                  <li>O Guia Principal "O Fim da Sujeira"</li>
                  <li>Método passo a passo de 14 dias</li>
                  <li className="denied">Sem o Guia de Latidos</li>
                  <li className="denied">Sem o Guia de Passeio</li>
                  <li className="denied">Sem o Dicionário Canino</li>
                  <li className="denied">Sem os Bônus Premium de hoje</li>
                </ul>
                <a href="#" className="plan-cta basic" id="btnStarter">QUERO APENAS O BÁSICO</a>
              </div>
            </div>

            {/* Ultimate Pack */}
            <div className="plan-card featured">
              <img src="/capas/completo-16-9.webp" alt="Guia do Adestramento Completo" className="plan-img-16x9" />
              <div className="plan-card-body">
                <div className="plan-name">Guia do Adestramento Completo</div>
                <div className="plan-old-price">Valor Total: R$ 159,90</div>
                <div className="plan-price"><sup>R$</sup>32,90</div>
                <p className="plan-installments">Pagamento único</p>
                <div className="plan-social">Mais de 85% dos tutores escolhem essa opção!</div>
                <ul className="plan-features">
                  <li><strong>O Guia Principal "O Fim da Sujeira" - <span style={{color: '#d4af37', fontWeight: 'bold'}}>PREMIUM</span></strong></li>
                  <li><strong>Guia: Silêncio em Casa</strong></li>
                  <li><strong>Guia: O Passeio Perfeito</strong></li>
                  <li><strong>Dicionário Canino de Comunicação</strong></li>
                  <li><strong>Guia de Socialização Perfeita</strong></li>
                  <li><strong>TODOS os Bônus Premium - <span style={{color: '#16a34a'}}>GRÁTIS</span></strong></li>
                </ul>
                <a href="#" className="plan-cta premium">QUERO O PACOTE COMPLETO</a>
              </div>
            </div>

          </div>
          
          {/* FAST CHECKS */}
          <div className="fast-checks reveal active" style={{display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap", marginTop: "40px", color: "var(--gray-700)", fontSize: "0.95rem", fontWeight: "500"}}>
            <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
              <svg style={{color: "#10b981"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Apenas 15 minutos por dia
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
              <svg style={{color: "#10b981"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Sem equipamentos caros
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
              <svg style={{color: "#10b981"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Resultados visíveis em 14 dias
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="guarantee-section reveal active">
          <img src="/garantia.webp" alt="Garantia de 7 Dias" style={{width: "180px", margin: "0 auto 16px", display: "block"}} />
          <h2>RISCO ZERO</h2>
          <p>Você tem <strong>7 dias</strong> para testar tudo na sua casa. Se você não gostar, devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas e sem burocracia.</p>
        </section>

        {/* FAQ */}
        <section className="faq-section reveal active">
          <h2 className="section-title" style={{textAlign: "center"}}>Perguntas Frequentes</h2>
          <div className="faq">
            
            <div className="faq-item">
              <button className="faq-question" onClick={handleFaqToggle}>Como vou receber o acesso aos guias?</button>
              <div className="faq-answer">
                <p>O envio é 100% imediato e digital. Assim que seu pagamento for processado pela plataforma, você receberá um e-mail contendo os links diretos para baixar todos os PDFs no seu celular, tablet ou computador.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={handleFaqToggle}>O método funciona com cães adultos ou teimosos?</button>
              <div className="faq-answer">
                <p>Sim. Embora filhotes retenham as orientações muito mais rápido, a indução por reforço positivo atua na reprogramação de hábitos de cães de qualquer idade. O livro detalha técnicas específicas para cães teimosos.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={handleFaqToggle}>Importa a raça do meu cachorro?</button>
              <div className="faq-answer">
                <p>De forma alguma! O método é baseado em psicologia canina universal e funciona para absolutamente todas as raças — desde um pequeno Chihuahua até um imponente Rottweiler, além dos amados cães sem raça definida (vira-latas).</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={handleFaqToggle}>Preciso de petiscos ou ferramentas caras?</button>
              <div className="faq-answer">
                <p>Não. Ensinamos você a usar motivadores que você já tem em casa (como pedaços de legumes seguros ou grãos da própria ração do cão) e objetos simples. Nada de coleiras de choque ou apitos caros.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={handleFaqToggle}>Existe alguma mensalidade ou taxa extra?</button>
              <div className="faq-answer">
                <p>Não. Trata-se de um pagamento único. Você compra uma vez e tem acesso perpétuo aos guias e a todas as futuras atualizações de graça.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={handleFaqToggle}>Como funciona a garantia de devolução?</button>
              <div className="faq-answer">
                <p>Nós confiamos tanto no nosso material que te damos 7 dias para testar tudo. Se o seu cão não melhorar ou você se arrepender, basta nos enviar um único e-mail solicitando o reembolso integral.</p>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* DOWNSELL POPUP */}
      {showDownsell && (
        <div className="downsell-overlay" style={{display: "flex"}}>
          <div className="downsell-box">
            <button className="downsell-close" onClick={() => setShowDownsell(false)}>&times;</button>
            <div className="downsell-alert-icon" style={{fontSize: '40px'}}>⚠️</div>
            <h2>Espere! Tem certeza?</h2>
            <p style={{marginBottom: "10px"}}>Com o Plano Básico você NÃO recebe os guias extras de Latidos, Passeios e o Dicionário Canino, e perde todos os bônus adicionais de adestramento.</p>
            
            <div className="popup-offer-box">
              <div className="popup-title" style={{fontWeight: "bold", fontSize: "16px"}}>Última Chance: Pacote Ultimate</div>
              <div className="popup-old-price">R$ 32,90</div>
              <div className="popup-new-price">R$ 24,90</div>
              <div className="popup-desc" style={{fontSize: "12px", marginTop: "4px"}}>Pagamento único · Acesso Total Inclusivo</div>
            </div>
            
            <a href="#" className="plan-cta premium" style={{marginBottom: "12px", width: "100%", display: "block"}}>QUERO O ULTIMATE POR APENAS R$ 24,90</a>
            <a href="#" className="downsell-skip-link" onClick={() => setShowDownsell(false)}>Não, obrigado. Eu quero apenas o plano básico por R$ 17,90.</a>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <p>&copy; 2026 Adestra Fácil. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
