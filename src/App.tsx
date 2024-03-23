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

export type FC<P> = React.FC<P & { children?: React.ReactNode }>


function scrollToElement(id : string){
  console.log(id)
  const element = document.getElementById(id);
  console.log(element);
  element?.scrollIntoView({ block:"center", behavior: 'smooth'})
}

export default function App() {
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
        <p>Joining Tennis these days is easier than ever, there are just so many resources today!</p>
        <img className="quotation quotation-right" src={quotationMark}></img>
      </div>
    </div>
    <img src={enrollImage}></img>
  </section>
  const bulletinWidget = <section id="widget-2" onClick={() => openWidget(2)}>News Bulletin</section>

  function openWidget(index: number){
    // do not forget to copy the values (or actually just send a new array reference)

    // Home index is -1
    if (index === -1){
      setExpandedWidgets([false, false, false])
      setTimeout(()=>{setVisibleWidgets([true, true, true])}, ANIMATION_PERIOD)
    } else {
      scrollToElement('widget-'+index);
      const openState = [false, false, false];
      openState[index] = true;
      setVisibleWidgets(openState)
      setTimeout(()=>{setExpandedWidgets(openState)}, ANIMATION_PERIOD)
    }
  }

  return(
    <>
      <NavBar openWidget={openWidget}></NavBar>
      <ExpandableSection visible={visibleWidgets[0]} expanded={expandedWidgets[0]} widget={aboutWidget}>
        <article>
        </article>
      </ExpandableSection>
      <ExpandableSection visible={visibleWidgets[1]} expanded={expandedWidgets[1]} widget={enrollWidget}>
        <article>
        </article>
      </ExpandableSection>
      <ExpandableSection visible={visibleWidgets[2]} expanded={expandedWidgets[2]} widget={bulletinWidget}>
        <article>
          <section>itz tournament day my dudes</section>
        </article>
      </ExpandableSection>
    </>
  )
}

const ExpandableSection: FC<{visible: boolean, expanded: boolean, widget: React.ReactNode}> = ({visible, expanded, widget, children}) => {
  return(
    <CSSTransition in={visible} classNames="my-node" unmountOnExit timeout={ANIMATION_PERIOD}>
      <div className='my-node'>
        {widget}
        <CSSTransition in={expanded} classNames="my-node" unmountOnExit timeout={ANIMATION_PERIOD}>
          {children}
        </CSSTransition>
      </div>
    </CSSTransition>
  )
}
