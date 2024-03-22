import { useState } from 'react'
import React from 'react';
import './App.css'
import { CSSTransition } from 'react-transition-group';
import Logo from "./assets/burger.svg?react";
const ANIMATION_PERIOD = 300;

const burgerIcon = () => {<svg width="800px" height="800px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/><path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/><path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/></svg>}

function App() {
  const [openProps, setOpenProps] = useState([true, true, true]);
  const [expandedProps, setExpandedProps] = useState([false, false, false])

  function openProp(index:number){
    const temp = [false, false, false];
    temp[index] = true;
    console.log("Open Prop");
    setOpenProps([...temp]);
    setTimeout(() => {setExpandedProps([...temp])}, ANIMATION_PERIOD);
  }

  function closeProp(){
    console.log("Close Prop");
    setExpandedProps([false, false, false]);
    setTimeout(() => {setOpenProps([true, true, true])}, ANIMATION_PERIOD);
  }

  function Navbar(){
    function MenuButton(){
      return(
        <div className='nav-menu-button'>
          <Logo>
        </div>
      )
    }
    return(
      <nav>
        <MenuButton>
        </MenuButton>
      </nav>
    )
  }

  function ExpandableSection({expanded, children, widget}: {expanded: boolean, children?:React.ReactNode, widget?:React.ReactNode}){
    return(
      <>
        <div className='widget-element'>{widget}</div>
        <CSSTransition in={expanded} unmountOnExit timeout={ANIMATION_PERIOD} classNames="article-load">
          <article onClick={() => closeProp()}>{children}</article>
        </CSSTransition>
      </>
    )
  }

  const aboutWidget = <section className='about-widget' onClick={() => openProp(0)}>
    <h1>Garland High School Tennis</h1>
    <p>This is the webpage for the garland Tennis program</p>
  </section>
  const enrollWidget = <section className='enroll-widget' onClick={() => openProp(1)}>
  <p>Play with friends, stay in shape, and have fun. All students are welcome!</p>
  <p>Learn how to join today</p>
  <button>Join Now!</button>
  </section>
  
  return (
    <div>
        <Navbar></Navbar>
        {/* About */}
        <CSSTransition in={openProps[0]} unmountOnExit timeout={ANIMATION_PERIOD} classNames="my-node">
          <div>
            <ExpandableSection expanded={expandedProps[0]} widget={aboutWidget}>
              <section>Here we talk more about the tennis program</section>
            </ExpandableSection>
          </div>
        </CSSTransition>
        {/* Enroll */}
        <CSSTransition in={openProps[1]} unmountOnExit timeout={ANIMATION_PERIOD} classNames="my-node">
          <div>
            <ExpandableSection expanded={expandedProps[0]} widget={enrollWidget}>
              <section>Here we talk more about the tennis program</section>
            </ExpandableSection>
          </div>
        </CSSTransition>
        {/* Bulletin */}
        <CSSTransition in={openProps[2]} unmountOnExit timeout={ANIMATION_PERIOD} classNames="my-node">
          <div onClick={() => {openProp(2)}}>
            <p>Boo!</p>
          </div>
        </CSSTransition>
        {/* For Parents */}
        {/* For Students */}
        {/* Contact Us */}
    </div>
  );
}

export default App
