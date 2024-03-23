import React, { useState } from 'react'
import './App.css'
// import ExpandableSection from './ExpandableSection'
import NavBar from './NavBar'
import { CSSTransition } from 'react-transition-group';
import garlandHSLogo from './assets/ghsLogo.svg';
import enrollImage from './assets/tennisbin.jpg';
import line from './assets/line.svg';
import quotationMark from './assets/quotation-mark-svgrepo-com.svg';

const ANIMATION_PERIOD = 500;

function App() {


  const [visibleWidgets, setVisibleWidgets] = useState([true]);
  const [expandedWidgets, setExpandedWidgets] = useState([true])

  const aboutWidget = <section id="widget-0" className='widget about-widget' onClick={() => openWidget(0)}>
    <img className="logo" src={garlandHSLogo}></img>
    <h1 className='title' >Garland High School Tennis</h1>
    <p>The Garland HS Tennis program offers all of its students an unique outlet for athletic growth and friendly competition</p>
  </section>
  const enrollWidget = <section id="widget-1" className="widget enroll-widget" onClick={() => openWidget(1)}>
    <div className="infobox">
      <img className="divider" src={line}></img>
      <div className='quote-wrapper'>
        <img className="quotation quotation-left" src={quotationMark}></img>
        <p> Joining Tennis these days is easier than ever, there are just so many resources today!</p>
        <img className="quotation quotation-right" src={quotationMark}></img>
      </div>
    </div>
    <img src={enrollImage}></img>
  </section>
  const bulletinWidget = <section id="widget-2" onClick={() => openWidget(2)}>News Bulletin</section>

  function scrollToElement(id : string){
    console.log(id)
    const element = document.getElementById(id);
    console.log(element);
    element?.scrollIntoView({ block:"center", behavior: 'smooth'})
  }

  function openWidget(index: number){
    if (index === -1){
      setExpandedWidgets([false, false, false])
      setTimeout(()=>{setVisibleWidgets([true, true, true])}, ANIMATION_PERIOD)
    } else {
      scrollToElement('widget-'+index);
      const openState = [false, false, false];
      openState[index] = true;
      setVisibleWidgets([...openState])// do not forget to copy the values
      setTimeout(()=>{setExpandedWidgets([...openState])}, ANIMATION_PERIOD)
    }
  }

  return(
    <>
      <NavBar openWidget={openWidget}></NavBar>
      <CSSTransition in={visibleWidgets[0]} classNames="my-node" unmountOnExit timeout={ANIMATION_PERIOD}>
        <ExpandableSection widget={aboutWidget} visible={visibleWidgets[0]}>
          <CSSTransition in={expandedWidgets[0]} classNames="my-node" unmountOnExit timeout={ANIMATION_PERIOD}>
            <article>
            </article>
          </CSSTransition>
        </ExpandableSection>
      </CSSTransition>
      <CSSTransition in={visibleWidgets[1]} classNames="my-node" unmountOnExit timeout={ANIMATION_PERIOD}>
        <ExpandableSection widget={enrollWidget} visible={visibleWidgets[1]}>
          <CSSTransition in={expandedWidgets[1]} classNames="my-node" unmountOnExit timeout={ANIMATION_PERIOD}>
            <article>
            </article>
          </CSSTransition>
        </ExpandableSection>
      </CSSTransition>
      <CSSTransition in={visibleWidgets[2]} classNames="my-node" unmountOnExit timeout={ANIMATION_PERIOD}>
        <ExpandableSection widget={bulletinWidget} visible={visibleWidgets[2]}>
          <CSSTransition in={expandedWidgets[2]} classNames="my-node" unmountOnExit timeout={ANIMATION_PERIOD}>
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
