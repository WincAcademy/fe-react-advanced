import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([
    {
      quote:
        "My biggest fear is that people will attribute fake quotes to me and millions of morons on the internet will believe it.",
      name: "Albert Einstein",
    },
  ]);
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");

  const addQuote = (event) => {
    event.preventDefault();
    setQuotes((quotes) => [{ quote, name }, ...quotes]);
    setQuote("");
    setName("");
  };

  return (
    <div className="App">
      <h1>Add a Famous Quote</h1>
      <form onSubmit={addQuote}>
        <textarea
          onChange={(e) => setQuote(e.target.value)}
          value={quote}
          rows={4}
        />
        <input
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Add Quote</button>
      </form>
      <h1>Famous Quotes:</h1>
      {quotes.map((quote) => {
        return (
          <div className="quote" key={quote.quote}>
            <p>{quote.quote}</p>- <span>{quote.name}</span>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
