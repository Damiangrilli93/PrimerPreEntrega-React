import React from 'react'
import styled from 'styled-components';

const BurgerButton = (props) => {
  return (
    <Burger>
        <div onClick={props.handleClick} 
              className={`menu-toggle ${props.clicked ? 'open' : ''}`}
        >
            <div id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="cross">
                <span></span>
                <span></span>
            </div>
        </div>
    </Burger>
  )
}

export default BurgerButton;



const Burger = styled.div`
* {
    transition:.25s ease-in-out;
    box-sizing:border-box;
  }
  
  body {
    background:#d9e4ea;
  }
  
  span {
    display:block;
    background:#566973;
    border-radius:2px;
  }
  
  .menu-toggle {
    width:50px;
    height:50px;
    margin:50px auto;
    position:relative;
    position:relative;
    cursor:pointer;
    background:rgba(255,255,255,.4);
    border-radius:5px;
    &:hover {
      background:rgba(255,255,255,.8);
    }
    #hamburger {
      position:absolute;
      height:100%;
      width:100%;
      span {
        width:30px;
        height:2px;
        position:relative;
        top:12px;
        left:10px;
        margin:5px 0;
        &:nth-child(1){
          transition-delay:.5s;
        }
        &:nth-child(2){
          transition-delay:.625s;
        }
        &:nth-child(3){
          transition-delay:.75s;
        }
      }
    }
    #cross {
      position:absolute;
      height:100%;
      width:100%;
      transform:rotate(45deg);
      span{
        &:nth-child(1){
          height:0%;
          width:4px;
          position:absolute;
          top:10%;
          left:24px;
          transition-delay:0s;
        }
        &:nth-child(2){
          width:0%;
          height:4px;
          position:absolute;
          left:10%;
          top:24px;
          transition-delay:.25s;
        }
      }
    }
  }
  
  .menu-toggle.open {
    #hamburger {
      span {
        width:0%;
        &:nth-child(1){
          transition-delay:0s;
        }
        &:nth-child(2){
          transition-delay:.125s;
        }
        &:nth-child(3){
          transition-delay:.25s;
        }
      }
    }
    #cross {
      span {
        &:nth-child(1){
          height:80%;
          transition-delay:.625s;
        }
      }
      span {
        &:nth-child(2){
          width:80%;
          transition-delay:.375s;
        }
      }    
    }
  }
  
`