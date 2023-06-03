import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { doctortI } from '../pages/doctorDetail'

const DoctorCard = ({ doctors, info }: { doctors: doctortI[], info:string }) => {

    return (
        <>
            {
                doctors.map(mal => mal.klinika === info || mal.name === info ? (
                    <div className='w-[1000px] flex border-2 border-[#290333] rounded-md bg-white  items-start p-[40px] mb-[30px]'>
                        <div className='w-3/12'>
                            <img className='rounded-full' src={mal.img} alt="" />
                        </div>
                        <div className='w-4/12'>
                            <p className='text-[#6c646e] text-[14px] pb-[15px]' style={{ fontFamily: "Gotham Pro" }}>{mal.job}</p>
                            <Link onClick={()=>localStorage.setItem('doctor', mal.name)} to={'/doctorDetail'} className='w-[165px] text-[#690f7f] text-[20px]' style={{ fontFamily: "Gotham Pro Bold" }}>{mal.name}</Link>
                        </div>
                        <div className='w-5/12'>
                            <p className='text-[#6c646e] textr-[14px] font-[700] pb-[15px]'>{mal.klinika}</p>
                            <button className='w-full text-[12px] mb-[15px] h-[45px] uppercase bg-[#1292d3] rounded-md text-white' style={{ fontFamily: "Gotham Pro Bold" }}>Қабулга ёзилиш</button>
                            <p className='pb-[10px]'>Ёки телефон орқали ёзилиш</p>
                            <div className='flex gap-[10px] pb-[15px]'>
                                <FaPhoneAlt className='text-[#690f7f] text-[16px]' />
                                <div>
                                    {mal.tel.map(mal3 => <p className='text-[#6c646e]' style={{ fontFamily: "Gotham Pro Bold" }}>{mal3}</p>)}
                                </div>
                            </div>
                            <button className='h-[45px] text-[12px] border-[1px] border-[#690f7f] text-[#690f7f] px-[17px] rounded-md uppercase hover:bg-[#690f7f] hover:text-white' style={{ fontFamily: "Gotham Pro Bold" }}>Савол бериш</button>
                        </div>
                    </div>
                ):null)
            }
        </>
    )
}

export default DoctorCard