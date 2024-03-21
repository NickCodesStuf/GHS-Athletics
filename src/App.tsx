import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpandableSection from './ExpandableSection'
import { CSSTransition } from 'react-transition-group';

function App() {

  //CollapsableSections!
  // this code is ugly, and is not procedural, but it does not matter!
  const [elementState, setElementState] = useState([1, 1, 1, 1, 1, 1]);
  const [openDropDown, setDropDownOpen] = useState(false);

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

  //Navbar
  function Navbar({children}:{children?:React.ReactNode}){
    return(
      <nav className='navbar'>
        <ul className='navbar-nav'>
          { children }
        </ul>
      </nav>
    )
  }
  
  function NavItem({icon, children}:{icon?:any, children?:React.ReactNode}){
    return(
      <li className='nav-item'>
        <a href='#' className='icon-button' onClick={() => setDropDownOpen(!openDropDown)}>
          { icon }
        </a>
        {openDropDown && children}
      </li>
    )
  }
  
  function DropDownMenu(){
    const nodeRef = useRef(null);
    function DropdownItem({children, link}:{children?:React.ReactNode, link?:number}){
      return(
        <a onClick={() => link && openWidget(link)} className="menu-item">
          { children }
      </a>
      )
    }
    return(
      <CSSTransition nodeRef={nodeRef} in={openDropDown} unmountOnExit timeout={1000} classNames="dropdown-primary">
        <div className='dropdown'>
          <DropdownItem link={1}>About</DropdownItem>
        </div>
      </CSSTransition>
    )
  }

  return (
    <>
    <Navbar>
      <NavItem icon='👋'>
        <DropDownMenu></DropDownMenu>
      </NavItem>
    </Navbar>
    {/* About/Landing image */}
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
