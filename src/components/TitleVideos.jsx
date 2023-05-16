import PropTypes from 'prop-types';


function  TitleVideos(props){
    const { title, color } = props;
    return(
        <div className=''>
            <h2 className={`m-2 bg-${color} text-gray-light text-2xl font-normal mt-4 p-2 rounded-sm`}>{title}</h2>
            <p className='text-gray-light font-light m-2' >Formación {title} en Alura Latam</p>
        </div>
    )
}

TitleVideos.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export { TitleVideos }