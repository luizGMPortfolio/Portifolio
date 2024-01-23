import './Skills.css'
import Title from '../components/Title'

import sql from '../assets/mysql.png'
import html from '../assets/html-5.png'
import css from '../assets/css.png'
import node from '../assets/node-js.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import Python from '../assets/python.png'
import C from '../assets/c-.png'
import { delay, motion } from 'framer-motion'

function Skils() {

  return (
    <>
      <motion.div className='skils'
        initial={{ translateX: 1000 }}
        animate={{ translateX: 0 }}
        exit={{ opacity: 0, translateX: -1000 }}
        transition={{ delay: 0.5 }}
      >

        <motion.div className='slides'
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div className='Skills'
            initial={{ borderRadius: "50%", width: 600, rotate: 180 }}
            animate={{ borderRadius: "2%", rotate: 0, width: 800 }}
            transition={{ delay: 1 }}
          >

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Title title={'Habilidades {'} />
            </motion.div>

            <motion.div className='container'
            >
              <div className='lang'>
                <ul className='Linguagens'>

                  <motion.li className='linguagem'
                    initial={{ translateX: 1000, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.1 }}
                  >
                    <div>
                      <img src={html} alt="" />
                    </div>
                    <div>
                      <h5>Html</h5>
                      <div className='porcentagem'>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                      </div>
                      <h5 className='num'>9.0</h5>
                    </div>

                  </motion.li>
                  <motion.li className='linguagem'
                    initial={{ translateX: 1000, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.1 }}
                  >
                    <div>
                      <img src={css} alt="" />
                    </div>
                    <div>
                      <h5>Css</h5>
                      <div className='porcentagem'>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                      </div>
                      <h5 className='num'>9.0</h5>
                    </div>

                  </motion.li>
                  <motion.li className='linguagem'
                    initial={{ translateX: 1000, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    transition={{ delay: 2.6, duration: 0.1 }}
                  >
                    <div>
                      <img src={js} alt="" />
                    </div>
                    <div>
                      <h5>JavaScript</h5>
                      <div className='porcentagem'>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                      </div>
                      <h5 className='num'>7.0</h5>
                    </div>
                  </motion.li>
                  <motion.li className='linguagem'
                    initial={{ translateX: 1000, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    transition={{ delay: 2.8, duration: 0.1 }}
                  >
                    <div>
                      <img src={Python} alt="" />
                    </div>
                    <div>
                      <h5>Python</h5>
                      <div className='porcentagem'>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>

                      </div>
                      <h5 className='num'>6.0</h5>
                    </div>
                  </motion.li>


                </ul>
                <ul className='Linguagens'>


                  <motion.li className='linguagem'
                    initial={{ opacity: 0, translateX: 1000 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.1, delay: 3 }}
                  >
                    <div>
                      <img src={react} alt="" />
                    </div>
                    <div>
                      <h5>React</h5>
                      <div className='porcentagem'>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>

                      </div>
                      <h5 className='num'>7.0</h5>
                    </div>
                  </motion.li>
                  <motion.li className='linguagem'
                    initial={{ opacity: 0, translateX: 1000 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.1, delay: 3.2 }}
                  >
                    <div>
                      <img src={sql} alt="" />
                    </div>
                    <div>
                      <h5>SQL</h5>
                      <div className='porcentagem'>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>

                      </div>
                      <h5 className='num'>4.0</h5>
                    </div>

                  </motion.li>
                  <motion.li className='linguagem'
                    initial={{ opacity: 0, translateX: 1000 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.1, delay: 3.4 }}
                  >
                    <div>
                      <img src={node} alt="" />
                    </div>
                    <div>
                      <h5>NodeJs</h5>
                      <div className='porcentagem'>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>

                      </div>
                      <h5 className='num'>5.0</h5>
                    </div>
                  </motion.li>
                  <motion.li className='linguagem'
                    initial={{ opacity: 0, translateX: 1000 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.1, delay: 3.6 }}
                  >
                    <div>
                      <img src={C} alt="" />
                    </div>
                    <div>
                      <h5>C++</h5>
                      <div className='porcentagem'>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                        <i class="fa-solid fa-square fa-lg"></i>
                      </div>
                      <h5 className='num'>6.0</h5>
                    </div>
                  </motion.li>
                </ul>

              </div>
              <motion.div className='subskils'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
              >
                <h2>Extras</h2>
                <ul>
                  <li><h5>Trabalho em equipe</h5></li>
                  <li><h5>Proativiade</h5></li>
                  <li><h5>comunicação</h5></li>
                  <li><h5>Criativo</h5></li>
                </ul>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Title title={'}'} />
            </motion.div>
          </motion.div>

          <div className='responsive-skills'>
            <Title title={'Habilidades {'} />
            <div className='r-container'>
              <ul className='r-c-lang'>
                <li>
                  <div className='r-c-l-img'>
                    <img src={html} alt="" />
                  </div>
                  <div className='r-c-l-porcent'>
                    <h5>Html</h5>
                    <div className='porcentagem'>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                    </div>
                    <h5 className='num'>6.0</h5>
                  </div>
                </li>
                <li>
                  <div className='r-c-l-img'>
                    <img src={react} alt="" />
                  </div>
                  <div className='r-c-l-porcent'>
                    <h5>React</h5>
                    <div className='porcentagem'>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                    </div>
                    <h5 className='num'>6.0</h5>
                  </div>
                </li>
                <li>
                <div className='r-c-l-img'>
                    <img src={css} alt="" />
                  </div>
                  <div className='r-c-l-porcent'>
                    <h5>CSS</h5>
                    <div className='porcentagem'>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                    </div>
                    <h5 className='num'>6.0</h5>
                  </div>
                </li>
                <li>
                <div className='r-c-l-img'>
                    <img src={sql} alt="" />
                  </div>
                  <div className='r-c-l-porcent'>
                    <h5>SQL</h5>
                    <div className='porcentagem'>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                    </div>
                    <h5 className='num'>6.0</h5>
                  </div>
                </li>
                <li>
                <div className='r-c-l-img'>
                    <img src={js} alt="" />
                  </div>
                  <div className='r-c-l-porcent'>
                    <h5>JavaScript</h5>
                    <div className='porcentagem'>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                    </div>
                    <h5 className='num'>6.0</h5>
                  </div>
                </li>
                <li>
                <div className='r-c-l-img'>
                    <img src={node} alt="" />
                  </div>
                  <div className='r-c-l-porcent'>
                    <h5>Node js</h5>
                    <div className='porcentagem'>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                    </div>
                    <h5 className='num'>6.0</h5>
                  </div>
                </li>
                <li>
                <div className='r-c-l-img'>
                    <img src={Python} alt="" />
                  </div>
                  <div className='r-c-l-porcent'>
                    <h5>Python</h5>
                    <div className='porcentagem'>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                    </div>
                    <h5 className='num'>6.0</h5>
                  </div>
                </li>
                <li>
                <div className='r-c-l-img'>
                    <img src={C} alt="" />
                  </div>
                  <div className='r-c-l-porcent'>
                    <h5>C++</h5>
                    <div className='porcentagem'>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                      <i class="fa-solid fa-square fa-xs"></i>
                    </div>
                    <h5 className='num'>6.0</h5>
                  </div>
                </li>
              </ul>
            </div>
            <Title title={'}'} />
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Skils