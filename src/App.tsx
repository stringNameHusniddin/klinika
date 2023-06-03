import { Route, Routes } from 'react-router-dom'
import Links from './components/links';

import Navbar from './components/navbar';
import Post from './components/post';
import DoctorDetail, { doctortI } from './pages/doctorDetail';
import Home from './pages/home';
import KlinikaDetail from './pages/klinikaDetail';

const doctors : doctortI[] = [
  {
      img:"https://www.klinika.uz/storage/member-avatars/77c2a420-1c90-4c5a-9e03-ffe7c7c0dcc-125x115.jpg",
      study:['2002-2008гг. — Ташкентский Государственный Медицинский Институт.', '2008-2010гг. — клиническая ординатура на кафедре эндокринологии, Ташкентский Институт Усовершенствование Врачей.'],
      opit:['Стаж врачебный — 15 лет.', 'Стаж врача эндокринолога — 9 лет.', 'До 2016г. главный эндокринолог Алмазарского', 'С 2016г. по 2017г. главный эндокринолог Бектемирского района.'],
      name:"Исмаилова Гузаль Маъсудбековна",
      job:'Эндокринолог',
      klinika:'Eurosun Healthcare',
      tel:['+99888 950-99-99', '+99878 777-09-99'],
      age:18,
      language:['Ўзбек тили,', 'Рус тили']
  },
  {
    img:"https://www.klinika.uz/storage/member-avatars/1af63066-ed01-47bf-98cb-cc45c532460-125x115.jpg",
    study:['2002-2008гг. — Ташкентский Государственный Медицинский Институт.', '2008-2010гг. — клиническая ординатура на кафедре эндокринологии, Ташкентский Институт Усовершенствование Врачей.'],
    opit:['Стаж врачебный — 15 лет.', 'Стаж врача эндокринолога — 9 лет.', 'До 2016г. главный эндокринолог Алмазарского', 'С 2016г. по 2017г. главный эндокринолог Бектемирского района.'],
    name:"Ташпулатов Амиржон Акрамович",
    job:'Эндокринолог',
    klinika:'MED-LINE SERVIS',
    tel:['+99888 950-99-99', '+99878 777-09-99'],
    age:18,
    language:['Ўзбек тили,', 'Рус тили']
},
]

function App() {
  return (
    <div className="bg-[#fafafa] flex items-center justify-center flex-col app">
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<KlinikaDetail doctors={doctors}/>} path='/klinikaDetail' />
        <Route element={<DoctorDetail doctors={doctors}/>} path='/doctorDetail'/>
      </Routes>
    </div>
  );
}

export default App;
