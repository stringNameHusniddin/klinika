import React from 'react'
import { TbClockFilled } from 'react-icons/tb'
import { TiLocation } from 'react-icons/ti'
import { FaPhoneAlt } from 'react-icons/fa'


interface openI {
    day: string
    time?: string
}

interface klinikaI {
    name: string
    location: string
    open: openI[]
    tel: string[]
    logo: string
    about: string
    smallAbout: string
}

const klinikaData: klinikaI[] = [
    {
        name: "Eurosun Healthcare",
        location: 'Toshkent sh., Shayxontoxur tumani, Alisher Navoiy 10-uy, mo`ljal “Trastbank” banki ro‘parasi.',
        open: [
            {
                day: 'Ду',
                time: "08:00 - 17:30"
            },
            {
                day: 'Се',
                time: "08:00 - 17:30"
            },
            {
                day: 'Чо',
                time: "08:00 - 17:30"
            },
            {
                day: 'Па',
                time: "08:00 - 17:30"
            },
            {
                day: 'Жу',
                time: "08:00 - 17:30"
            },
            {
                day: 'Ша',
                time: "08:00 - 17:30"
            },
            {
                day: 'Як',
            }
        ],
        tel: ['+99888 950-99-99', '+99878 777-09-99'],
        logo: 'https://www.klinika.uz/storage/member-avatars/8de36689-74e8-447f-ba8e-d19921747bf-125x115.jpg',
        about: '“EUROSUN HEALTHCARE” O‘zbekiston-Hindiston qo‘shma korxonasining tibbiyot markazi 2022-yil 1-apreldan tashrif buyuruvchilar uchun o‘z eshiklarini ochdi! Bizning klinikamiz barcha asosiy yo\'nalishlarda har qanday yoshdagi odamlarga yuqori malakali tibbiy yordam ko\'rsatadi: terapiya, pediatriya, ginekologiya, kardiologiya, urologiya, endokrinologiya, nevrologiya, oftalmologiya, otolaringologiya, ortopediya-travmatologiya, ultratovush, zamonaviy yuqori aniqlikdagi instrumental va laboratoriya tadqiqotlari, kunduzgi shifoxona.',
        smallAbout: "“EUROSUN HEALTHCARE” O‘zbekiston-Hindiston qo‘shma korxonasining tibbiyot markazi 2022-yil 1-apreldan tashrif buyuruvchilar uchun o‘z eshiklarini ochdi!"
    },
    // {
    //     name: "",
    //     location: '',
    //     open: [],
    //     tel: [],
    //     logo: '',
    //     about: ''
    // }
]

const KlinikaDetail = () => {
    return (
        <div className='flex items-center flex-col'>
            {
                klinikaData.map(mal => (
                    <>
                        <div className='w-7/12 border-2 border-[#d0c9d2] rounded-md bg-white flex items-start py-[30px] px-[15px] mb-[30px]'>
                            <div className='w-3/12'>
                                <img src={mal.logo} alt="" />
                            </div>
                            <div className='w-4/12'>
                                <p className='text-[#6c646e]' style={{ fontFamily: "Gotham Pro" }}>Тиббиёт маркази</p>
                                <p className='text-[#6c646e]' style={{ fontFamily: "Gotham Pro Bold" }}>{mal.name}</p>
                                <p className='text-[#6c646e] pt-[15px]' style={{ fontFamily: "Gotham Pro" }}>{mal.smallAbout}</p>
                            </div>
                            <div className='flex items-start flex-col'>
                                <div className='flex gap-[10px] text-[16px] pb-[20px]'>
                                    <TiLocation className='text-[#690f7f] text-[25px]' />
                                    <p className='text-[#6c646e]' style={{ fontFamily: "Gotham Pro" }}>{mal.location}</p>
                                </div>
                                <div className='flex gap-[10px] pb-[15px]'>
                                    <TbClockFilled className='text-[#690f7f] text-[16px]' />
                                    <ul>
                                        {mal.open.map(mal2 => (
                                            <li className='flex gap-[10px]' style={{ fontFamily: "Gotham Pro Bold" }}>
                                                <span className='text-[#6c646e]'>{mal2.day}</span>
                                                {mal2.time ? <p className='text-[#6c646e]' style={{ fontFamily: "Gotham Pro" }}>{mal2.time}</p> : null}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex gap-[10px] w-5/12'>
                                    <FaPhoneAlt className='text-[#690f7f] text-[16px]' />
                                    <div>
                                        {mal.tel.map(mal3 => <p className='text-[#6c646e]' style={{ fontFamily: "Gotham Pro Bold" }}>{mal3}</p>)}
                                    </div>
                                </div>
                                <button className='rounded-md my-[15px]  w-[250px] h-[45px] text-white text-[15px]'  style={{background:"linear-gradient(90deg,#6b1087 0,#3f279f)", fontFamily:"Gotham Pro Bold"}}>Қўнғироқ буюртма қилиш</button>
                                <button className='w-[150px] mb-[15px] h-[45px] bg-[#1292d3] rounded-md text-white'>Қабулга ёзилиш</button>
                            </div>
                        </div>
                        <div className='w-7/12 border-2 flex-col border-[#d0c9d2] rounded-md bg-white flex items-start p-[30px] mb-[80px]'>
                            <h1 className='text-[#690f7f] text-[16px] pb-[15px]' style={{ fontFamily: "Gotham Pro Bold" }}>КЛИНИКА ҲАҚИДА</h1>
                            {mal.about ? <p className='text-[#6c646e]' style={{ fontFamily: "Gotham Pro" }}>{mal.about}</p> : null}
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default KlinikaDetail