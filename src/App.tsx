import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import Docs from './pages/docs/page'
import LearnPage from './pages/learn/page'
import PlaygroundPage from './pages/playground/page'
import AboutPage from './pages/about/page'
import NotFoundPage from './pages/not-found/page'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="brand">Meow Lang</NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/docs">Docs</NavLink>
          <NavLink to="/learn">Learn</NavLink>
          <NavLink to="/playground">Playground</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>Meow Lang · Minimal language for maximal clarity.</p>
      </footer>
    </div>
  )
}

export default App
