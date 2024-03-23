import reactLogo from './assets/react.svg'
import homeIcon from './assets/homeIcon.svg'

export default function NavBar({openWidget}:{openWidget:any}){
    function NavLink({index, openWidget, children}:{children?:React.ReactNode, index: number, openWidget:any}){
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
  