import Pages from "./Pages/Pages";
import Config from "./Config";
import "./style.css";
function App() {
  return (
    <>
      <Config />
      <div className="App container">
        <Pages />
      </div>
    </>
  );
}
export default App;
