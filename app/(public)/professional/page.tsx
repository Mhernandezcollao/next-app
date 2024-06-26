import { faBitbucket, faFacebook, faGithub, faInstagram, faLinkedin, faMicrosoft, faTrello } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faBriefcase, faCalendarDay, faEnvelope, faFlag, faPhone, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About page",
    description: "Description about page",
};

const professional = [
  {
    id: "1",
    img: "",
    title: "Universidad Andres Bello",
    date: "2021",
    range_date: "",
    description: "¡En el año 2021, obtuve mi título de Ingeniera en Informática! Durante toda mi carrera universitaria, tuve el privilegio de recibir una beca deportiva gracias a mi participación en la selección universitaria de fútbol.",
    top: false,
    right: false,
    bottom: true,
    left: true
  },
  {
    id: "2",
    img: "",
    title: "Universidad Andres Bello",
    date: "2022",
    range_date: "Marzo 2022 - Junio 2022",
    description: "Trabajé como soporte de TI en la Universidad Andrés Bello, responsabilizándome de los laboratorios de computadoras situados en República, Santiago. Dentro de mis responsabilidades estaba la reparación de computadoras en mal estado e instalación de los programas necesarios para los alumnos a lo largo del año.",
    top: true,
    right: true,
    bottom: true,
    left: false
  },
  {
    id: "3",
    img: "",
    title: "Acegroups",
    date: "2022",
    range_date: "Junio 2022 - Actulidad",
    description: "¡En el año 2021, obtuve mi título de Ingeniera en Informática! Durante toda mi carrera universitaria, tuve el privilegio de recibir una beca deportiva gracias a mi participación en la selección universitaria de fútbol.",
    top: true,
    right: false,
    bottom: false,
    left: true
  },
  
]
const professional1 = [
  {
    id: "1",
    title: "Universidad Andrés Bello",
    date: "2021",
    range_date: "",
    description: "¡En el año 2021, obtuve mi título de Ingeniera en Informática! Durante toda mi carrera universitaria, tuve el privilegio de recibir una beca deportiva gracias a mi participación en la selección universitaria de fútbol.",
    img: "https://i.imgur.com/Txd1brM.png",
    color: "#22B6D4",
    it_is_on_the_right: true,
  },
  {
    id: "2",
    title: "Universidad Andrés Bello",
    date: "2022",
    range_date: "Marzo 2022 - Junio 2022",
    description: "Trabajé como soporte de TI en la Universidad Andrés Bello, responsabilizándome de los laboratorios de computadoras situados en República, Santiago. Dentro de mis responsabilidades estaba la reparación de computadoras en mal estado e instalación de los programas necesarios para los alumnos a lo largo del año.",
    img: "https://i.imgur.com/Txd1brM.png",
    color: "#F9A312",
    it_is_on_the_right: false,
  },
  {
    id: "3",
    title: "Acegroups",
    date: "2022",
    range_date: "Junio 2022 - Actulidad",
    description: "¡En el año 2021, obtuve mi título de Ingeniera en Informática! Durante toda mi carrera universitaria, tuve el privilegio de recibir una beca deportiva gracias a mi participación en la selección universitaria de fútbol.",
    img: "https://i.imgur.com/0Qz9PFO.png",
    color: "#E4808A",
    it_is_on_the_right: true,
  },
  
]

