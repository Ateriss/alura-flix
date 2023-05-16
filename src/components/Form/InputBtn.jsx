
import PropTypes from 'prop-types';


function InputBtn(props){
    const { nameBtn, type, bgColor} = props
    return(
            <input className={`text-gray-light flex items-center rounded-sm transition-all  bg-${bgColor} p-2 pr-4 pl-4 mt-2 active:scale-95`} 
            type={type} value={nameBtn} />
    )
}

InputBtn.propTypes = {
    nameBtn: PropTypes.string,
    bgColor:PropTypes.string,
    type: PropTypes.string
}
 export { InputBtn }