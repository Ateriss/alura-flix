import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Btn } from './Btn';
import { ElementPlus } from 'iconsax-react';


function Header(){
    return(
        <header className='w-screen flex justify-between p-2 bg-black.dark border-b-2 border-primary-blue fixed' >
            <Link to="/">
                <img className='w-2/4'
                src={logo} alt="Logo Alura Flix" />
             </Link>
             <Btn icon={<ElementPlus size="24" color="#2A7AE4"/>} nameBtn="Añadir Video" link="addVideos"/>
        </header>
    )
}

export { Header }