

type Props = {
    title: string;
    items: string[];
    extra?: string[];
}
const FooterCard = (props: Props) => {


    return (

        <div className="flex flex-col gap-3 ">
            <p className="text-white text-[24px] font-gt-america-bold">{props.title}</p>
            <div>
                {props.items.map((item) => (
                    <p className="text-white text-[16px] font-gt-america">
                        {item} </p>
                ))}
            </div>
            <div>
                {props.extra ? (
                    <>
                        <p className="text-white text-[16px] font-gt-america font-[600]">
                            {props.extra[0]}</p>
                        <p className="text-white text-[16px] font-gt-america">{props.extra[1]}</p>
                    </>
                ) : (null)}
            </div>
        </div>
    )
}

export default FooterCard