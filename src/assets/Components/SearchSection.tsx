
import Arrow from '../icons/arrow'

const SearchSection = () => {


    return (
        <div className='bg-[#dadbf1] h-[400px] flex flex-col items-center justify-center gap-5 font-gt-america pt-[80px] px-[30px] pb-[115px]'>
            <h1 className='text-[80px] tracking-[-4px] leading-[120px]'>How can we help?</h1>
            <div className='flex flex-row relative items-center '>
                <input placeholder='Search' className='w-[720px] h-[65.6px] p-4 border-[1px] border-[#000000] rounded-[4px] font-gt-america text-[20px]' />
                <button className='absolute right-[15px]'><Arrow /></button>
            </div>
        </div>
    )
}

export default SearchSection