import React from 'react';
import Home from './home';
import About from './about';
import Projects from './projects';
import Blog from './blog';
import Contact from './contact';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h1 className="main-header">Portfolio-website</h1>
        {<ul>
          <li>
            <Link to="/"><h3>Home</h3></Link>
          </li>
          <li>
            <Link to="/about"><h3>About</h3></Link>
          </li>
          <li>
            <Link to="/projects"><h3>Projects</h3></Link>
          </li>
          <li>
            <Link to="/blog"><h3>Blog</h3></Link>
          </li>
          <li>
            <Link to="/contact"><h3>Contact</h3></Link>
          </li>

        </ul>}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
