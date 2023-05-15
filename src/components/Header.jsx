import logo from '../assets/logo.png';

function Header(){
    return(
        <header className='w-screen flex'>
            <img className='w-24'
             src={logo} alt="Logo Alura Flix" />
             <div className='underline'>pruebaasss</div>
        </header>
    )
}

export { Header }