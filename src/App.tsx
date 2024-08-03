import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/geo-quest-logo.png"}
          className="Travel Bingo"
          alt="Travel Bingo"
        />
      </header>
    </div>
  );
}

export default App;
