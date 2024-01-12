import { Link, useLocation} from "react-router-dom";
import './Menu.css'
import About from '../routes/About'
import Skils from '../routes/Skils'
import Study from '../routes/Jorney'
import Project from '../routes/Project'
import { useState, useEffect } from "react";


const Menu = () => {


    const [Width, setWidth] = useState("120px");
    const [Width1, setWidth1] = useState("25px");
    const [Width2, setWidth2] = useState("25px");
    const [Width3, setWidth3] = useState("25px");
  
    const [Height, setHeight] = useState("60px");
    const [Height1, setHeight1] = useState("25px");
    const [Height2, setHeight2] = useState("25px");
    const [Height3, setHeight3] = useState("25px");
  
    const [CVisibility, setCvisibility] = useState("visible");
    const [CVisibility1, setCvisibility1] = useState("hidden");
    const [CVisibility2, setCvisibility2] = useState("hidden");
    const [CVisibility3, setCvisibility3] = useState("hidden");
  
    const [Radius, setRadius] = useState("5%");
    const [Radius1, setRadius1] = useState("50%");
    const [Radius2, setRadius2] = useState("50%");
    const [Radius3, setRadius3] = useState("50%");
  
    const [anime, setAnime] = useState("");
    const [anime1, setAnime1] = useState("scale 1s infinite");
    const [anime2, setAnime2] = useState("scale 1s infinite");
    const [anime3, setAnime3] = useState("scale 1s infinite");


    const [back, setback] = useState("#fff");
    const [back1, setback1] = useState("");
    const [back2, setback2] = useState("");
    const [back3, setback3] = useState("");



    function click1(){
      setWidth("120px")
      setWidth1("25px")
      setWidth2("25px")
      setWidth3("25px")

      setHeight("60px")
      setHeight1("25px")
      setHeight2("25px")
      setHeight3("25px")

      setCvisibility("visible")
      setCvisibility1("hidden")
      setCvisibility2("hidden")
      setCvisibility3("hidden")

      setRadius("5%")
      setRadius1("50%")
      setRadius2("50%")
      setRadius3("50%")

      setAnime("")
      setAnime1("scale 1s infinite")
      setAnime2("scale 1s infinite")
      setAnime3("scale 1s infinite")

      setback('#fff')
      setback1("")
      setback2("")
      setback3("")
    }
    function click2(){
      setWidth("25px")
      setWidth1("120px")
      setWidth2("25px")
      setWidth3("25px")

      setHeight("25px")
      setHeight1("60px")
      setHeight2("25px")
      setHeight3("25px")

      setCvisibility("hidden")
      setCvisibility1("visible")
      setCvisibility2("hidden")
      setCvisibility3("hidden")

      setRadius("50%")
      setRadius1("5%")
      setRadius2("50%")
      setRadius3("50%")

      setAnime("scale 1s infinite")
      setAnime1("")
      setAnime2("scale 1s infinite")
      setAnime3("scale 1s infinite")

      setback('')
      setback1("#fff")
      setback2("")
      setback3("")
    }
    function click3(){
      setWidth("25px")
      setWidth1("25px")
      setWidth2("120px")
      setWidth3("25px")

      setHeight("25px")
      setHeight1("25px")
      setHeight2("60px")
      setHeight3("25px")

      setCvisibility("hidden")
      setCvisibility1("hidden")
      setCvisibility2("visible")
      setCvisibility3("hidden")

      setRadius("50%")
      setRadius1("50%")
      setRadius2("5%")
      setRadius3("50%")

      setAnime("scale 1s infinite")
      setAnime1("scale 1s infinite")
      setAnime2("")
      setAnime3("scale 1s infinite")

      setback('')
      setback1("")
      setback2("#fff")
      setback3("")
    }
    function click4(){
      setWidth("25px")
      setWidth1("25px")
      setWidth2("25px")
      setWidth3("120px")

      setHeight("25px")
      setHeight1("25px")
      setHeight2("25px")
      setHeight3("60px")

      setCvisibility("hidden")
      setCvisibility1("hidden")
      setCvisibility2("hidden")
      setCvisibility3("visible")

      setRadius("50%")
      setRadius1("50%")
      setRadius2("50%")
      setRadius3("5%")

      setAnime("scale 1s infinite")
      setAnime1("scale 1s infinite")
      setAnime2("scale 1s infinite")
      setAnime3("")

      setback('')
      setback1("")
      setback2("")
      setback3("#fff")
    }

    const location = useLocation();
    
    useEffect(() => {
      if(location.pathname === "/Jorney"){
        click3();
      }
      if(location.pathname === "/"){
        click1();
      }
      if(location.pathname === "/Skils"){
        click2();
      }
      if(location.pathname === "/Project"){
        click4();
      }
    },[])
    

  return (
    <div className="container-menu">
      <menu>
        <Link to='/'><li>
          <button id="link1" className="link" onClick={click1} style={{width: `${Width}`, height: `${Height}`, borderRadius: `${Radius}`, contentVisibility: `${CVisibility}`, animation: `${anime}`, backgroundColor: `${back}`}}>
            About
            </button>
          </li></Link>

        <Link to='/Skils'><li>
          <button id="link2" className="link" onClick={click2} style={{width: `${Width1}`, height: `${Height1}`, borderRadius: `${Radius1}`, contentVisibility: `${CVisibility1}`, animation: `${anime1}`, backgroundColor: `${back1}`}}>
            Skils
            </button>
          </li></Link>

        <Link to='/Jorney'><li>
          <button id="link3" className="link" onClick={click3} style={{width: `${Width2}`, height: `${Height2}`, borderRadius: `${Radius2}`, contentVisibility: `${CVisibility2}`, animation: `${anime2}`, backgroundColor: `${back2}`}}>
            Jorney
          </button>
          </li></Link>

        <Link to='/Project'><li>
          <button id="link4" className="link" onClick={click4} style={{width: `${Width3}`, height: `${Height3}`, borderRadius: `${Radius3}`, contentVisibility: `${CVisibility3}`, animation: `${anime3}`, backgroundColor: `${back3}`}}>
            Project
            </button>
          </li></Link>
      </menu>
    </div>
  )
}

export default Menu