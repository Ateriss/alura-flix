
import PropTypes from 'prop-types';

function Miniature(props){
    const { src, title, color} = props
    return(
        <div>
            <div className={`border-2 m-2 border-${color} shrink-0 w-56`}>
                <img className='max-w-full' src={src} alt={title} />
            </div>
        </div>
    )
}

Miniature.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export { Miniature }