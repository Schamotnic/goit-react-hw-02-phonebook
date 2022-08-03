import React from 'react';
import{Ul,Span,Button,Li} from "./ContactsStyle"
import PropTypes from "prop-types";
 const Contacts = ({contacts,onDelete})=>(
     
 <Ul>
{contacts.map(({id,name,number}) =>(
   <Li key={id}>
<Span>{name.toUpperCase()}</Span>
<Span>{number}</Span>
<Button onClick={()=> onDelete(id)}>Удалить</Button>
   </Li>
))}
        </Ul>
     
 )

 Contacts.propTypes = {
  
   contacts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id:PropTypes.number.isRequired
   })).isRequired,
   onDelete: PropTypes.func.isRequired
}

 export default Contacts;