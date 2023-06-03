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



const DoctorDetail = ({doctors}:{doctors:doctortI[]}) => {

  const doctor = localStorage.getItem('doctor')

  return (
    <div>
        <DoctorCard doctors={doctors} info={doctor || ''}/>
        <DoctorDes doctors={doctors}/>
    </div>
  )
}

export default DoctorDetail