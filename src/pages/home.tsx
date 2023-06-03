import React from 'react'
import Card from '../components/card'
import Links from '../components/links'
import Post from '../components/post'



const Home = () => {
    return (
        <div>
            <h1 className='text-[#690f7f] text-[30px] pb-[30px] px-[15px  ] text-left w-[1200px]' style={{ fontFamily: 'Gotham Pro Bold' }}>Акциялар, Чегирмалар, Янгиликлар</h1>
            <Card />
            <Links/>
            <Post/>
        </div>
    )
}

export default Home