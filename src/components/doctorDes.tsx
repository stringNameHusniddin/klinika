import React from 'react'
import { doctortI } from '../pages/doctorDetail'

const DoctorDes = ({ doctors }: { doctors: doctortI[] }) => {
    return (
        <>
            {
                doctors.map(mal => (
                    <div className='w-[1000px] flex flex-col rounded-md bg-white  items-start p-[40px] mb-[30px]' style={{ boxShadow: '0 2px 5px 5px rgba(0,0,0,.1)' }}>
                        <h2 className='text-[#690f7f] text-[30px]' style={{ fontFamily: "Gotham Pro Bold" }}>Квалификация ва тажриба</h2>
                        <div className='flex justify-between w-full border-b-[1px] py-[15px] text-[#6c646e] text-[18px]' style={{fontFamily:'Gotham Pro Light'}}>
                            <p className='text-[#6c646e] text-[18px] w-4/12 ' style={{ fontFamily: "Gotham Pro Bold" }}>Шифокорнинг мулоқот тили</p>
                            <div className='w-8/12 flex text-start'>
                                {mal.language.map(mal2 => (
                                    <p>{mal2}</p>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-between w-full border-b-[1px] py-[15px] text-[#6c646e] text-[18px]' style={{fontFamily:'Gotham Pro Light'}}>
                            <p className='text-[#6c646e] text-[18px] w-4/12' style={{ fontFamily: "Gotham Pro Bold" }}>Иш тажрибаси</p>
                            <p className='w-8/12'>{mal.age}</p>
                        </div>
                        <div className='flex justify-between w-full border-b-[1px] py-[15px] text-[#6c646e] text-[18px]' style={{fontFamily:'Gotham Pro Light'}}>
                            <p className='text-[#6c646e] text-[18px] w-4/12' style={{ fontFamily: "Gotham Pro Bold" }}>Маълумоти</p>
                            <div className='flex flex-col w-8/12'>
                                <div className='mb-[15px]'>
                                    <p className='mb-[15px]' style={{fontFamily:'Gotham Pro Bold'}}>Ta'lim</p>
                                    {mal.study.map(mal2 => (
                                        <p>{mal2}</p>
                                    ))}
                                </div>
                                <div className='mb-[15px]'>
                                    <p className='mb-[15px]' style={{fontFamily:'Gotham Pro Bold'}}>Opit</p>
                                    {mal.opit.map(mal2 => (
                                        <p>{mal2}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default DoctorDes