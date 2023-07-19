import React from 'react'

type Props = React.SVGProps<SVGSVGElement>

const Logo = (props: Props) => {

    return (
        <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M 25.41 0 C 5.08 0 0 5.08 0 25.41 s 5.08 25.41 25.41 25.41 s 25.41 -5.08 25.41 -25.41 S 45.74 0 25.41 0 Z m -4.17 39.31 A 9.73 9.73 0 1 1 31 29.58 a 9.75 9.75 0 0 1 -9.76 9.73 Z m 17.67 -0.4 h -4.77 V 16.67 H 11.91 v -4.76 h 27 Z" fill="white" />
        </svg>

    )
}

export default Logo