import React from 'react'

type Props = React.SVGProps<SVGSVGElement>

const Menu = (props: Props) => {

    return (

<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" {...props}> <path fill='white' d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>

    )
}

export default Menu