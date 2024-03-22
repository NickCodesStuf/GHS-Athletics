import React, { useState } from 'react'
import './App.css'
// import ExpandableSection from './ExpandableSection'
import NavBar from './NavBar'
import { CSSTransition } from 'react-transition-group';

const ANIMATION_PERIOD = 500;

function App() {
  const [visibleWidgets, setVisibleWidgets] = useState([true]);
  const [expandedWidgets, setExpandedWidgets] = useState([true])

  const aboutWidget = <section className='about-widget' onClick={() => openWidget(0)}>Garland High Tennis</section>
  const enrollWidget = <section onClick={() => openWidget(1)}>Enroll Today</section>
  const bulletinWidget = <section onClick={() => openWidget(2)}>News Bulletin</section>


  function openWidget(index: number){
    if (index === -1){
      setExpandedWidgets([false, false, false])
      setTimeout(()=>{setVisibleWidgets([true, true, true])}, ANIMATION_PERIOD)
    } else {
      const openState = [false, false, false];
      openState[index] = true;
      setVisibleWidgets([...openState])// do not forget to copy the values
      setTimeout(()=>{setExpandedWidgets([...openState])}, ANIMATION_PERIOD)
    }
  }

  return(
    <>
      <NavBar openWidget={openWidget}></NavBar>
      <CSSTransition in={visibleWidgets[0]} classNames="my-node" unmountOnExit onExit={()=>{console.log("Exiting!")}} timeout={ANIMATION_PERIOD}>
        <ExpandableSection widget={aboutWidget} visible={visibleWidgets[0]}>
          <CSSTransition in={expandedWidgets[0]} classNames="my-node" unmountOnExit onEnter={()=>{console.log("Expanding!")}} timeout={ANIMATION_PERIOD}>
            <article>
              <section>I like nerds</section>
              <section>I am a nerd</section>
            </article>
          </CSSTransition>
        </ExpandableSection>
      </CSSTransition>
      <CSSTransition in={visibleWidgets[1]} classNames="my-node" unmountOnExit onExit={()=>{console.log("Exiting!")}} timeout={ANIMATION_PERIOD}>
        <ExpandableSection widget={enrollWidget} visible={visibleWidgets[1]}>
          <CSSTransition in={expandedWidgets[1]} classNames="my-node" unmountOnExit onEnter={()=>{console.log("Expanding!")}} timeout={ANIMATION_PERIOD}>
            <article>
              <section>Join Tennis</section>
              <section>Tennis is great</section>
            </article>
          </CSSTransition>
        </ExpandableSection>
      </CSSTransition>
      <CSSTransition in={visibleWidgets[2]} classNames="my-node" unmountOnExit onExit={()=>{console.log("Exiting!")}} timeout={ANIMATION_PERIOD}>
        <ExpandableSection widget={bulletinWidget} visible={visibleWidgets[2]}>
          <CSSTransition in={expandedWidgets[2]} classNames="my-node" unmountOnExit onEnter={()=>{console.log("Expanding!")}} timeout={ANIMATION_PERIOD}>
            <article>
              <section>itz tournament day my dudes</section>
            </article>
          </CSSTransition>
        </ExpandableSection>
      </CSSTransition>
    </>
  )
}

function ExpandableSection({widget, children}:{widget: React.ReactNode, children?: React.ReactNode, visible: boolean}){
  return(
    <div className='my-node'>
      { widget }
      { children }
    </div>
  )
}

export default App
