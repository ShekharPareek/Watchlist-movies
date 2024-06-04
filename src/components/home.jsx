import { useState } from 'react'
import SideBar from './sidebar'
import Header from './header'
import MainSection from './mainsection'
function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='flex container m-auto'>
      <SideBar/>
      <MainSection/>
      </div>
    </>
  )
}

export default Home
