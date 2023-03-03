import React,{useState} from 'react'
import styled from 'styled-components';
import BurgerButton from '../../src/components/BurgerButton';    
import CartWidget from './CartWidget';


const NavBar = () => {

    const [clicked, setClicked] = useState(false)
    const [contador, setContador] = useState(0)
    
    const handleClick = () => {
        setClicked(!clicked) // !Clicked representa el valor negado de clicked, es decirt: cuando esta True lo pasa como falce y vice versa.
    }

    const handleClick2 = () => {
        setContador(contador + 1);
    }

    const handleClick3 = () => {
        setContador(contador - 1);
    }


  return (
    <>
      <NavContainer>
        <h2>Aberturas <span>Bodereau</span> </h2>
        <button onClick={handleClick2} className='btn-Comprar' >Comprar</button>
        <button onClick={handleClick3} className='btn-Comprar' >Borrar</button>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <a onClick={handleClick} href="https://plataforma-login.coderhouse.com/">home</a>
            <a onClick={handleClick} href="#h">shop</a>
            <a onClick={handleClick} href="#h">about</a>
            <a onClick={handleClick} href="#h">contact</a>
            <a onClick={handleClick} href="#h"><CartWidget/> {contador} </a>
        </div>
        <div className='burger'>
            <BurgerButton clicked={clicked} handleClick={handleClick}></BurgerButton>
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default NavBar;


const NavContainer = styled.nav`
    h2{
        color: white;
        font-size: 30px;
        font-weight: 400;
        margin-left: 10px;
        span {
            font-weight: bold;
        }
    }
    padding : 5px;
    background-color: #333;
    display : flex;
    align-items : center;
    justify-content : space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 20px;
    }
    .links {
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        merging-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all 0.5s ease;
        a{
            color: white;
            font-size: 2rem;
            display: block;

        }
        @media(min-width: 768px) {
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
        }
    }
    .links.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 100%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            color: white;
            font-size: 30px;
            margin-top: 15px;
        }
    }

    .burger{
        @media (min-width: 768px){
            display: none;
        }
    }
`



const BgDiv = styled.div`
    background-color: #222;
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.6s ease;
    &.active {
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 1000px;
    }

`


