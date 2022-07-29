import Hero from './Hero';
import FormikForm from './formik';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/register/`} element={<div><Hero/><FormikForm /></div>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;