import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Aurora Background Effects */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
      </div>

      <div className="container hero-container">
        {/* Text Content */}
        <div className="hero-text-side scroll-reveal">
          <div className="welcome-badge">
            <span className="dot"></span>
            مرحباً، أنا عزام
          </div>
          <h1 className="hero-title">
            مطور واجهات <br />
            <span className="en-text text-gradient">Full Stack</span>
          </h1>
          <p className="hero-subtitle">
            أقوم بتحويل أفكارك إلى مواقع ويب رائعة وتطبيقات مذهلة تلبي احتياجاتك
            وتفوق توقعاتك.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary magnetic-btn">
              استعرض أعمالي <i className="fas fa-arrow-left" style={{marginRight: '8px'}}></i>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/azam-al-safani-77b0412a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="http://wa.me/967781560010"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Visual Content: Floating Dev Card */}
        <div className="hero-visual-side scroll-reveal" style={{transitionDelay: '0.2s'}}>
          <div className="dev-card glass-panel floating">
            <div className="dev-card-header">
              <div className="mac-dots">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <div className="dev-card-title en-text">portfolio.jsx</div>
            </div>
            <div className="dev-card-body en-text">
              <pre>
                <code className="code-line"><span className="keyword">const</span> <span className="variable">developer</span> = <span className="string">"Azam Al-Safani"</span>;</code>
                <code className="code-line"><span className="keyword">const</span> <span className="variable">skills</span> = [<span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"UI/UX"</span>];</code>
                <code className="code-line"> </code>
                <code className="code-line"><span className="keyword">function</span> <span className="function">buildMasterpiece</span>() {"{"}</code>
                <code className="code-line indent-1"><span className="keyword">return</span> (</code>
                <code className="code-line indent-2">&lt;<span className="tag">Success</span> <span className="prop">drivenBy</span>=<span className="string">"Passion"</span> /&gt;</code>
                <code className="code-line indent-1">);</code>
                <code className="code-line">{"}"}</code>
              </pre>
            </div>
          </div>
          
          {/* Decorative Glowing Rings behind the card */}
          <div className="deco-ring ring-1"></div>
          <div className="deco-ring ring-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
