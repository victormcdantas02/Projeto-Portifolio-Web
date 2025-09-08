export default function Home() {
  return (
    <div>
      {/* Header/Navegação */}
      <header>
        <nav>
          <h1>Meu Portfólio</h1>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Seção Principal */}
      <section id="hero">
        <h1>Olá, meu nome é Victor</h1>
        <p>Boas vindas ao meu portfólio!</p>
      </section>

      {/* Sobre */}
      <section id="about">
        <h2>Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Atualmente tenho 23 anos, sou de Teresina-PI, curso Ciência da Computação desde 2022 e gosto de várias coisas e falar sobre elas</p>
            <p>Gosto muito de filmes, jogos, quadrinhos e animações. Tenho sonho de conhecer diferentes países e ajudar pessoas. Profissionalmente estou aberto a qualquer tipo de experiência.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact">
        <h2>Contato</h2>
        <div className="contact-links">
          <div className="contact-item">
            <span>📧</span>
            <a href="mailto:victormcdantas@gmail.com">victormcdantas@gmail.com</a>
          </div>
          <div className="contact-item">
            <span>💼</span>
            <a href="https://www.linkedin.com/in/victormcdantas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <span>🐱</span>
            <a href="https://github.com/victormcdantas02" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
}