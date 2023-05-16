import PropTypes from 'prop-types';


function InputText(props){
    const { title, label } = props;

    return( 
        <div className='w-full relative' >
            <input className='w-full text-gray-light bg-grey-m font-light rounded-sm mb-2 mt-2  p-2 pb-1 pt-4 outline-none focus:border-2 focus:border-primary-blue' type="text" name={title} />
            <label className='absolute inset-2 text-gray-light font-light text-xs h-4' htmlFor={title}>{label}</label>
        </div>
    )
}

InputText.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,

}

export { InputText }