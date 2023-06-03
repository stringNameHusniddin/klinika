import { useState } from 'react'
import { Link } from 'react-router-dom'

interface postI {
    name: string
    docName: string
    date: string
    body: string
}

const postData: postI[] = [
    {
        name: "Мухаимад али",
        docName: "Исмаилова Гузаль Маъсудбековна",
        date: "16.04.2023",
        body: "Пешонада иссикликга ухшаб тошма тошиб кетган Лекин иссиклик емас Тошма бир ой олдин 5, 6 та чикиб Шу билан купайиб кетди Хозир пешонани тулик икки е'ни билан тошма коплаб олди Йузни икки тарафида хам тошма йук Пешонани икки е'ни билан коплаган"
    },
    {
        name: "Nataliadip",
        docName: "Ташпулатов Амиржон Акрамович",
        date: "18.04.2023",
        body: "Соглашусь с автором, действительно я сама столкнулась с рядом заболеваний, бесмысленная трата денег на обследование, обратилась к доктору жукову, он внимательно изучил всё, сделала полное обследование сразу, и видно было через неделю как общее состояние улучшилось, поэтому здесь больше всего зависит от человека кто вас обследует, очень много врачей которые не хотят вникать в ваши болячки"
    },
]

const Post = () => {

    const [slice, setSlice] = useState<number>(180)

    return (
        <div className='w-[1200px] border-[#d4d1d5] border-2 rounded-md p-[30px] bg-white mb-[80px]'>
            <h2 className='text-[#690f7f] text-[18px] uppercase pb-[15px]' style={{ fontFamily: 'Gotham Pro Bold' }}>Отзывы пациентов о врачах, клиниках и медицинских центрах</h2>
            <div className='w-full flex flex-wrap'>
                {
                    postData.map(mal => (
                        <div className='w-6/12 px-[15px] min-h-[290px] ' >
                            <div className='px-[30px] text-[16px]' style={{ boxShadow: "0 1px 5px 2px hsla(0,0%,8%,.1)" }}>
                                <div className='flex w-full justify-between items-center' style={{ fontFamily: 'Gotham Pro Bold' }}>
                                    <p className='text-[#690f7f] py-[15px]'>{mal.name}</p>
                                    <p className='text-[#6c646e]'>{mal.date}</p>
                                </div>
                                <Link onClick={()=>localStorage.setItem('doctor', mal.docName)} to={'/doctorDetail'} className='text-[#337ab7] cursor-pointer' style={{ fontFamily: 'Gotham Pro', }}>{mal.docName}</Link>
                                <div className='border-y-[1px] border-[#f0f0f0] p-[22px]'>
                                    <p className='text-[#6c646e]' style={{ fontFamily: 'Gotham Pro' }}>{mal.body}</p>
                                </div>
                                <button className='px-[40px] h-[40px] bg-[#1292d3] rounded-md my-[10px] text-white text-[18px]' style={{ fontFamily: "Gotham Pro Light" }}>Батафсил</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Post