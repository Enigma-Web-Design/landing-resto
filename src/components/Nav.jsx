import Image from 'next/image'
import yourResto from '../../public/yourRest.jpg'
export default function Nav() {



  return (
    <nav className="bg-white flex w-full p-2 text-black justify-center">
<a className="text-center bg-yellow-400">
 <Image width={80} src={yourResto} alt='logo'/>
 </a>
    </nav>
  )
}
