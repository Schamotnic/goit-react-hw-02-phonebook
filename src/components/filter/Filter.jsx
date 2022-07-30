import React from 'react';
import PropTypes from "prop-types";

 const Filter = ({value,onChange}) =>{

    return(
<label> 
      <input type="text"
      name="filter"
      value= {value}
      onChange={onChange}
   />
      </label>
)
}

Filter.propTypes = {
   value: PropTypes.node.isRequired,
   onChange: PropTypes.func.isRequired
}




export default Filter;