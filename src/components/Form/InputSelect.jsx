import PropTypes from 'prop-types';


function InputSelect(props){
    const { options, selectName, label } = props;
    return(
        <div className="relative w-full">
        <select className="w-full text-gray-light bg-grey-m font-light rounded-sm mb-2 mt-2  p-2 pb-1 pt-4 outline-none focus:border-2 focus:border-primary-blue" 
        name={selectName} id={selectName}> 
            {
                options.map((data)=>{
                    const { title, _id } =data;
                    return(
                    <option value={title} key={_id}>{title}</option>)
                })
            }
        </select>
        <label className="absolute inset-2 text-gray-light font-light text-xs h-4" htmlFor="categories">{label}</label>
        </div>
    )
}

InputSelect.propTypes = {
    options: PropTypes.array,
    selectName: PropTypes.string,
    label: PropTypes.string
}

export { InputSelect }