import './Project.css'
import { useEffect, useState } from 'react';
import Title from '../components/Title'
import Repositorios from "../components/Respositorio";
import ItemRepositorio from "../components/ItemRepositorio";
import logo from '../assets/logolgm (1).png'

import { delay, motion } from 'framer-motion'

function Project() {


  const [user, setUser] = useState("luizGMPortfolio");
  const [currentUser, setCurrentUser] = useState(null);
  const [mudaFiltro, setMudaFiltro] = useState('');
  document.querySelector('html').style.overflowY = "visible";

  const [reposFixo, setReposFixo] = useState([]);
  const [repos, setRepos] = useState([]);


  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/luizGMPortfolio`)
    const newUser = await userData.json();
    const userRepos = await fetch(newUser.repos_url);
    const repositorios = await userRepos.json();
    setReposFixo(repositorios)
    setRepos(repositorios)
    setCurrentUser(newUser)
  }

  const filtragem = async (value) => {

    if (value === 'Python') {
      var filtro = reposFixo.filter(reposFixo => (reposFixo.language === 'Python'));
      setRepos(filtro);
    }
    else if (value === 'HTML') {
      var filtro = reposFixo.filter(reposFixo => (reposFixo.language === 'HTML'));
      setRepos(filtro);
    }
    else if (value === 'JavaScript') {
      var filtro = reposFixo.filter(reposFixo => (reposFixo.language === 'JavaScript'));
      setRepos(filtro);
    }
    else if (value === 'React') {
      var filtro = reposFixo.filter(reposFixo => (reposFixo.language === 'React'));
      setRepos(filtro);
    }
    else if (value === 'PHP') {
      var filtro = reposFixo.filter(reposFixo => (reposFixo.language === 'PHP'));
      setRepos(filtro);
    }
    else if (value === 'TypeScript') {
      var filtro = reposFixo.filter(reposFixo => (reposFixo.language === 'TypeScript'));
      setRepos(filtro);
    }
    else if (value === 'Vue') {
      var filtro = reposFixo.filter(reposFixo => (reposFixo.language === 'Vue'));
      setRepos(filtro);
    }
    else if (value === 'CSS') {
      var filtro = reposFixo.filter(reposFixo => (reposFixo.language === 'CSS'));
      setRepos(filtro);
    }
    else {
      setRepos(reposFixo);
    }
  }

  useEffect(() => {
    handleGetData();
  }, [])

  return (
    <>
      <motion.div className='slides'
        initial={{ opacity: 0, translateX: 1000 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -1000 }}
        transition={{ delay: 0.5 }}
      >

        <motion.div className='Project'
          initial={{ borderRadius: "50%", scale: 0.5, width: 300, rotate: 30, height: 300 }}
          animate={{ borderRadius: "20px", scale: 1, rotate: 0, width: 1200, height: "95%" }}
          transition={{ delay: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Title title={'Projetos'} chaves={'{'} />
          </motion.div>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <p className='resumoProjetos' style={{ fontSize: '18px' }}>
              Aqui, você pode conferir meus projetos em desenvolvimento e finalizados.
              Já trabalhei em projetos de front-end, back-end, full-stack, mobile e para desktop.
              Além disso, criei um site próprio para minha empresa pessoal. Todos os meus repositórios estão disponíveis <a href="#rs-titulo">AQUI</a>
            </p>
          </motion.div>

          <motion.div className='icones'
            initial={{ opacity: 0, translateY: 1000 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.2 }}
          >
            <a className='git' href='https://github.com/luizGMPortfolio' target='_blank'>
              <div className='git-c'>
                <i class="fa-brands fa-github fa-2xl"></i>
              </div>
              <p style={{ fontSize: '13px' }}>
                Acesse meu perfil no GitHub para ver meus codigos ja desenvolvidos</p>
            </a>
            <a className='linkin' href='https://vercel.com/lgm-potifolio' target='_blank'>
              <div className='linkin-c'>
              <i class="fa-brands fa-linkedin fa-2xl"></i>
              </div>
              <p style={{ fontSize: '13px' }}>
                Acesse minha pagina do linkedin para conferir meus perfil profissional</p>
            </a>
          </motion.div>

          <motion.div className='espacial'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.7 }}
          >
            <div className='esp-c'>
              <div className='stars5'></div>
              <div className='stars6'></div>
              <div className='espc-cont'>
                <div className='ec-logo'>
                  <img src={logo} alt="" />
                </div>
                <div className='ec-text'>
                  <p>
                    Projeto especial desenvolvido e publicado para minha empresa pessoal de desenvolvimento web.</p>
                </div>
                <div className='ec-button'>
                  <a href='https://lgm-desenvolvedor.vercel.app/' target='_blank'>Visitar</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className='resp'
            initial={{ display: "none" }}
            animate={{ display: "grid" }}
            transition={{ delay: 3 }}
          >
            <div className='resp-sup'>
              <div className='rs-titulo' id='rs-titulo'>
                <Title title={'Repositótio'}></Title>
              </div>
              <div className='rs-select'>
                <select name="lenguages" id="select" onChange={(e) => filtragem(e.target.value)}>
                  <option value="todas">Todas</option>
                  <option value="HTML">HTML</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React">React</option>
                  <option value="Vue">Vue</option>
                  <option value="PHP">PHP</option>
                  <option value="TypeScript">TypeScript</option>
                  <option value="CSS">CSS</option>
                </select>
              </div>
            </div>

            <Repositorios>
              {repos.map(rep => (
                <ItemRepositorio
                  key={rep.id}
                  url={rep.html_url}
                  nameProject={rep.name}
                  descProject={rep.description}
                  languages={rep.language ? rep.language : "não deifinida"}
                />))}
            </Repositorios>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Title chaves={'}'} />
          </motion.div>
        </motion.div>
      </motion.div>

    </>
  )
}

export default Project