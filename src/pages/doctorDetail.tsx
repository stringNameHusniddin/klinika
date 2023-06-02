import React from 'react'
import DoctorCard from '../components/doctorCard'
import DoctorDes from '../components/doctorDes'

export interface doctortI {
    img : string
    name : string
    klinika : string
    tel : string[]
    job : string
    language : string[]
    age : number
    study : string[]
    opit : string[]
}

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
]

const DoctorDetail = () => {
  return (
    <div>
        
        <DoctorCard doctors={doctors}/>
        <DoctorDes doctors={doctors}/>
    </div>
  )
}

export default DoctorDetail