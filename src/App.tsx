import { useState } from 'react'
import './App.css'
import { CSSTransition } from 'react-transition-group';

const ANIMATION_PERIOD = 1000;

function App() {
  const [openProps, setOpenProps] = useState([true, true, true]);
  const [expandedProps, setExpandedProps] = useState([false, false, false])

  function openProp(index:number){
    const temp = [false, false, false]
    temp[index] = true
    console.log("Open Prop")
    setOpenProps([...temp])
    setTimeout(() => {setExpandedProps([...temp])}, ANIMATION_PERIOD);
  }

  function closeProp(){
    console.log("Close Prop")
    setExpandedProps([false, false, false]);
    setTimeout(() => {setOpenProps([true, true, true])}, ANIMATION_PERIOD);
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

  const aboutWidget = <section onClick={() => openProp(0)}>About</section>
  
  return (
    <div>
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
          <div onClick={() => {openProp(1)}}>
            <p>Enroll Section</p>
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
