import React from 'react'

type HeaderProps = {
    name: string;

}

const Header = (props: HeaderProps) => {
  return (
    <h1 className='text-2xl font-semibold text-gray-700'>{props.name}</h1>
  )
}

export default Header;