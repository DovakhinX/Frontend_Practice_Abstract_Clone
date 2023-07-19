import React from 'react'

type Props = React.SVGProps<SVGSVGElement>

const Arrow = (props: Props) => {

    return (

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>


    )
}

export default Arrow