import './Logo.css'
import img from '../assets/right-arrow.png'

const Logo = () => {
    return (

        <div className="logo">
            <div className="seta-esquerda">
                <div className='setaimg'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="logo-titulo">

                <div className="line"></div>
                <div className='nome'>
                    <div className='luiz'>
                        <h1>Luiz</h1>
                    </div>
                    <div className='gustavo'>
                        <h2>Gustavo</h2>
                    </div>
                    <div className='moraes'>
                        <h3>Moraes</h3>
                    </div>
                </div>

            </div>
            <div className='seta-direita'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
export default Logo;