import Home from './components/Home';
import "./App.css"
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  )
}

export default App