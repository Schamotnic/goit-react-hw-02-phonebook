import React from 'react';
import{Ul,Span,Button,Li} from "./ContactsStyle"
import PropTypes from "prop-types";
 const Contacts = ({contacts,onDelete})=>(
     
 <Ul>
{contacts.map(({id,name,number}) =>(
   <Li key={id}>
<Span>{name}</Span>
<Span>{number}</Span>
<Button onClick={()=> onDelete(id)}>Удалить</Button>
   </Li>
))}
        </Ul>
     
 )

 Contacts.propTypes = {
   name: PropTypes.string.isRequired,
   number: PropTypes.number.isRequired,
   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
   onDelete: PropTypes.func.isRequired
}

 export default Contacts;