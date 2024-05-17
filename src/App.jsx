import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(`-${data.author}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <button id="new-quote" onClick={getQuote}>New Quote</button>
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' ' + author)}`} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
    </div>
  );
}

export default App;
