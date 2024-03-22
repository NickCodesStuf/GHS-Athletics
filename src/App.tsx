import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import ExpandableSection from './ExpandableSection'
import { CSSTransition } from 'react-transition-group';
import NavBar from './NavBar'

function App() {
  // this code is ugly, and is not procedural, but it does not matter!
  const [elementState, setElementState] = useState([1, 1, 1, 1, 1, 1]);

  const aboutWidget = <section onClick={() => openWidget(0)}>This will talk about Tennis in general</section>
  const enrollWidget = <section onClick={() => openWidget(1)}>This will talk about Joining tennis for new players</section>
  const bulletinWidget = <section onClick={() => openWidget(2)}>Information regarding upcoming events</section>
  const parentsWidget = <section onClick={() => openWidget(3)}>Information relavent to parents</section>
  const studentsWidget = <section onClick={() => openWidget(4)}>Information relavent to current students</section>
  const contactWidget = <section onClick={() => openWidget(5)}>Contact Information</section>

  function openWidget(index: number){
    const states = [0, 0, 0, 0, 0, 0]
    states[index] = 2
    setElementState([...states])// do not forget to copy the values
  }

  return (
    <>
    {/* About/Landing image */}
      <NavBar openWidget={openWidget}></NavBar>
      <CSSTransition in={elementState[0] === 0} unmountOnExit timeout={500} classNames="widgets">
        <ExpandableSection preview={aboutWidget} state={elementState[0]}>
          <section>Extra content!!</section>
        </ExpandableSection>
      </CSSTransition>
      {/* Enroll */}
      <ExpandableSection preview={enrollWidget} state={elementState[1]}>
        <section>Extra content!!</section>
      </ExpandableSection>
      {/* Bulletin */}
      <ExpandableSection preview={bulletinWidget} state={elementState[2]}>
        <section>Extra content!!</section>
      </ExpandableSection>
      {/* For Parents */}
      <ExpandableSection preview={parentsWidget} state={elementState[3]}>
        <section>Extra content!!</section>
      </ExpandableSection>
      {/* For Students */}
      <ExpandableSection preview={studentsWidget} state={elementState[4]}>
        <section>Extra content!!</section>
      </ExpandableSection>
      {/* Contact Us */}
      <ExpandableSection preview={contactWidget} state={elementState[5]}>
        <section>Extra content!!</section>
      </ExpandableSection>
    </>
  )
}

export default App
