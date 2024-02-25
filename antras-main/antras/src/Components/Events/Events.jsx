import React, {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'

export const RevealOnScroll2 = ({ children, effect }) => {
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
    effect = "animate-fade-right animate-duration-[3000ms]"
  }

  const classes = `transition-opacity duration-100 opacity-100
      ${isVisible ? effect : "opacity-0"
    }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default function Events() {

  const renginiai = [
    {
      name: "Jolė",
      description: "Deivė pagimdė sūnų, Dievą, Jolėsmetu (gruodžio 21 d.). Trumpiausia diena anksčiau buvo vertinama kaip dievybių gimimo diena. Mitra gimė tą dieną, tačiau krikščionybė pasisavino vėliau šią šventę iš senųjų tikėjimų 273 šios eros metais. Jolė – didžiausios tamsos diena. Tą dieną deginami laužai ir žvakės, skatinant saulę (Dievą) atgimti ir suteikti daugiau šviesos. Po gimdymo Deivė leidžiasi į požemius ir miega visą žiemą, ji ilsisi. Tai šventė, kuri primena, kad mirtis tėra dar vienas amžino gyvybės ir mirties rato pasisūkimas"
    },
    {
      name: "Imbolkas",
      description: "Imbolkas(vasario 2 d.) - tai pirmasis Deivės pasirodymas po Dievo gimimo. Ilgėjanti diena pažadina Ją. Dievas - mažas berniukas, bet jo jėgą galima pajusti ilgėjančiose dienose. Šilta, apvaisinta žemė (Deivė) verčia sėklas augti. Tai vyksta ankstyvą pavasarį. Tai apvalymo Šabašas po uždaro žiemos gyvenimo. Tai šviesos ir vaisingumo šventė. Imbolkas žinomas kaip Deglų šventė, Oimelkas, Luperkalija, Pano šventė, Brigitos šventė ir t. t."
    },
    {
      name: "Ostara",
      description: "Ostara (kovo 21 d.), pavasario lygiadienis, taip pat žinomas kaip Pavasario apeigos ir Ostaros diena, pirmoji tikrojo pavasario diena. Gamtos energija keičiasi nuo lėtos ir tingios žiemos energijos į pavasariškai veržlią. Deivė padengia žemę savo vaisingumu, Dievo jėgos didėja, jis vyriškėja. Jis žingsniuoja laukais ir miškais ir duoda gamtai pilnatvę. Per Ostarą dienos ir nakties ilgumas lygus. Šviesa laimi prieš tamsą – Deivė ir Dievas skatina laukinius padarus daugintis. Tai veiksmų pradžios laikas."
    },
    {
      name: "Belteinas",
      description: "Belteinas(balandžio30) - tai jauno Dievo įžengimas į brandą. Judindamas gamtos energijas, jis geidžia Deivės. Jie, kupini meilės, susijungia, guli tarp žolių ir gėlių. Deivė pastoja nuo Dievo švenčiaM Deivės vaisingumą. Belteinas seniai švenčiamas festivaliais ir ritualais. Gegužės kartis, kuri naudojama senuose angliškose kaimo šventėse, turi falo formą. Tą dieną žmonės renka gėles ir puošią kartį prie savo namų. Gelės ir žaluma simbolizuoja Deivę, o kartis – Dievą. Per Beltainą švenčia gyvybės, aistros ir vilties sugrįžimą. Kartis iki šiol naudojamas per Belteiną, tačiau katilas užima pagrindinę vietą, jis yra Deivės simbolis, karties priešingybė."
    },
    {
      name: "Lita",
      description: "Lita(birželio 21 d.) - vidurvasaris, ilgiausia metų diena (sekundžių tikslumu). Tai laikas, kai gamtos jėgos pasiekia aukščiausią tašką. Laužas šiuo laiku simbolizuoja Saulę. Tą dieną šokinėjama per laužą, taip apvalant save, siekiant sveikatos, meilės ir vaisingumo. Tai geriausias laikas bet kokio pobūdžio magijai."
    },
    {
      name: "Lugnasadas",
      description: "Lugnasadas(rugpjūčio 1 d.) – pirmojo derliaus laikas. Augalai pradeda džiūti, vaisiai sunoksta. Mistiškai tas pats vyksta ir su Dievu: jis praranda savo galią, kaip ir saulė, kuri vis linksta toliau į pietus, mažėja dienos ilgumas. Deivė žiūri liūdnai ir tuo pat džiaugsmingai, žinodama, kad Dievas mirs ir atgims, ir vėl sedės šalia jos. Vasara baigėsi, tačiau prisimena jos šiluma ir dosnumas tam maistui, kurį jie vartoja. Kiekvienas valgymas – tai vienybės su gamta aktas."
    },
    {
      name: "Mabonas",
      description: "Mabonas(rugsėjo 21 d.) - rudens lygiadienis, derliaus nuėmimo pabaiga, kuris prasidėjo per Lugnasadą. Dar kartą diena ir naktis susilygino. Dievas yra pasiruošęs apleisti savo fizinį kūną ir iškeliauti vėl prie savo pradžios. Gamta virsta, atiduoda savo dosnumą, ruošiasi žiemai, poilsio metui. Deivė snaudžia, besišildydama silpnoje saulės šilumoje, nors liepsna dar dega jos įsčiose. Ji jaučia Dievą, netgi nusilpusį."
    },
    {
      name: "Samainas",
      description: "Per Samainą(spalio 31 d.) raganos ir raganiai atsisveikina su Dievu. Tai laikinas atsisveikinimas. Jis niekur nedingsta, bet pasiruošęs būti pagimdytas Deivės per Jolę. Samainas žinomas kaip Mirties šventė, Obuolių diena, Halous, kartais yra švenčiama kaip aukojimo dieną. Tai diena, kai nudobiami gyvuliai ir ruošiamos maisto atsargos žiemai. Samainas – tai atspindžių diena, kada atsisukama į praėjusius metus, suprantant, kad mes negalim vadovauti mirčiai. Tą naktį vyksta fizinės ir dvasinės realybės sujudimai. Šią dieną atsiveria portalas tarp mirusiųjų ir gyvųjų pasalių, bendraujam su savo mirusiais protėviai bei prisimena visus tuos, kurie paliko gyvuosius."
    }
  ]

  const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  
  return (
    <main className='bg-black min-h-screen secondBg'>
        <section className='container m-auto p-32'>

        <h1 className=' text-4xl mb-40 text-center text-orange-300'>Renginiai</h1>

          {renginiai.map((item, count)=>{
            return(
               <RevealOnScroll2 key={count}>
                <div className='flex justify-center flex-wrap py-16 '>
              <h1 className='text-3xl text-center  text-orange-300'>{item.name}</h1>
              <p className='p-5  text-xl text-justify text-white max-sm:text-xl  lg:my-8'>{item.description}</p>
              {item.name == "Samainas" ? <p className='px-5 pb-12 text-xl text-justify text-white max-sm:text-xl  '>Dievo kaip sūnaus ir mylimojo vaidmuo yra grindžiamas Deivės trejybę. Deivė reprezentuoja tris gyvybės etapus – jaunystę, brandą ir senatvę. Pradžioje metų, kai Deivė grįžta iš požemių į šviesą, ji išgyvena savo jaunystės periodą bei kartu su Dievu bręsta. Tai Deivė – mergelė. Per Belteiną Deivė simbolizuojama kaip subrendusi moteris, kuri yra pasiruošusi susijungti su Dievu. Pagimdžiusi Dievą, Deivė – senė, keliauja į požemius tam, kad vėl grįžtų atjaunėjusi ir kupina jėgų į ilgėjančių dienų naująjį metų ciklą. 
                <br /> <br /> Šis mitas pasakoja apie gimimo, meilės ir mirties misteriją.
              </p>: ""}
              <div className='text-center mb-12'>
                <button className="bg-orange-300 font-bold hover:bg-orange-500 text-gray-800
          py-4 px-12   rounded-xl shadow-md hover:trasition hover:-translate-y-1 duration-300 delay-100"
            onClick={() => {navigate('/susisiekti')}}
            >Registruotis į renginį</button>
              </div>
              </div>
            </RevealOnScroll2>
            )           
          })}


        </section>
    </main>
  )
}
