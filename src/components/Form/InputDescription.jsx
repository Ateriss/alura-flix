import PropTypes from 'prop-types';

function InputDescription(props){
    const { title, label } = props;

    return(
        <div className="relative w-full">
        <textarea name={title} id={title} cols="10" rows="5"
        className=" w-full rounded-sm bg-grey-m text-gray-light p-2 pt-4 pb-1 mt-2 font-light outline-none focus:border-2 focus:border-primary-blue " ></textarea>
        <label className='  absolute inset-2 text-gray-light font-light text-xs h-4' 
        htmlFor={title}>{label}</label>
        </div>
    )
}

InputDescription.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string
}

export { InputDescription }