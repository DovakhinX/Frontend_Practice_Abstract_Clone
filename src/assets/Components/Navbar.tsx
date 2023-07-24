
import Logo from '../icons/logo'
import Search from '../icons/search'
import Menu from '../icons/menu'
const Navbar = () => {


    return (
        <div className='flex flex-row justify-between bg-black w-full px-[65px]  h-[88px] items-center phone:px-4'>
            <div className='flex flex-row gap-2 pl-9 items-center phone:pl-0'>
                <Logo />
                <p className=' text-[24px] font-gt-america  text-white phone:text-[19px]'>Abstarct</p>

                <p className='text-[24px]  text-white font-gt-america phone:text-[19px]'>| Help Center</p>
            </div>
            <div className='flex flex-row gap-4 pr-9 tablet:hidden'>
                <button className='bg-[#191A1B] text-white px-2  rounded-lg border-white border-2 font-gt-america text-[24px] h-[50px] w-[230px] text-center align-middle  '>Submit a request</button>
                <button className='bg-[#4C5FD5] text-white px-2 font-gt-america text-[24px] h-[50px] w-[140px]  rounded-lg '>Sign in</button>

            </div>
            <div className='flex flex-row gap-2 laptop:hidden items-center'>
                <Search  />
                <Menu  />
            </div>

        </div>





    )


}


export default Navbar