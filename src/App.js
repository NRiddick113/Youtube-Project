import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About'
import Video from './Components/Video'
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [username, setUsername] = useState({
    username: '',
    password: ''
  })

  return (
    <div className="App">
      <Router>
        <NavBar 
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setOpenModal={setOpenModal}
          username={username}
        />
        <main>
          <Routes>
            <Route path="/" element={
              <Home 
                openModal={openModal}
                setOpenModal={setOpenModal}
                username={username}
                setUsername={setUsername}
                setLoggedIn={setLoggedIn}
              />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/video/:id" element={<Video />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;