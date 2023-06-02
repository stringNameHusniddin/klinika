import { Route, Routes } from 'react-router-dom'
import Links from './components/links';

import Navbar from './components/navbar';
import Post from './components/post';
import DoctorDetail from './pages/doctorDetail';
import Home from './pages/home';
import KlinikaDetail from './pages/klinikaDetail';

function App() {
  return (
    <div className="bg-[#fafafa] flex items-center justify-center flex-col app">
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<KlinikaDetail />} path='/klinikaDetail' />
        <Route element={<DoctorDetail/>} path='/doctorDetail'/>
      </Routes>
      <Links />
      <Post />
    </div>
  );
}

export default App;
