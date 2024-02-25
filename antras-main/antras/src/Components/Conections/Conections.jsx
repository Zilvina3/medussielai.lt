import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { RevealOnScroll } from '../Layout/Footer/Footer';
import neringaFt1 from './neringa1.jpg'

function Conections() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <main className='min-h-screen py-8 bg-black font-serif'>
    <section className='container m-auto p-32 max-sm:p-8 animate-fade-up animate-duration-1500 animate-ease-in'>
        <h1 className='text-4xl text-center mb-16 text-orange-300'>Santykių suderinimas</h1>

        <p className='p-5  text-xl text-justify text-white '>
        Nėra žmogaus, kuriam nerūpėtų santykiai su kitais. Tai normalu. Mums turi rūpėti šioji gyvenimo sritis. Puiku, kad kiekvienas turime privilegiją užduoti klausimus ir suradę tinkamą šaltinį gauti išsamiausius atsakymus. Visgi ne visada pavyksta užduoti būtent tokį klausimą, kokio iš tiesų reikia.  Mat mums taip maga klausti apie kitą – savo mylimą, nors iš tiesų reikėtų pradėti nuo to, kad pažintume save ir būtent sau užduotume svarbiausius klausimus. Kiekvienas yra unikalus ir nepakartojamas. Kiekvienas gimdamas atsineša savą programą. Ir nors šioji gyvenimo kelyje šiek tiek keičiasi ir įgauna naujų spalvų, tačiau ji visada būna nepaprastai svarbi santykių sričiai. Tad kviečiu pažinti save ir šiek tiek atidžiau pažvelgti į savo partnerį per gimimo datos matricos analizę. Kartais pažinti sielos slėpinius padeda ir kortos. Jos gali tapti nepamainomu įrankiu tuomet, kai  atsiduriame gyvenimo kryžkelėse ir mums reikia akis ateičiai atveriančio patarimo.  
        </p>

        <div className='flex justify-center py-8'>
              <img src={neringaFt1} alt="Neringa" width={400}/>
            </div>

        <p className='p-5  text-xl text-justify text-white mb-14'>
        Visada primenu ir sau, ir kitiems, jog žmogus gyvas ir tai kas „parašyta" ar tariamai nulemta nėra konstanta, kaip statiškas nebūna ir gyvenimas. Visada skatinu padaryti viską, kad taptume geresni, pakreiptume savą likimą šviesia linkme, o susidūrus su neišvengiamu išmoktume susitaikyti ir priimti.  
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

export default Conections