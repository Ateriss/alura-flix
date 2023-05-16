import logo from '../assets/logo.png';

function Footer(){
    return(
        <header className='w-screen flex p-2 bg-black.dark border-t-2 border-primary-blue flex justify-center' >
        <img className='w-2/4'
         src={logo} alt="Logo Alura Flix" />
    </header>
    )
}

export { Footer }