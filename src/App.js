import './App.css';
import Home from './home.js'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
