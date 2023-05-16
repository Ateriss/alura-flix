import { useEffect, useState } from "react"
import { InputSelect } from "../components/Form/InputSelect"
import { InputText } from "../components/Form/InputText"
import { fetchCat } from "../../api";
import { InputDescription } from "../components/Form/InputDescription";
import { InputBtn } from "../components/Form/InputBtn";


function NewVideos(){
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetchCat(setCategories)
    },[])

    return(
        <main className="bg-black.dark pt-12 h-screen flex flex-col justify-center items-center">
            <form className="flex flex-col items-center p-4 pl-2 pr-2 w-full">
                <h1 className="text-gray-light font-normal text-2xl">Nuevo Video</h1>
                <InputText title='Título' label='Título'/>
                <InputText title='video' label='Link del video'/>
                <InputText title='imagen' label='Link de la imagen'/>
                <InputSelect options={categories} selectName='categories' label='Selecciona una categoría'/>
                <InputDescription title='descripcion' label='Descripción' />
                <div className="flex justify-between w-full"> 
                    <InputBtn nameBtn='Guardar' type='submit' bgColor='primary-blue' />
                    <InputBtn nameBtn='Limpiar' type='reset' bgColor='grey-m' />
                </div>
            </form>
        </main>
    )
}

export { NewVideos }