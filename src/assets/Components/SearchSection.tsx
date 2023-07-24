
import Arrow from '../icons/arrow'

const SearchSection = () => {


    return (
        <div className='bg-[#dadbf1] h-[400px] flex flex-col items-center justify-center gap-5 font-gt-america pt-[80px] px-[30px] pb-[115px]'>
            <h1 className='text-[80px] tracking-[-4px] leading-[120px] phone:text-[45px] tablet:text-[64px]'>How can we help?</h1>
            <div className='flex flex-row relative items-center '>
                <input placeholder='Search' className=' h-[65.6px] p-4 border-[1px] border-[#000000] rounded-[4px] font-gt-america text-[20px]  phone:w-[370px] tablet:w-[600px] laptop:w-[720px]' />
                <button className='absolute right-[15px]'><Arrow /></button>
            </div>
        </div>
    )
}

export default SearchSection