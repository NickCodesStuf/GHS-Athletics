// import reactLogo from './assets/react.svg'
import { FC } from './App'
import homeIcon from './assets/homeIcon.svg'

type openWidgetProp = { openWidget: (index: number) => void }

export default function NavBar({openWidget}: openWidgetProp){
  const NavLink: FC<{index: number} & openWidgetProp> = ({index, openWidget, children}) => {
    return(
      <a className="nav-link"onClick={()=>openWidget(index)}>
        <div className='nav-icon'>
          {children}
        </div>
      </a>
    )
  }
  return(
    <nav>
      <NavLink index={0} openWidget={openWidget}>About</NavLink>
      <NavLink index={1} openWidget={openWidget}>Enroll</NavLink>
      <NavLink index={2} openWidget={openWidget}>Bulletin</NavLink>
      <NavLink index={2} openWidget={openWidget}>For Parents</NavLink>
      <NavLink index={2} openWidget={openWidget}>For Students</NavLink>
      <NavLink index={2} openWidget={openWidget}>Contact Us</NavLink>
      <NavLink index={-1} openWidget={openWidget}>
        <img src={homeIcon}></img>
      </NavLink>
    </nav>
  )
}