export default function ProfessionalPage() {
  return (
    <div>
      <div className='flex flex-col w-full items-center max-w-5xl p-6'>
        <h2 className="text-2xl text-white">Experiencia Profesional</h2>
        <p className="text-white">Maryorie Hernandez Collao</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-10 pb-20'>
          <div className='h-auto w-full bg-smokyblack p-5 rounded-lg my-3'>
            <p className='text-small text-gray-200 mb-7'>Herramientas</p>
            <div className='flex items-center my-2'>
              <div className="flex justify-center items-start h-[18px] w-[18px] mr-2">
                <FontAwesomeIcon icon={faMicrosoft} className='text-gray-400 font-awesome-icon'/>
              </div>
              <p className='text-gray-400 text-xs truncate cursor-default'>Microsoft Office</p>
            </div>
            <div className='flex items-center my-2'>
              <div className="flex justify-center items-start h-[18px] w-[18px] mr-2">
                <FontAwesomeIcon icon={faGithub} className='text-gray-400 font-awesome-icon'/>
              </div>
              <p className='text-gray-400 text-xs truncate cursor-default'>Github</p>
            </div>
            <div className='flex items-center my-2'>
              <div className="flex justify-center items-start h-[18px] w-[18px] mr-2">
                <FontAwesomeIcon icon={faBitbucket} className='text-gray-400 font-awesome-icon'/>
              </div>
              <p className='text-gray-400 text-xs truncate cursor-default'>Bitbucket</p>
            </div>
            <div className='flex items-center my-2'>
              <div className="flex justify-center items-start h-[18px] w-[18px] mr-2">
                <FontAwesomeIcon icon={faTrello} className='text-gray-400 font-awesome-icon'/>
              </div>
              <p className='text-gray-400 text-xs truncate cursor-default'>Trello</p>
            </div>
          </div>
          <div className='h-auto w-full bg-smokyblack p-5 rounded-lg my-3'>
            <p className='text-small text-gray-200 mb-7'>Datos personales</p>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faCalendarDay} className='text-gray-400 mr-3 font-awesome-icon'/>
              <p className='text-gray-400 text-xs truncate cursor-default'>20 de marzo de 1990</p>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faPhone} className='text-gray-400 mr-3'/>
              <button className=' text-gray-400 text-xs truncate cursor-pointer hover:underline'>
                +56 9 9644 XXXX
              </button>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 mr-3 font-awesome-icon'/>
              <Link href="mailto:mhernandezcollao@gmail.com" className='text-gray-400 text-xs truncate hover:underline'>
                mhernandezcollao@gmail.com
              </Link>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faFlag} className='text-gray-400 mr-3'/>
              <p className='text-gray-400 text-xs truncate cursor-default'>Chilena</p>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faInstagram} className='text-gray-400 mr-3'/>
              <Link href='https://www.instagram.com/mhernandezcollao/?hl=es-la' target="_blank" className='text-gray-400 text-xs truncate hover:underline'>
                @mhernandezcollao
              </Link>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faFacebook} className='text-gray-400 mr-3'/>
              <Link href='https://www.instagram.com/mhernandezcollao/?hl=es-la' target="_blank" className='text-gray-400 text-xs truncate hover:underline'>
                May Hernandez
              </Link>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faLinkedin} className='text-gray-400 mr-3'/>
              <Link href='https://www.linkedin.com/in/maryorie-hernandez-collao-749479205/?originalSubdomain=cl' target="_blank" className='text-gray-400 text-xs truncate hover:underline'>
                Maryorie Hernandez Collao
              </Link>
            </div>
          </div>
          <div className='h-auto w-full bg-smokyblack p-5 rounded-lg my-3'>
            <p className='text-small text-gray-200 mb-7'>Datos personales</p>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faCalendarDay} className='text-gray-400 mr-3 font-awesome-icon'/>
              <p className='text-gray-400 text-xs truncate cursor-default'>20 de marzo de 1990</p>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faPhone} className='text-gray-400 mr-3'/>
              <button className=' text-gray-400 text-xs truncate cursor-pointer hover:underline'>
                +56 9 9644 XXXX
              </button>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 mr-3 font-awesome-icon'/>
              <Link href="mailto:mhernandezcollao@gmail.com" className='text-gray-400 text-xs truncate hover:underline'>
                mhernandezcollao@gmail.com
              </Link>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faFlag} className='text-gray-400 mr-3'/>
              <p className='text-gray-400 text-xs truncate cursor-default'>Chilena</p>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faInstagram} className='text-gray-400 mr-3'/>
              <Link href='https://www.instagram.com/mhernandezcollao/?hl=es-la' target="_blank" className='text-gray-400 text-xs truncate hover:underline'>
                @mhernandezcollao
              </Link>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faFacebook} className='text-gray-400 mr-3'/>
              <Link href='https://www.instagram.com/mhernandezcollao/?hl=es-la' target="_blank" className='text-gray-400 text-xs truncate hover:underline'>
                May Hernandez
              </Link>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faLinkedin} className='text-gray-400 mr-3'/>
              <Link href='https://www.linkedin.com/in/maryorie-hernandez-collao-749479205/?originalSubdomain=cl' target="_blank" className='text-gray-400 text-xs truncate hover:underline'>
                Maryorie Hernandez Collao
              </Link>
            </div>
          </div>
        </div>
        {
          professional1.map((item: any) => (
            <div className="flex w-full">
              
              <div className="flex w-full h-full">
                {
                  item.id === professional1[0].id && (
                    <div className="relative flex w-full bg-rose-400">
                      <div className="absolute right-4 -top-2 border-4 px-3 rounded-lg" style={{borderColor: `${professional1[0].color}`}}>
                        <p className="text-white uppercase text-lg font-bold">Inicio</p>
                      </div>
                    </div>
                  )
                }
                {
                  !item.it_is_on_the_right && (
                    <div>
                      <div className="flex h-[25px] w-full items-center pr-1">
                        <div className="flex justify-center items-center h-[80px] w-[80px] rounded-full bg-black animations-zoom overflow-hidden" style={{border: `9px solid ${item.color}`}}>
                          <img src={item.img} alt="" className="w-[50px] h-[50px]" />
                        </div>
                        <div className="flex-1 border-dashed border-1 border-white"></div>
                        <div className="triangle-to-left" style={{borderRight: `10px solid ${item.color}`}}></div>
                      </div>
                      <div className="relative pl-20 pr-5 mb-8">
                        <p className="absolute right-5 -top-14 text-4xl text-white font-bold">{item.date}</p>
                        <div className="animations-fade-right">
                          <p className="text-end text-lg font-bold uppercase" style={{color: `${item.color}`}}>{item.title}</p>
                          <p className="text-end text-xs text-white font-semibold mb-2">{item.range_date}</p>
                          <p className="text-end text-xs text-gray-200">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[25px] w-[25px] border-5 rounded-full" style={{ borderColor: item.color }}></div>
                <div className="flex flex-col flex-1">
                  <div className="h-1/5 w-1 animations-time-line" style={{backgroundColor: `${item.color}`}}></div>
                  <div className="h-1/5 w-1 animations-time-line" style={{backgroundColor: `${item.color}`}}></div>
                  <div className="h-1/5 w-1 animations-time-line" style={{backgroundColor: `${item.color}`}}></div>
                  <div className="h-1/5 w-1 animations-time-line" style={{backgroundColor: `${item.color}`}}></div>
                  <div className="h-1/5 w-1 animations-time-line" style={{backgroundColor: `${item.color}`}}></div>
                </div>
              </div>
              <div className="flex w-full h-full">
                {
                item.it_is_on_the_right && (
                    <div>
                      <div className="flex h-[25px] w-full items-center pl-1">
                        <div className="triangle-to-right" style={{borderLeft: `10px solid ${item.color}`}}></div>
                        <div className="flex-1 border-dashed border-1 border-white"></div>
                        <div className="flex justify-center items-center h-[80px] w-[80px] rounded-full bg-black animations-zoom" style={{border: `9px solid ${item.color}`}}>
                          <img src={item.img} alt="" className="w-[50px] h-[50px]" />
                        </div>
                      </div>
                      <div className="relative pr-20 pl-5 mb-8">
                        <p className="absolute left-5 -top-14 text-4xl text-white font-bold">{item.date}</p>
                        <div className="animations-fade-left">
                          <p className="text-lg font-bold uppercase" style={{color: `${item.color}`}}>{item.title}</p>
                          <p className="text-xs text-white font-semibold mb-2">{item.range_date}</p>
                          <p className="text-xs text-gray-200">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          ))
        }
        <div className="flex flex-col items-center">
          <div className="border-4 px-3 rounded-lg" style={{borderColor: `${professional1[professional1.length -1].color}`}}>
              <p className="text-white uppercase text-lg font-bold">Actualidad</p>
          </div>
        </div>
        <div className="h-96"></div>
      </div>
      {/* <div className='flex flex-col w-full items-center max-w-5xl p-6'>
        <h2 className="text-2xl text-white">Experiencia Profesional</h2>
        <p className="text-white">Maryorie Hernandez Collao</p>
        <div className="h-[400px]"></div>
        {
          professional.map((item) =>(
            <div key={item.id} className="flex">
              <div className="flex w-full">
                {item.left && ( 
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center w-full h-[250] pr-7 animations-fade-right">
                      <div>
                        <FontAwesomeIcon icon={faUserGraduate} className='text-white icon-time-line-right'/>
                        <p className="font-bold text-base text-white">{item.title}</p>
                        <p className="font-bold text-xs text-white ">{item.range_date}</p>
                        <p className="text-xs text-white ">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center">
                {
                  item.top
                  ? <div className="h-full">
                      <div className="h-1/5 w-1 bg-primary animations-time-line"></div>
                      <div className="h-1/5 w-1 bg-primary animations-time-line"></div>
                      <div className="h-1/5 w-1 bg-primary animations-time-line"></div>
                      <div className="h-1/5 w-1 bg-primary animations-time-line"></div>
                      <div className="h-1/5 w-1 bg-primary animations-time-line"></div>
                    </div>
                  : <div className="h-full"></div>  
                }
                <div className="relative flex items-center animations-zoom">
                  <div className={`absolute ${item.left ? 'triangle-to-left' : 'triangle-to-right'} ${item.left ? '-left-3' : '-right-3'}`}></div>
                  <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full border-[7px] border-[#D31F8A]">
                    <FontAwesomeIcon icon={faCalendarDay} className='text-gray-400 font-awesome-icon'/>
                  </div>
                  <div className={`absolute flex justify-center items-center h-8 w-[70px] bg-[#D31F8A] ${item.left ? '-right-[66px]' : '-left-[66px]'} ${item.left ? 'rounded-r-2xl' : 'rounded-l-2xl'}`}>
                    <p className="font-bold text-white text-xl">2021</p>
                  </div>
                </div>
                {
                  item.bottom
                  ? <div className="h-full">
                      <div className="h-1/5 w-1 bg-primary animations-time-line"></div>
                      <div className="h-1/5 w-1 bg-primary animations-time-line"></div>
                      <div className="h-1/5 w-1 bg-primary animations-time-line"></div>
                      <div className="h-1/5 w-1 bg-primary animations-time-line"></div>
                      <div className="h-1/5 w-1 bg-primary animations-time-line"></div>
                    </div>
                  : <div className="h-full"></div>  
                }
              </div>
              <div className="flex w-full">
                {item.right && ( 
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center w-full h-[250] pl-7 animations-fade-left">
                      <div>
                        <FontAwesomeIcon icon={faBriefcase} className='text-white icon-time-line-left'/>
                        <p className="font-bold text-base text-white text-end">{item.title}</p>
                        <p className="font-bold text-xs text-white text-end">{item.range_date}</p>
                        <p className="text-xs text-white text-end">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        }
        <div className="h-[200px]"></div>
            
      </div> */}
    </div>
  );
}