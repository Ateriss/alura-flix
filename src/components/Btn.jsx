import { Link } from "react-router-dom"
import PropTypes from 'prop-types';


function Btn(props){
    const { nameBtn, icon, link} = props
    return(
        <Link to={link} >
            <div className="text-gray-light flex items-center border-l-2 border-primary-blue p-1 active:scale-95">
                <h3 className="mr-1 hidden">{nameBtn}</h3>
                {icon}
            </div>
        </Link>
    )
}

Btn.propTypes = {
    nameBtn: PropTypes.string,
    icon: PropTypes.object,
    link: PropTypes.string.isRequired,
}
 export { Btn }
