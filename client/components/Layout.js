import NavBar from './NavBar'

const Layout = ({children}) => {
    return(
        <div  className='App'>
        <NavBar/>
        <div className= 'backDropStyle' />
        {children}
        </div>
    )
}

export default Layout