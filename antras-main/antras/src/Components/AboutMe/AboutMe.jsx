import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { RevealOnScroll } from '../Layout/Footer/Footer';
import './AboutMe.css'
import smile_red from './smile_red.jpg'
import smile_black from './smile_black.jpg'

function AboutMe() {

  const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


  return (
    <main className=" bg-black font-serif min-h-screen secondBg">
        <section className='container m-auto p-32 max-sm:p-8 animate-fade-up animate-duration-1500 animate-ease-in'>

              <h1 className='text-4xl text-center mb-20 text-orange-300'>Apie mane</h1>

            

            <p className='p-5  text-xl text-justify text-white max-sm:text-xl  lg:my-14 '>Prireikus trumpai papasakoti apie save, mes visi, tad ir aš, pirmiausia prisistatome vardu ir paminime tai, kas tariamai mus apibūdina. Tariamai, mat iš tiesų visi be išimties esame gerokai daugiau, nei patys manome. 
            </p>

            <div className='flex justify-center py-8'>
              <img src={smile_red} alt="Neringa" width={400}/>
            </div>
           

            <p className='p-5  text-xl text-justify text-white max-sm:text-xl  lg:my-14'>Aš esu Neringa, Vilniaus universitete įgijusi chemikės – analitikės magistro laipsnį. Šias studijas pasirinkau, nes anuomet buvau įsitikinusi, kad tiksliuosiuose moksluose galiojanti griežta logika, padės man perprasti pasaulio tvarką ir priežasties bei pasekmės dėsnius. Visgi net ir gilinantis į chemijos mokslo paslaptis jaučiau didžiulį norą pažinti ir žmogiškojo proto slėpinius. Tad universitete lankiau visas su psichologija susijusias disciplinas. Sukauptos žinios paskatino sukti kiek netikėtu keliu – studijas tęsti Vytauto Didžiojo universitete pedagogikos studijų programoje. Visgi pedagoge savęs nevadinu. Man pačiai artimesnis gyvenimo mokytojos vaidmuo. Būtent todėl mentorių kursais stiprinau mokymo gebėjimą – padėti žmogui perprasti pačiam save ir išmokti priimti geriausius sprendimus.  
            </p>

            {/* <div className='flex justify-center py-8'>
              <img src={smile_black} alt="Neringa" width={400}/>
            </div> */}

            <p className='p-5  text-xl text-justify text-white max-sm:text-xl  lg:my-14'>Diplomai man svarbūs ir brangūs, nes jiems atiduota labai daug laiko ir pastangų, visgi, kad ir kaip banaliai beskambėtų, tikroji  mokykla egzistuoja už auditorijų durų. Tai yra nuolatinis tobulėjimas. Ir už jį įteikiamas ne dailus raštas, bet išmintis. Išmintis padeda atsiverti pasauliui ir patirti, kad visi turime beribių galimybių semti informaciją, vertingesnę už auksą. O tuos, kas vertinga, norisi dalintis. Juk dalijantis žiniomis, skirtingai nei auksu ar deimantais, šių kiekis nesumažėja, o padidėja. Dalijimąsi laikau savo pašaukimu ir svarbiausia šio gyvenimo užduotimi. Tad, jeigu skaitote šį mano prisistatymą, vadinasi turiu kažką, ko jums reikia.
            </p>

            <div className='text-center my-20' >
                    <button className=" bg-orange-300 font-bold hover:bg-orange-500 text-gray-800
          py-4 px-12   rounded-xl shadow-md hover:trasition hover:-translate-y-1 duration-300 delay-100"
                        onClick={() => { navigate('/susisiekti') }}>
                        Susisiekti
                    </button>
                </div>

        </section>
    </main>
  )
}

export default AboutMe;