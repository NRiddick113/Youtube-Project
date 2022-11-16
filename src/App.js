import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About'
import Video from './Components/Video'
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/videos/:id" element={<Video />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;