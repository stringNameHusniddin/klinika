import React from 'react'

interface cardDataI {
    title?: string
    body?: string
    date?: string
    name?: string
    url: string
}

const data: cardDataI[] = [{
    title: "Бариатрия ҳақида ўйлаётган, лекин ҳали ҳам қўрқаётганлар учун!",
    body: " Анар Намазов ва унинг 3 йил олдин бариатрик жарроҳлик амалиётини ўтказган бемори.",
    date: "02.12.2022",
    name: "Урологик комплекс",
    url: "https://www.klinika.uz/storage/bef3b0da-fb7a-42f5-aa1b-e6b47f09ea05.jpg"
}, {
    title: "Yurak kasalliklarini tashxislash uchun qanday tekshiruv usullari samarali?",
    body: "Alomatlari sekin asta hayot sifatiga ta'sir ko'satmagunicha, yashirin tarzda kechadigan bir necha yurak kasalliklari mav...",
    date: "02.11.2022",
    name: "Акфа Медлайн",
    url: "https://www.klinika.uz/storage/2e5267bb-e323-40f1-b2e1-145ce31e2563.jpg"
}, {
    title: "Болалар пневмонияга чалинмаслиги учун нима қилиш керак?",
    body: "Ота-оналар болалари пневмония, бронх-ўпка касалликларининг олдини олишга эътибор қаратишлари керак.",
    date: "03.11.2021",
    url: "https://www.klinika.uz/storage/8b79a461-e797-4a0e-8927-2b440fe13975.jpg"
}, {
    title: "B 6, B12 витаминларининг хавфли жихатлари аниқланди.",
    body: "Америкалик шифокорлар B 6, B12 витаминлари ва ўпка саратони хавфининг ортиши ўртасидаги боғлиқликни топдилар,",
    date: "22.10.2021",
    url: "https://www.klinika.uz/storage/057588d9-d99e-4855-9516-50aa6e97ec47.jpg"
}, {
    title: "Koronavirusning og‘ir kechish sabablari ma’lum qilindi",
    body: "Shu bilan birga, virusdan keyingi sindromning davomiyligi yoshga bog‘liq: 60 yoshgacha tuzalib ketganlarda o‘rtacha ikki...",
    date: "07.10.2021",
    url: "https://www.klinika.uz/storage/6f1d9a83-cb3b-4024-81c3-5b10c0372d90.jpg"
}, {
    title: "Nega jig‘ildon qaynaydi?",
    body: "Jig‘ildon qaynashi aksariyat yoshi katta kishilarda uchraydigan holatlardan biridir.",
    date: "29.07.2021",
    url: "https://www.klinika.uz/storage/99b8b8e9-587f-401b-ae0a-f04d1dd5c4a8.jpg"
},]

const Card = () => {
    return (
        <div className='flex w-[1200px] flex-wrap mb-[80px]'>
            {
                data.map(mal => (
                    <div className='px-[15px] w-4/12 h-[380px] relative rounded-md mb-[15px]'>
                        <div className='w-full h-[380px] relative rounded-md' style={{ backgroundImage: `url(${mal.url})`, backgroundSize: 'cover', backgroundPosition: "50%" }}>
                            <div className='w-full h-full absolute top-0 left-0 rounded-b-md' style={{ backgroundImage: 'url(https://www.klinika.uz/images/purple_bg.png)', backgroundSize: 'cover', backgroundPosition: "50%" }}></div>
                            <div className='p-[30px] absolute left-0 bottom-0'>
                                {
                                    mal.title ? <p className='text-white text-[20px] text-["Gotham Pro Bold"] py-[10px]' style={{ fontFamily: 'Gotham Pro Bold' }}>
                                        {mal.title}
                                    </p> : null
                                }

                                {
                                    mal.date ? <div className='bg-[#2479c8] min-w-[85px] max-w-[90px] flex items-center justify-center h-[28px] text-[14px] text-white rounded-sm'>
                                        <p style={{ fontFamily: 'Gotham Pro Light' }}>{mal.date}</p>
                                    </div> : null
                                }

                                {
                                    mal.body ? <p className='text-white text-[14px]' style={{ fontFamily: 'Gotham Pro Light' }}>
                                        {mal.body}
                                    </p> : null
                                }
                                {
                                    mal.name ? <p className='opacity-[.5] text-white text-[14px] pt-[5px]' style={{ fontFamily: 'Gotham Pro Bold' }}>{mal.name}</p> : null
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card