'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
          <line x1="20" y1="230" x2="80" y2="230" stroke="currentColor" strokeWidth="4"/>

          {}
          <line x1="30" y1="230" x2="30" y2="20" stroke="currentColor" strokeWidth="4"/>

          {}
          <line x1="30" y1="20" x2="120" y2="20" stroke="currentColor" strokeWidth="4"/>

          {}
          <line x1="120" y1="20" x2="120" y2="45" stroke="currentColor" strokeWidth="3"/>

          {}
          {erros >= 1 && (
            <circle cx="120" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {erros >= 2 && (
            <line x1="120" y1="75" x2="120" y2="140" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {erros >= 3 && (
            <line x1="120" y1="90" x2="95" y2="115" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {erros >= 4 && (
            <line x1="120" y1="90" x2="145" y2="115" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {erros >= 5 && (
            <line x1="120" y1="140" x2="95" y2="170" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {erros >= 6 && (
            <line x1="120" y1="140" x2="145" y2="170" stroke="currentColor" strokeWidth="3"/>
          )}

          {}
          {jogoTerminado && !jogadorVenceu && (
            <>
              {}
              <line x1="113" y1="55" x2="118" y2="60" stroke="currentColor" strokeWidth="2"/>
              <line x1="118" y1="55" x2="113" y2="60" stroke="currentColor" strokeWidth="2"/>

              {}
              <line x1="122" y1="55" x2="127" y2="60" stroke="currentColor" strokeWidth="2"/>
              <line x1="127" y1="55" x2="122" y2="60" stroke="currentColor" strokeWidth="2"/>
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
      <p className="descricao-jogo">
        Jogo criado para demonstrar os conhecimentos de JavaScript do desenvolvedor do site
      </p>

      <div className="jogo-container">
        <div className="jogo-layout">
          <ForcaSVG />

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

export default function JogoPage() {
  return (
    <div>
      <header>
        <nav>
          <h1>
            <Link href="/">Meu Portfólio</Link>
          </h1>
          <ul>
            <li><Link href="/#hero">Início</Link></li>
            <li><Link href="/#about">Sobre</Link></li>
            <li><Link href="/#projects">Projetos</Link></li>
            <li><Link href="/jogo" className="active">Jogo</Link></li>
            <li><Link href="/#contact">Contato</Link></li>
          </ul>
        </nav>
      </header>

      <JogoDaForca />
    </div>
  );
}