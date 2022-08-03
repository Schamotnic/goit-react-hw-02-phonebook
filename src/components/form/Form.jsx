import React, {Component} from "react";
import PropTypes from "prop-types";
import {nanoid} from "nanoid";

class Form extends Component{
  generationId = nanoid()

state={
  name: '',
  number: '' 
}





handelChange = e =>{
   const {name, value} = e.currentTarget;
   this.setState({
     [name]:value
   })
 }

 handleSubmit = e => {
  e.preventDefault();
  this.props.onSubmit({...this.state})
  this.reset()
}
  
reset= () =>{
  this.setState({ name: '', number: '' })
}

 
render(){
const {name, number}= this.state

return(
<div>
      <h1>Phonebook</h1>
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="">Name
        <input type="text" 
        value={name}
        onChange={ this.handelChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required/>  
      </label>
      <label htmlFor="">Number 
      <input type="tel"
      value={number}
      onChange={this.handelChange}
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required />
      </label>
      <button>Add contact</button>
     </form>
    <div>
      <h2>Contacts</h2>
      
    </div>
    </div>
)

}
}
Form.propTypes = {
  
  onSubmit: PropTypes.func.isRequired
}

export default Form
