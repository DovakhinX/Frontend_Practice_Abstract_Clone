
import FooterCard from './FooterCard'
import FooterLogo from './FooterLogo'



const Footer = () => {


    return (
        <div className='h-[400px] bg-black flex flex-row flex-wrap gap-3 w-full px-[100px] pt-[40px] pb-[60px] justify-between mt-[60px] tablet:h-max  '>
            <div className="flex flex-row justify-between flex-wrap w-2/3">
                <FooterCard title="Abstract" items={["Start Trial", "Pricing", "Download"]} />
                <FooterCard title="Resources" items={["Blog", "Help Center", "Release Notes", "Status"]} />
                <FooterCard title="Community" items={["Twitter", "LinkedIn", "Facebook", "Dribbble","Podcast"]} />
                <FooterCard title="Company" items={["About us", "Careers", "Legal"]} extra={["Contact Us", "info@Abstract.com"]} />
            </div>
            <FooterLogo />


        </div>



    )

}



export default Footer