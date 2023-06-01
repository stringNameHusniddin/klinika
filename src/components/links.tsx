import { useState } from 'react'

interface linksI {
    name: string
}

const klinika: linksI[] = [{
    name: 'MED-LINE SERVIS',
}, {
    name: 'Даниел Ҳилл Медикал',
}, {
    name: 'Osiyo tibbiyot markazi',
}, {
    name: 'iMedClinic',
}, {
    name: 'Дармон шифо маскани',
}, {
    name: 'HasMed Clinics',
}, {
    name: 'Allergo Life',
},]

const mutaxasisilik: linksI[] = [{
    name: "Акушерлик"
}, {
    name: "Аллергология"
}, {
    name: "Ангиография"
}, {
    name: "Андрология"
}, {
    name: "Анестезиология"
}, {
    name: "Вакцинация"
}, {
    name: "Венерология"
},{
    name:'Гастроэнтерология'
},{
    name:"Гематология"
},{
    name:'Гепатология'
},{
    name:"Гинекология"
}]

const Links = () => {

    const [isKlinika, setIsKlinika] = useState<boolean>(true)
    let btnStyleActive: string = 'border-[#690f7f] border-b-[2px] text-[#690f7f] text-[16px] w-6/12 uppercase'
    let btnStylePassive:string = btnStyleActive + ' opacity-[.5]'

    return (
        <div className='w-[1200px] mb-[80px]'>
            <div className='w-full'>
                <button onClick={() => setIsKlinika(true)} className={isKlinika ? btnStyleActive : btnStylePassive} style={{ fontFamily: "Gotham Pro Bold" }}>Клиникалар</button>
                <button onClick={() => setIsKlinika(false)} className={isKlinika !== true ? btnStyleActive : btnStylePassive} style={{ fontFamily: "Gotham Pro Bold" }}>Мутахассислик</button>
            </div>
            <div className='flex w-full flex-wrap p-[30px]'>
                {
                    isKlinika ? klinika.map(mal => <p className='text-[#337ab7] cursor-pointer w-4/12 px-[15px]'>{mal.name}</p>) : mutaxasisilik.map(mal => <p className='text-[#337ab7] cursor-pointer w-4/12 px-[15px]'>{mal.name}</p>)
                }
            </div>
        </div>
    )
}

export default Links