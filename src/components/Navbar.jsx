import React, {useEffect, useState} from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import {styles} from '../styles'
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets'

const Navbar = () => {
  

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-09 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center mx-w-7x1 mx-auto'>
        <Link to={"/"} className='flex items-center gap-2' onClick={()=>{
          setActive("");
        }}>

        </Link>

      </div>
    </nav>
  )
}

export default Navbar