import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>

      <div>
        <Navbar/>
      </div>

      <div>
        <Header/>
      </div>

      <div>
        <Footer/>
      </div>


    </div>

  )
}
