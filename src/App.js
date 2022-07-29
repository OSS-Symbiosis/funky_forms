import Hero from './Hero';
import FormikForm from './formik';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/register/`} element={<div><Hero/><FormikForm /></div>} />
        <Route path='*' element={<div>[404] Page doesn't exist! Are you visiting the right link?</div>} />
      </Routes>
    </Router>
  );
}

export default App;