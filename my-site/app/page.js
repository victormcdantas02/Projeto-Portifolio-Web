export default function Home() {
  return (
    <div>
      
      <header>
        <nav>
          <h1>Meu Portfólio</h1>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      
      <section id="hero">
        <h1>Boas vindas ao meu portfólio!</h1>
        <p>Me chamo Victor Dantas</p>
      </section>

      
     <section id="about">
        <h2>Sobre Mim</h2>
        <div className="about-content">
          <div className="about-photo">
       <img src="./victor.jpg" alt="Victor Dantas" />
      </div>
      <div className="about-text">
        <p>Atualmente tenho 23 anos, sou de Teresina-PI, curso Ciência da Computação desde 2022 e gosto de várias coisas e falar sobre elas</p>
        <p>Gosto muito de filmes, jogos, quadrinhos e animações. Tenho sonho de conhecer diferentes países e ajudar pessoas. Profissionalmente estou aberto a qualquer tipo de experiência.</p>
          </div>
        </div>
  </section>

      <section id="projects">
        <h2>Projetos</h2>
        <div className="projects-grid">
          <div className="project-card">
        <h3>Projeto Estrutura de Dados</h3>
          <p className="project-description">
          Trabalho que consiste em uma aplicação que utiliza listas encadeadas 
          para gerenciar um sistema que engloba uma clínica médica, eventos e um restaurante, 
          armazenando os dados atribuídos ao longo do programa.
      </p>
      <div className="project-links">
         <a href="https://github.com/victormcdantas02/Projeto-ED1" target="_blank" rel="noopener noreferrer">Ver Código</a>
      </div>
    </div>
    
    <div className="project-card">
      <h3>Projeto Banco de Dados</h3>
      <p className="project-description">
        Projeto acadêmico de banco de dados simulando um parque de diversões 
        com gerenciamento de visitantes, brinquedos e vendas de ingressos.
      </p>
      <div className="project-links">
      <a href="https://github.com/victormcdantas02/Projeto-Banco" target="_blank" rel="noopener noreferrer">Ver Código</a>
      </div>
    </div>
  </div>
</section>

      <section id="contact">
        <h2>Meus contatos</h2>
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