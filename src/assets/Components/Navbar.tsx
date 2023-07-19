
import Logo from '../icons/logo'

const Navbar = () => {


    return (
        <div className='flex flex-row justify-between bg-black w-full px-[65px]  h-[88px] items-center'>
            <div className='flex flex-row gap-2 pl-9 items-center'>
                <Logo />
                <p className=' text-[24px] font-gt-america  text-white'>Abstarct</p>

                <p className='text-[24px]  text-white font-gt-america'>| Help Center</p>
            </div>
            <div className='flex flex-row gap-4 pr-9'>
                <button className='bg-[#191A1B] text-white px-2  rounded-lg border-white border-2 font-gt-america text-[24px] h-[50px] w-[230px] text-center align-middle '>Submit a request</button>
                <button className='bg-[#4C5FD5] text-white px-2 font-gt-america text-[24px] h-[50px] w-[140px]  rounded-lg'>Sign in</button>

            </div>

        </div>





    )


}


export default Navbar