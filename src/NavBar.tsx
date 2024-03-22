import reactLogo from './assets/react.svg'


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
        <NavLink index={1} openWidget={openWidget}>About</NavLink>
        <NavLink index={2} openWidget={openWidget}>Enroll</NavLink>
        <NavLink index={3} openWidget={openWidget}>Bulletin</NavLink>
        <NavLink index={4} openWidget={openWidget}>
          <img src={reactLogo}></img>
        </NavLink>
      </nav>
    )
  }
  