import './About.css'
import Title from '../components/Title'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
let img = 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXNwYSVDMyVBN298ZW58MHx8MHx8fDA%3D'

const About = () => {


    useEffect(() => {
        document.querySelector('html').style.overflowY = "hidden";
    }, [])
    return (

        <>
            <motion.div className='slides'
                initial={{ opacity: 0, translateY: 1000 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ translateX: -1000, opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='about'>

                    <motion.div className='container-img'
                        initial={{ translateX: 280, translateY: 30, height: 500, zIndex: 3 }}
                        animate={{ translateX: 0 }}
                        transition={{ duration: 0.5, delay: 2 }}
                    >
                        <motion.img src={img} alt=""
                            initial={{ height: 450 }}
                            animate={{ height: 500, marginBottom: 50 }}
                            transition={{ delay: 2.5, duration: 1 }}
                        />
                    </motion.div>

                    <motion.div className='container-text'
                        initial={{ width: 500, translateX: -200 }}
                        animate={{ translateX: 0 }}
                        transition={{ duration: 0.8, delay: 2 }}
                    >

                        <Title title='Desenvolvedor Web    {' />
                        
                        <motion.ul className='atributos'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 4 }}
                        >
                            <li><span>Nome:</span> <p>Luiz Gustavo da Silva Moraes;</p></li>
                            <li><span>Nacimento:</span> <p>04/12/2000;</p></li>
                            <li><span>Estudo:</span> <p>Ciencia da computação;</p></li>
                            <li><span>Area:</span> <p>Desenvolver Front-end;</p></li>

                            <li>
                                <span>Resumo:</span>
                                <div className='c-text'>
                                    <p>Programador front-end criativo, com muito experiência teórica e prática. Possuo foco em front-end e já executei trabalhos de desenvolvimento web como freelancer, utilizando React e Frame motion. Além disso, desejo continuar aprimorando minhas habilidades e me tornar capaz de desenvolver APIs web e Mobile de forma eficiente e em grande escala.</p>
                                </div>
                            </li>
                        </motion.ul>
                        <Title title={'}'} />
                    </motion.div>
                </div>
            </motion.div>
        </>

    )
}
export default About