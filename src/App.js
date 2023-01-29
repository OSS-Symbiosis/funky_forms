import Hero from './Hero';
import TechTalkForm from './components/TechTalk';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import JoinUs from './components/JoinUs/JoinUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/form/techtalk/`} element={<div><Hero /><TechTalkForm /></div>} />
        <Route path={`/form/joinus/`} element={<div><JoinUs /></div>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;