import  { ReactNode } from 'react'



type Props = {
    title: string;
    describe: string;
    img: ReactNode
}

const DataCard = (props: Props) => {

    return (
        <div className='flex flex-row  h-[130px] gap-8 mb-[164px] mr-[120px] '>
            <div className='p-2'>
                {props.img}
            </div>
            <div className='flex flex-col  gap-2  w-[280px] '>
                <p className='text-[24px] font-gt-america-bold  '>{props.title}</p>
                <p className='text-[24px] font-gt-america]'>
                    {props.describe}
                </p>
                <p className='text-[20px] font-gt-america text-[#4C5FD5]'>Learn More →</p>

            </div>


        </div>


    )

}

export default DataCard