import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { userI } from '../App'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

const Register = ({ setUser }: { setUser: React.Dispatch<React.SetStateAction<userI | undefined>> }) => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const navigate = useNavigate()

    const send = () => {
        axios.post('http://127.0.0.1:8000/api/user/', {
            username, password, email
        }).then(res1 => {
            axios.post('http://127.0.0.1:8000/api/token/', { username, password }).then(res => {
                localStorage.setItem('token', JSON.stringify(res.data))
                let user: any = jwtDecode(res.data.access)
                setUser({
                    username: user.name,
                    email: user.email,
                    id: user.user_id
                })
                navigate('/')
            }).catch(err => console.log(err))
        })
    }

    return (
        <div className='w-full flex flex-col items-center justify-center gap-[25px]' style={{ height: "85vh" }}>
            <h1 className='text-[30px] text-[#690f7f]' style={{ fontFamily: "Gotham Pro Bold" }}>Аъзо бўлиш</h1>
            <div className='border-[#e4e4e4] border-[2px] rounded-md flex h-[50px] items-center bg-white text-[#8b8b8b] px-[15px] gap-[15px] w-[870px]'>
                <FaUser />
                <input onChange={e => setUsername(e.target.value)} className='w-11/12 focus:outline-none' type="text" placeholder='Фойдаланувчи номи' />
            </div>
            <div className='border-[#e4e4e4] border-[2px] rounded-md flex h-[50px] items-center bg-white text-[#8b8b8b] px-[15px] gap-[15px] w-[870px]'>
                <MdEmail />
                <input onChange={e => setEmail(e.target.value)} className='w-11/12 focus:outline-none' type="email" placeholder='Фойдаланувчи емейли' />
            </div>
            <div className='border-[#e4e4e4] border-[2px] rounded-md flex h-[50px] items-center bg-white text-[#8b8b8b] px-[15px] gap-[15px] w-[870px]'>
                <FaLock />
                <input onChange={e => setPassword(e.target.value)} className='w-11/12 focus:outline-none' type="password" placeholder='Паролни киритинг' />
            </div>
            <button onClick={send} className='rounded-md my-[15px]  w-[250px] h-[45px] text-white text-[15px]' style={{ background: "linear-gradient(90deg,#6b1087 0,#3f279f)", fontFamily: "Gotham Pro Bold" }}>Жўнатиш</button>
            <Link to={'/login'} className='text-[#2479c8] text-[16px] border-dashed border-[#2479c8] border-b-[1px]' style={{ fontFamily: "Gotham Pro Bold" }}>Кириш</Link>
        </div>
    )
}

export default Register