import React from 'react'
import ThemeSwitch from '../ThemeSwitch';

const Navbar = () => {
    return (
        <div className='pt-5 flex justify-between'>
            <h1>Hexleap</h1>
            <ThemeSwitch />
        </div>
    )
}

export default Navbar;