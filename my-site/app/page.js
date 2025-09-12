'use client';
import { useState, useEffect } from 'react';

function JogoDaForca() {
  const palavras = [
    'ABACATE', 'ABACAXI', 'ACEROLA', 'AMEIXA', 'BANANA', 'CAQUI', 'CARAMBOLA',
    'GOIABA', 'GRAVIOLA', 'LIMAO', 'MAMAO', 'MANGA', 'MARACUJA', 'MELANCIA',
    'MELAO', 'MEXERICA', 'MORANGO', 'PESSEGO', 'SAPOTI', 'SERIGUELA',
    'TAMARINDO', 'TANGERINA', 'ABOBORA', 'CENOURA', 'MANDIOCA', 'PIMENTAO',
    'TOMATE', 'ALFACE', 'ESPINAFRE', 'CEBOLA'
  ];

  const [palavraAtual, setPalavraAtual] = useState('');
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(6);
  const [inputLetra, setInputLetra] = useState('');
  const [jogoTerminado, setJogoTerminado] = useState(false);
  const [jogadorVenceu, setJogadorVenceu] = useState(false);

  const iniciarNovoJogo = () => {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraAtual(palavraAleatoria);
    setLetrasAdivinhadas([]);
    setLetrasErradas([]);
    setTentativasRestantes(6);
    setInputLetra('');
    setJogoTerminado(false);
    setJogadorVenceu(false);
  };

  const tentarLetra = () => {
    if (!inputLetra || inputLetra.length !== 1 || jogoTerminado) return;

    const letra = inputLetra.toUpperCase();

    if (letrasAdivinhadas.includes(letra) || letrasErradas.includes(letra)) {
      alert('Você já tentou essa letra!');
      setInputLetra('');
      return;
    }

    if (palavraAtual.includes(letra)) {
      setLetrasAdivinhadas([...letrasAdivinhadas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativasRestantes(tentativasRestantes - 1);
    }

    setInputLetra('');
  };

  const exibirPalavra = () => {
    return palavraAtual
      .split('')
      .map(letra => letrasAdivinhadas.includes(letra) ? letra : '_')
      .join(' ');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      tentarLetra();
    }
  };

  const ForcaSVG = () => {
    const erros = letrasErradas.length;

    return (
      <div className="forca-container">
        <svg width="200" height="250" viewBox="0 0 200 250" className="forca-svg">
          {}
          <line x1="10" y1="230" x2="100" y2="230" stroke="currentColor" strokeWidth="4"/>

          {}
          <line x1="30" y1="230" x2="30" y2="20" stroke="currentColor" strokeWidth="4"/>

          {}
          <line x1="30" y1="20" x2="120" y2="20" stroke="currentColor" strokeWidth="4"/>

          {}
          <line x1="120" y1="20" x2="120" y2="45" stroke="currentColor" strokeWidth="3"/>

          {}

          {}
          {erros >= 1 && (
            <circle cx="120" cy="55" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {erros >= 2 && (
            <line x1="120" y1="67" x2="120" y2="120" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {erros >= 3 && (
            <line x1="120" y1="80" x2="95" y2="100" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {erros >= 4 && (
            <line x1="120" y1="80" x2="145" y2="100" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {erros >= 5 && (
            <line x1="120" y1="120" x2="95" y2="150" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {erros >= 6 && (
            <line x1="120" y1="120" x2="145" y2="150" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {jogoTerminado && !jogadorVenceu && (
            <>
              <line x1="115" y1="50" x2="118" y2="53" stroke="currentColor" strokeWidth="2"/>
              <line x1="118" y1="50" x2="115" y2="53" stroke="currentColor" strokeWidth="2"/>
              <line x1="122" y1="50" x2="125" y2="53" stroke="currentColor" strokeWidth="2"/>
              <line x1="125" y1="50" x2="122" y2="53" stroke="currentColor" strokeWidth="2"/>
            </>
          )}
        </svg>
      </div>
    );
  };

  useEffect(() => {
    if (palavraAtual) {
      const palavraCompleta = palavraAtual.split('').every(letra => 
        letrasAdivinhadas.includes(letra)
      );

      if (palavraCompleta) {
        setJogadorVenceu(true);
        setJogoTerminado(true);
      }

      if (tentativasRestantes === 0) {
        setJogadorVenceu(false);
        setJogoTerminado(true);
      }
    }
  }, [letrasAdivinhadas, tentativasRestantes, palavraAtual]);

  useEffect(() => {
    iniciarNovoJogo();
  }, []);

  return (
    <div className="jogo-forca">
      <h3>🎮 Jogo da Forca</h3>

      <div className="jogo-container">
        {}
        <div className="jogo-layout">
          {}
          <ForcaSVG />

          {}
          <div className="jogo-info">
            <div className="palavra-display">
              <h4>Palavra:</h4>
              <span className="palavra-texto">{exibirPalavra()}</span>
            </div>

            <div className="info-jogo">
              <p><strong>Tentativas restantes:</strong> {tentativasRestantes}</p>
              {letrasErradas.length > 0 && (
                <p><strong>Erradas:</strong> {letrasErradas.join(', ')}</p>
              )}
            </div>

            {(letrasAdivinhadas.length > 0 || letrasErradas.length > 0) && (
              <div className="letras-tentadas">
                <strong>Letras tentadas:</strong>
                <div className="letras-grupo">
                  {letrasAdivinhadas.length > 0 && (
                    <div className="letras-corretas">
                      <span className="label">✅ Corretas:</span> {letrasAdivinhadas.join(', ')}
                    </div>
                  )}
                  {letrasErradas.length > 0 && (
                    <div className="letras-erradas">
                      <span className="label">❌ Erradas:</span> {letrasErradas.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {}
        {!jogoTerminado && (
          <div className="input-container">
            <input
              type="text"
              value={inputLetra}
              onChange={(e) => setInputLetra(e.target.value.replace(/[^a-zA-Z]/g, ''))}
              onKeyPress={handleKeyPress}
              maxLength={1}
              placeholder="Digite uma letra"
              className="letra-input"
            />
            <button onClick={tentarLetra} className="btn-tentar">
              Tentar
            </button>
          </div>
        )}

        {}
        {jogoTerminado && (
          <div className={`mensagem ${jogadorVenceu ? 'vitoria' : 'derrota'}`}>
            {jogadorVenceu ? (
              <div>
                <h3>🎉 Parabéns! Você venceu!</h3>
                <p>A palavra era: <strong>{palavraAtual}</strong></p>
              </div>
            ) : (
              <div>
                <h3>💀 Que pena! Você perdeu!</h3>
                <p>A palavra era: <strong>{palavraAtual}</strong></p>
              </div>
            )}
          </div>
        )}

        <button onClick={iniciarNovoJogo} className="btn-reiniciar">
          🔄 Novo Jogo
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <h1>Meu Portfólio</h1>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#game">Jogo</a></li>
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

      <section id="game">
        <h2>Jogo</h2>
        <JogoDaForca />
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