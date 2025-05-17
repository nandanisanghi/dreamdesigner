import React, { useState } from 'react';

const styles = [
  'Cyberpunk',
  'Baroque',
  'Anime',
  'Realistic',
  'Abstract',
];

const simulateArtGeneration = (text, style) => {
  // Simulate an AI art generation URL based on text and style
  return `https://source.unsplash.com/512x512/?${encodeURIComponent(style)},art,${encodeURIComponent(text)}`;
};

function App() {
  const [text, setText] = useState('');
  const [style, setStyle] = useState(styles[0]);
  const [imageUrl, setImageUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!text.trim()) {
      alert('Please enter some text to generate art.');
      return;
    }
    setIsGenerating(true);
    // Simulate API call delay
    setTimeout(() => {
      const url = simulateArtGeneration(text, style);
      setImageUrl(url);
      setIsGenerating(false);
    }, 1500);
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `art-${text}-${style}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMintNFT = () => {
    alert('Minting NFT feature is not implemented yet. This is a placeholder.');
  };

  return (
    <div style={{
      maxWidth: 700,
      margin: 'auto',
      padding: 20,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#1e1e2f',
      color: '#f0f0f5',
      borderRadius: 12,
      boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30, fontWeight: 'bold', fontSize: '2.5rem' }}>
        Text-to-Art Generator
      </h1>

      <div style={{ marginBottom: 20 }}>
        <label>
          <strong>Enter Text:</strong><br />
          <textarea
            rows={3}
            style={{
              width: '100%',
              padding: 12,
              borderRadius: 8,
              border: 'none',
              fontSize: '1rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              boxShadow: 'inset 0 0 8px rgba(255,255,255,0.1)',
              backgroundColor: '#2e2e44',
              color: '#f0f0f5'
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to generate art"
          />
        </label>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label>
          <strong>Select Style:</strong><br />
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            style={{
              width: '100%',
              padding: 12,
              borderRadius: 8,
              border: 'none',
              fontSize: '1rem',
              fontFamily: 'inherit',
              boxShadow: 'inset 0 0 8px rgba(255,255,255,0.1)',
              backgroundColor: '#2e2e44',
              color: '#f0f0f5',
              cursor: 'pointer'
            }}
          >
            {styles.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          style={{
            padding: '12px 24px',
            marginRight: 10,
            borderRadius: 8,
            border: 'none',
            backgroundColor: '#4caf50',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: isGenerating ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 12px rgba(76,175,80,0.6)',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={e => !isGenerating && (e.target.style.backgroundColor = '#45a049')}
          onMouseLeave={e => !isGenerating && (e.target.style.backgroundColor = '#4caf50')}
        >
          {isGenerating ? 'Generating...' : 'Generate Art'}
        </button>
        <button
          onClick={handleDownload}
          disabled={!imageUrl}
          style={{
            padding: '12px 24px',
            marginRight: 10,
            borderRadius: 8,
            border: 'none',
            backgroundColor: '#2196f3',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: imageUrl ? 'pointer' : 'not-allowed',
            boxShadow: '0 4px 12px rgba(33,150,243,0.6)',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={e => imageUrl && (e.target.style.backgroundColor = '#1976d2')}
          onMouseLeave={e => imageUrl && (e.target.style.backgroundColor = '#2196f3')}
        >
          Download Image
        </button>
        <button
          onClick={handleMintNFT}
          disabled={!imageUrl}
          style={{
            padding: '12px 24px',
            borderRadius: 8,
            border: 'none',
            backgroundColor: '#ff5722',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: imageUrl ? 'pointer' : 'not-allowed',
            boxShadow: '0 4px 12px rgba(255,87,34,0.6)',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={e => imageUrl && (e.target.style.backgroundColor = '#e64a19')}
          onMouseLeave={e => imageUrl && (e.target.style.backgroundColor = '#ff5722')}
        >
          Mint as NFT
        </button>
      </div>

      <div style={{
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 300,
        borderRadius: 12,
        backgroundColor: '#2e2e44',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
      }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Generated Art"
            style={{
              maxWidth: '100%',
              maxHeight: 512,
              borderRadius: 12,
              boxShadow: '0 0 20px rgba(255,255,255,0.7)',
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
        ) : (
          <p style={{ color: '#bbb', fontSize: '1.2rem' }}>No art generated yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
