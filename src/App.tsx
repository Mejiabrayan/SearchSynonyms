import { useState } from 'react'
import "./App.css";

type Synonym = {
  word: string
  score: number
}

function App() {

  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

  const fetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then(response => response.json())
      .then(setSynonyms);

  }

  return (
    <div className="App">
<div className="head-section">
  <h1>Search for Synonyms!</h1>
</div>

      <form onSubmit={fetchSynonyms}>
        <label>Words {' '}</label>
        <input
          onChange={(e) => setWord(e.target.value)}
          value={word}
          id='input'
        />
        <button>Submit</button>
      </form>
      <ul>
        {synonyms.map(synonym => (
          <li key={synonym.word}>
            {synonym.word}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
