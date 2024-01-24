import './Cssjorney.css'
import Title from '../components/Title'

import { useState } from "react"
import { motion } from 'framer-motion'


function Jorney() {

  const [displayB1, setDisplayB1] = useState('flex')
  const [displayB2, setDisplayB2] = useState('none')
  const [displayB3, setDisplayB3] = useState('none')

  const [displayS1, setDisplayS1] = useState('none')
  const [displayS2, setDisplayS2] = useState('')
  const [displayS3, setDisplayS3] = useState('')

  const [rotate1, setRotate1] = useState('rotate(-270deg)')
  const [rotate2, setRotate2] = useState('')
  const [rotate3, setRotate3] = useState('')

  const [displayB4, setDisplayB4] = useState('flex')
  const [displayB5, setDisplayB5] = useState('none')

  const [displayS4, setDisplayS4] = useState('none')
  const [displayS5, setDisplayS5] = useState('')

  const [rotate4, setRotate4] = useState('rotate(-270deg)')
  const [rotate5, setRotate5] = useState('')
  document.querySelector('html').style.overflowY = "visible";



  function Button1() {

    if (displayB1 === 'none') {

      setRotate1('rotate(-270deg)')
      setDisplayB1('flex')
      setDisplayS1('none')

      setDisplayB2('none')
      setDisplayS2('')
      setRotate2('')

      setDisplayB3('none')
      setDisplayS3('')
      setRotate3('')
    }
    else {
      setDisplayB1('none')
      setDisplayS1('')
      setRotate1('')
      setBoxshadow('')

    }

  }
  function Button2() {
    if (displayB2 === 'none') {

      setDisplayB1('none')
      setDisplayS1('')
      setRotate1('')

      setDisplayB2('flex')
      setDisplayS2('none')
      setRotate2('rotate(-270deg)')

      setDisplayB3('none')
      setDisplayS3('')
      setRotate3('')

    }
    else {
      setDisplayB2('none')
      setDisplayS2('')
      setRotate2('')
    }
  }
  function Button3() {
    if (displayB3 === 'none') {

      setDisplayB1('none')
      setDisplayS1('')
      setRotate1('')

      setDisplayB2('none')
      setDisplayS2('')
      setRotate2('')

      setDisplayB3('flex')
      setDisplayS3('none')
      setRotate3('rotate(-270deg)')


    }
    else {
      setDisplayB3('none')
      setDisplayS3('')
      setRotate3('')
    }
  }
  function Button4() {
    if (displayB4 === 'none') {
      setRotate4('rotate(-270deg)')
      setDisplayB4('flex')
      setDisplayS4('none')

      setDisplayB5('none')
      setDisplayS5('')
      setRotate5('')

    }
    else {
      setDisplayB4('none')
      setDisplayS4('')
      setRotate4('')
    }
  }
  function Button5() {
    if (displayB5 === 'none') {
      setRotate4('')
      setDisplayB4('none')
      setDisplayS4('')

      setDisplayB5('flex')
      setDisplayS5('none')
      setRotate5('rotate(-270deg)')

    }
    else {
      setDisplayB5('none')
      setDisplayS5('')
      setRotate5('')
    }
  }

  return (
    <>
      <motion.div className='slides'
        initial={{ opacity: 0, translateX: 1000 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.5 }}
        exit={{ opacity: 0, translateX: -1000 }} >
        <motion.div className='jorney'
          initial={{ borderRadius: "50%", scale: 0.2, width: 600, rotate: 180 }}
          animate={{ borderRadius: "2%", scale: 1, width: 900, rotate: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div className='Estudos'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Title title={'Aprendizados()'} chaves={'{'} color={'#696383'} />
            <div className='Aprendido'>


              <li>
                <button className='seta' onClick={Button1} style={{ transform: `${rotate1}` }}>
                  <i class="fa-solid fa-angle-right" id="seta1"></i>
                </button>
                <div className='A-text'>
                  <h5 style={{ color: '#3da2e1' }}>Cesuca <span style={{ display: `${displayS1}` }}>...</span></h5>
                </div>
              </li>
              <div className='resumo' style={{ display: `${displayB1}` }}>
                <span style={{ color: '#df62ab', fontSize: '18px' }}>Cursando: <span style={{ color: '#ea862a', fontSize: '15px' }}>Ciência da Computação</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Periodo: <span style={{ color: '#ea862a', fontSize: '15px' }}>4 semestres</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Ano: <span style={{ color: '#ea862a', fontSize: '15px' }}>2022-</span></span>

                <p style={{ color: '#eacdcd', fontSize: 14 }}>Mudei para o curso de Ciência da Computação em 2022, buscando um conhecimento mais abrangente em comparação com o curso de Tecnólogo. Estou cursando até o presente momento em 2024.</p>
              </div>




              <li>
                <button className='seta' onClick={Button2} style={{ transform: `${rotate2}` }}>
                  <i class="fa-solid fa-angle-right" id="seta2"></i>
                </button>
                <div className='A-text'>
                  <h5 style={{ color: '#3da2e1' }}>UniRitter <span style={{ display: `${displayS2}` }}>...</span></h5>
                </div>
              </li>
              <div className='resumo' style={{ display: `${displayB2}` }}>
                <span style={{ color: '#df62ab', fontSize: '18px' }}>Cursado: <span style={{ color: '#ea862a', fontSize: '15px' }}>Analise e desenvolvimento de sistemas</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Periodo: <span style={{ color: '#ea862a', fontSize: '15px' }}>6 semestres</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Ano: <span style={{ color: '#ea862a', fontSize: '15px' }}>2018-2021</span></span>

                <p style={{ color: '#eacdcd', fontSize: 14 }}>Meu início no aprendizado foi em Ads, mas ao longo dos semestres, percebi que o que estava aprendendo não era suficiente para minha formação. Diante disso, tomei a decisão de me transferir para Ciência da Computação em 2022.</p>
              </div>



              <li>
                <button className='seta' onClick={Button3} style={{ transform: `${rotate3}` }}>
                  <i class="fa-solid fa-angle-right" id="seta3"></i>
                </button>
                <div className='A-text'>
                  <h5 style={{ color: '#3da2e1' }}>Senai <span style={{ display: `${displayS3}` }}>...</span></h5>
                </div>
              </li>
              <div className='resumo' style={{ display: `${displayB3}` }}>
                <span style={{ color: '#df62ab', fontSize: '18px' }}>Cursando: <span style={{ color: '#ea862a', fontSize: '15px' }}>Mecânico de manutenção de máquinas industriais</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Periodo: <span style={{ color: '#ea862a', fontSize: '15px' }}>Finalizado</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Ano: <span style={{ color: '#ea862a', fontSize: '15px' }}>2016-2017</span></span>

                <p style={{ color: '#eacdcd', fontSize: 14 }}>Curso focado na fabricação de peças e manutenção de máquinas industriais, com ênfase em atividades práticas realizadas em ambientes industriais reais. Durante o curso, foi desenvolvido um entendimento abrangente sobre o funcionamento de fábricas, normas de segurança do trabalho, responsabilidade profissional e a importância do trabalho em equipe.</p>
              </div>
            </div>
            <Title chaves={'}'} color={'#696383'} />

          </motion.div>

          <motion.div className='Trabalho'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Title title={'Trabalhos()'} chaves={'{'} color={'#696383'} />
            <div className='Aprendido'>


              <li>
                <div className='seta' onClick={Button4} style={{ transform: `${rotate4}` }}>
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className='A-text'>
                  <h5 style={{ color: '#3da2e1' }}>Espaço móveis <span style={{ display: `${displayS4}` }}>...</span></h5>
                </div>
              </li>
              <div className='resumo' style={{ display: `${displayB4}` }}>
                <span style={{ color: '#df62ab', fontSize: '18px' }}>Cargo: <span style={{ color: '#ea862a', fontSize: '15px' }}>Sócio</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>periodo: <span style={{ color: '#ea862a', fontSize: '15px' }}>2018-2023</span></span>

                <p style={{ color: '#eacdcd', fontSize: 14 }}>Meu primeiro trabalho foi como sócio em uma loja de móveis, onde eu realizava vendas e participava da administração. Além disso, desenvolvi um site para a loja, proporcionando uma nova fonte de receita para o negócio.</p>
              </div>

              <li>
                <div className='seta' onClick={Button5} style={{ transform: `${rotate5}` }}>
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className='A-text'>
                  <h5 style={{ color: '#3da2e1' }}>Desenvolvedor<span style={{ display: `${displayS5}` }}>...</span></h5>
                </div>
              </li>
              <div className='resumo' style={{ display: `${displayB5}` }}>
                <span style={{ color: '#df62ab', fontSize: '18px' }}>Cargo: <span style={{ color: '#ea862a', fontSize: '15px' }}>Autonomo</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Periodo: <span style={{ color: '#ea862a', fontSize: '15px' }}>2022-2024</span></span>

                <p style={{ color: '#eacdcd', fontSize: 14 }}>Trabalho como freelancer no desenvolvimento de projetos para pessoas físicas e jurídicas. Meus projetos abrangem desde portfólios simples até APIs mais complexas. Estou disponível para atender uma variedade de necessidades de desenvolvimento, adaptando-me às demandas específicas de cada cliente.</p>
              </div>

            </div>
            <Title chaves={'}'} color={'#696383'} />
          </motion.div>
        </motion.div>
        <motion.div className='reponsive-jorney'
        initial={{scale: 0.2, translateY: -100}}
        animate={{scale: 1, translateY: 0}}
        transition={{delay: 1}}
        >
          <div className='r-Estudos'>
            <Title title={'Estudos()'} chaves={'{'} color={'#696383'} />

            <div className='Aprendido'>

              <li>
                <button className='seta' onClick={Button1} style={{ transform: `${rotate1}` }}>
                  <i class="fa-solid fa-angle-right" id="seta1"></i>
                </button>
                <div className='A-text'>
                  <h5 style={{ color: '#3da2e1' }}>Cesuca <span style={{ display: `${displayS1}` }}>...</span></h5>
                </div>
              </li>
              <div className='resumo' style={{ display: `${displayB1}` }}>
                <span style={{ color: '#df62ab', fontSize: '18px' }}>Cursando: <span style={{ color: '#ea862a', fontSize: '15px' }}>Ciência da Computação</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Periodo: <span style={{ color: '#ea862a', fontSize: '15px' }}>4 semestres</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Ano: <span style={{ color: '#ea862a', fontSize: '15px' }}>2022-</span></span>

                <p style={{ color: '#eacdcd', fontSize: 14 }}>Mudei para o curso de Ciência da Computação em 2022, buscando um conhecimento mais abrangente em comparação com o curso de Tecnólogo. Estou cursando até o presente momento em 2024.</p>
              </div>

              <li>
                <button className='seta' onClick={Button2} style={{ transform: `${rotate2}` }}>
                  <i class="fa-solid fa-angle-right" id="seta2"></i>
                </button>
                <div className='A-text'>
                  <h5 style={{ color: '#3da2e1' }}>UniRitter <span style={{ display: `${displayS2}` }}>...</span></h5>
                </div>
              </li>
              <div className='resumo' style={{ display: `${displayB2}` }}>
                <span style={{ color: '#df62ab', fontSize: '18px' }}>Cursado: <span style={{ color: '#ea862a', fontSize: '15px' }}>Analise e desenvolvimento de sistemas</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Periodo: <span style={{ color: '#ea862a', fontSize: '15px' }}>6 semestres</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Ano: <span style={{ color: '#ea862a', fontSize: '15px' }}>2018-2021</span></span>

                <p style={{ color: '#eacdcd', fontSize: 14 }}>Meu início no aprendizado foi em Ads, mas ao longo dos semestres, percebi que o que estava aprendendo não era suficiente para minha formação. Diante disso, tomei a decisão de me transferir para Ciência da Computação em 2022.</p>
              </div>

              <li>
                <button className='seta' onClick={Button3} style={{ transform: `${rotate3}` }}>
                  <i class="fa-solid fa-angle-right" id="seta3"></i>
                </button>
                <div className='A-text'>
                  <h5 style={{ color: '#3da2e1' }}>Senai <span style={{ display: `${displayS3}` }}>...</span></h5>
                </div>
              </li>
              <div className='resumo' style={{ display: `${displayB3}` }}>
                <span style={{ color: '#df62ab', fontSize: '18px' }}>Cursando: <span style={{ color: '#ea862a', fontSize: '15px' }}>Mecânico de manutenção de máquinas industriais</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Periodo: <span style={{ color: '#ea862a', fontSize: '15px' }}>Finalizado</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Ano: <span style={{ color: '#ea862a', fontSize: '15px' }}>2016-2017</span></span>

                <p style={{ color: '#eacdcd', fontSize: 14 }}>Curso focado na fabricação de peças e manutenção de máquinas industriais, com ênfase em atividades práticas realizadas em ambientes industriais reais. Durante o curso, foi desenvolvido um entendimento abrangente sobre o funcionamento de fábricas, normas de segurança do trabalho, responsabilidade profissional e a importância do trabalho em equipe.</p>
              </div>

            </div>
            <Title chaves={'}'} color={'#696383'} />
          </div>
          <div className='r-Trabalho'>
            <Title title={'Trabalhos()'} chaves={'{'} color={'#696383'} />
            <div className='Aprendido'>


              <li>
                <div className='seta' onClick={Button4} style={{ transform: `${rotate4}` }}>
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className='A-text'>
                  <h5 style={{ color: '#3da2e1' }}>Espaço móveis <span style={{ display: `${displayS4}` }}>...</span></h5>
                </div>
              </li>
              <div className='resumo' style={{ display: `${displayB4}` }}>
                <span style={{ color: '#df62ab', fontSize: '18px' }}>Cargo: <span style={{ color: '#ea862a', fontSize: '15px' }}>Sócio</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>periodo: <span style={{ color: '#ea862a', fontSize: '15px' }}>2018-2023</span></span>

                <p style={{ color: '#eacdcd', fontSize: 14 }}>Meu primeiro trabalho foi como sócio em uma loja de móveis, onde eu realizava vendas e participava da administração. Além disso, desenvolvi um site para a loja, proporcionando uma nova fonte de receita para o negócio.</p>
              </div>

              <li>
                <div className='seta' onClick={Button5} style={{ transform: `${rotate5}` }}>
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className='A-text'>
                  <h5 style={{ color: '#3da2e1' }}>Desenvolvedor<span style={{ display: `${displayS5}` }}>...</span></h5>
                </div>
              </li>
              <div className='resumo' style={{ display: `${displayB5}` }}>
                <span style={{ color: '#df62ab', fontSize: '18px' }}>Cargo: <span style={{ color: '#ea862a', fontSize: '15px' }}>Autonomo</span></span>

                <span style={{ color: '#df62ab', fontSize: '18px' }}>Periodo: <span style={{ color: '#ea862a', fontSize: '15px' }}>2022-2024</span></span>

                <p style={{ color: '#eacdcd', fontSize: 14 }}>Trabalho como freelancer no desenvolvimento de projetos para pessoas físicas e jurídicas. Meus projetos abrangem desde portfólios simples até APIs mais complexas. Estou disponível para atender uma variedade de necessidades de desenvolvimento, adaptando-me às demandas específicas de cada cliente.</p>
              </div>

            </div>
            <Title chaves={'}'} color={'#696383'} />
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Jorney