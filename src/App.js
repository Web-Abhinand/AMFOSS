import './App.css';
import Home from './home.js'
import Webdevelopment from './web-development';
import Flutter from './flutter';
import Traboda from './traboda';
import Arduino from './arduino';
import Codeit from './codeit';
import Malware from './malware';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/web-development" element={<Webdevelopment/>} />
      <Route  path="/flutter" element={<Flutter/>} />
      <Route  path="/traboda" element={<Traboda/>} />
      <Route  path="/arduino" element={<Arduino/>} />
      <Route  path="/code-it-in-your-way" element={<Codeit/>} />
      <Route  path="/malware" element={<Malware/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
