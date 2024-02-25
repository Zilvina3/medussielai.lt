import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import neringaLogo from './ns.png'
import fb from './fb.svg'
import tt from './tt.svg'



function Header({ NavItems }) {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [toggleNav, setToggleNav ] = useState(false)

    let curLinkPath = window.location.pathname

    function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}


      useEffect(() => {
        const updateDimension = () => {
              setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
  }, [screenSize])

    return (
        <header className='sticky top-0 bg-slate-900 py-5 border-b-4 border-orange-300 z-10'>
            <nav className='flex flex-wrap justify-around mx-20 max-md:justify-between' id='nav'>
                <Link to={'/'} className='self-center'>
                    <img id='logo' className='text-3xl text-orange-300 max-sm:w-36' src={neringaLogo} alt="Neringa" width={'200px'} />
                </Link>

                <div className='hamburger' onClick={() => { 
                    if(toggleNav){
                        setToggleNav(false)
                    }else {
                        setToggleNav(true)
                    }
                     }}>
                    <div className='burger burger1 bg-orange-300'></div>
                    <div className='burger burger2 bg-orange-300'></div>
                    <div className='burger burger3 bg-orange-300'></div>
                </div>

              {screenSize.width > '1100' && <ul className={`flex flex-wrap justify-center animate-fade-down `}>
                    {NavItems.map((item, key) => {
                        return (
                            <li key={key} className={`p-5 text-center`}>
                                    <Link  className={item.to === curLinkPath ? `font-bold w-full text-orange-500 border-b-2 p-1 border-orange-500 ` : 'font-bold w-full text-orange-300 hover:text-orange-500 p-1'} id='nav-links' to={item.to}>{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>}

                

               {toggleNav && <ul className={`flex flex-wrap justify-center animate-fade-down text-center`}>
                    {NavItems.map((item, key) => {
                        return (
                            <li key={key} onClick={()=> {setToggleNav(false)}} className={`p-5 li_remove max-lg:w-3/5 max-sm:w-full `}>
                                <Link className={ item.to === curLinkPath ? 'font-bold text-orange-500 border-b-2 p-1 border-orange-500' : 'font-bold text-orange-300 hover:text-orange-500' } id='nav-links' to={item.to}>{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>}
                
                {screenSize.width < '1099' && document.querySelector('.li_remove') && document.querySelector('.li_remove').remove()}
            </nav>
            {screenSize.width > '1100' && <div className={`flex flex-wrap justify-center animate-fade-down absolute right-2 top-2 flex`}>
            <Link to='https://www.facebook.com/generida' className='p-1' target='blank'><img src={fb} alt="fb" width={'30px'} /></Link>
            <Link to='https://www.tiktok.com/@neringasala' className='p-1' target='blank'><img src={tt} alt="tt" width={'30px'} /></Link>
          </div>}
        </header>
    )
}

export default Header