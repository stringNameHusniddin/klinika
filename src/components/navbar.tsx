import { useState } from 'react'
import { FaUnlock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className='flex items-center justify-between w-[1200px] h-[90px] mb-[30px]'>
            <Link to={'/'}>
                <img src="https://www.klinika.uz/images/logo_purple.png" alt="" />
            </Link>
            <div className='flex items-center gap-[15px]'>
                <button className='text-[16px] flex items-center gap-[4px] text-[#690f7f]' style={{ fontFamily: "Gotham Pro" }}><FaUnlock className='text-[14px]' /> Кириш</button>
                <button onClick={()=>setOpen(true)} className='w-[24px] btn flex flex-col items-end'>
                    <span className='my-[2px] h-[2px] bg-[#690f7f] w-7/12 block'></span>
                    <span className='my-[2px] h-[2px] bg-[#690f7f] w-full block'></span>
                    <span className='my-[2px] h-[2px] bg-[#690f7f] w-full block'></span>
                </button>
            </div>
            {
                open ? <>
                    <div className='fixed z-[999] w-[320px] cursor-pointer top-0 right-0 bg-[#33023d] text-white pt-[50px]' style={{ height: '100vh', fontFamily: "Gotham Pro" }}>
                        <div onClick={()=>setOpen(false)} className='absolute right-8 top-2 text-[24px] font-bold'>
                            <div className='rotate-[-20deg] absolute'>\</div>
                            <div className='rotate-[20deg] absolute'>/</div>
                        </div>
                        <p className='pl-[30px] h-[50px]'>Менинг Кабинетим</p>
                        <p className='pl-[30px] h-[50px]'>Касалликлар</p>
                        <p className='pl-[30px] h-[50px]'>Ҳамма клиника ва шифокорлар</p>
                        <p className='pl-[30px] h-[50px]'>Шифокорлар мутахассисликлар бўйича</p>
                        <p className='pl-[30px] h-[50px]'>Клиникалар мутахассисликлар бўйича</p>
                    </div>
                    <div onClick={()=>setOpen(false)} className='bg-[rgba(0,0,0,.5)] top-0 left-0 z-[998] fixed' style={{ width: '100vw', height: '100vh' }}></div>
                </>:null
            }
        </div>
    )
}

export default Navbar