import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const [response, setResponse] = useState('')
  
    const sendEmail = (e) => {
      e.preventDefault();

      
  
      emailjs.sendForm('service_me2u88e', 'template_b86eegf', form.current, 'OQF4MUAEJnnn30HE4')
        .then((result) => {
            console.log(form.current.firstname.value, form.current.email.value, form.current.subject.value);
        }, (error) => {
            console.log(error.text);
        });
        setResponse('Jūsu žinutė išsiųsta')
        e.target.reset()
    };
  
    return (
        <form className='flex flex-col w-2/5 m-7 max-lg:w-3/5 max-sm:w-full max-sm:my-20' ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col m-3'>
            <label className='w-32 text-2xl my-2 text-orange-300' htmlFor='fname' >Vardas</label>
            <input required className='w-64 rounded-md p-2 bg-slate-600 outline-orange-300' type="text" id="fname" name="firstname" placeholder="Jūsų vardas . ." />
        </div>

        <div className='flex flex-col m-3'>
            <label className='w-32 text-2xl my-2 text-orange-300'>Paštas</label>
            <input required className='w-64 rounded-md p-2 bg-slate-600' type="email" id="email" name="email" placeholder="Pavadinimas@paštas.lt . ." />
        </div>
        <div className='flex flex-col m-3 '>
            <label className='w-32 text-2xl my-2 text-orange-300 '>Tema</label>
            <textarea required className='w-full rounded-md p-2 bg-slate-600' id="subject" name="subject" rows={'4'} placeholder="Jūsu žinutė . ." ></textarea>
        </div>


        <div className='m-3'>
            <button type="submit" className='
              rounded-xl py-3 px-10 bg-orange-300 font-bold text-black
             hover:bg-orange-400' >Siųsti</button>
        </div>
        <div
            className='text-green-500 p-5 text-xl'
        >{response ? response : ''}</div>
    </form>
    );
  };