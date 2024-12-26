import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CodeAntAIComponent from './components/CodeAntAIComponent'
import Repository from './components/RepositoriesPage';
import RepositoriesPage from './components/RepositoriesPage';

function App() {

  return (
   <div>
    <Router>
      <Routes>
      <Route path="/" element={<CodeAntAIComponent />} />
      <Route path="/repository" element={<RepositoriesPage />} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
