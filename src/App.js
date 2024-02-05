import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Adminpanel from './components/adminpanel';
// import View from './components/view';
import Accepted from './components/accepted';
import Manage from './components/manage';
import Requireddetail from './components/requireddetail';
import Completed from './components/completed';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Adminpanel />} />
          {/* <Route path="view" element={<View />} /> */}
          <Route path="/accepted" element={<Accepted />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/requireddetail" element={<Requireddetail />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
