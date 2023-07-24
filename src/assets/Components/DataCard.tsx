import  { ReactNode } from 'react'



type Props = {
    title: string;
    describe: string;
    img: ReactNode
}

const DataCard = (props: Props) => {

    return (
        <div className='flex flex-row  h-[280px] gap-7  w-[42vw]   tablet:h-max phone:w-[80vw] phone:h-max'>
            <div className='p-1 '>
                {props.img}
            </div>
            <div className='flex flex-col  gap-2  w-[280px]  '>
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