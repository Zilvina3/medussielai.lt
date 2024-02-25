
import { Link } from 'react-router-dom'
import './Footer.css'
import fb from './fb.svg'
import tt from './tt.svg'
import React, { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children, effect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  
  if(!effect) {
    effect = "animate-fade-up"
  }

  const classes = `transition-opacity duration-1000 opacity-100
      ${isVisible ? effect : "opacity-0"
    }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

function Footer({ footNavLinks }) {
  return (
    <footer className='flex flex-wrap justify-around p-10 border-t-4 border-orange-300 '>
      <RevealOnScroll>
        <section className='text-center w-34 max-sm:p-5'>
          <h1 className='text-4xl font-bold text-orange-500'>Meniu</h1>
          <ul>
            {footNavLinks.map((link, key) => {
              return (
                 <Link key={key} to={link.to}>
                  <li id='nav-links' className='font-bold text-orange-300 hover:text-white p-0.5' onClick={() => {window.scrollTo(0, 0)}}>{link.name}</li>
                </Link> 
              )
            })}
          </ul>
        </section>
      </RevealOnScroll>



      <RevealOnScroll>
        <section className='text-center w-34 max-sm:p-5'>
          <h1 className='text-4xl text-center  font-bold text-orange-500'>Susisiekti</h1>
          <ul className='font-bold'>
            <li className='text-orange-300 p-0.5'>medussielai@gmail.com </li>
            <li className='text-orange-300 p-0.5'>+370 684 80989</li>
          </ul>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className='w-32 flex flex-wrap justify-center max-sm:p-5'>
          
          <div >
            <Link to='https://www.facebook.com/generida' className='p-1' target='blank'><img src={fb} alt="fb" width={'50px'} /></Link>
            <Link to='https://www.tiktok.com/@neringasala' className='p-1' target='blank'><img src={tt} alt="tt" width={'45px'} /></Link>
          </div>
        </section>
      </RevealOnScroll>


    </footer>
  )
}

export default Footer