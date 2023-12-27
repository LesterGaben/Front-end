import './App.css';
import Task1 from './components/main-components/Task1';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/task1">Завдання 1</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/task1' element={<Task1 />}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
