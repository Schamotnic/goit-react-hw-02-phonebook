import { nanoid } from "nanoid";
import React, {Component} from "react";
import Form from "./form/Form"
import Filter from "./filter/Filter"
import Contacts from "./contacts/Contacts"
import {AppWrapper} from "./AppStyle";


class App extends Component  {
  state = {
     contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
    
  }
  
  formSubmitHandler = ({name, number}) =>{
   const {contacts}= this.state
   
  const  newData = {id: nanoid(), name, number}
   
   if(contacts.some(e => e.name === name)){
     alert(`${name} is alredy in contacts`)
   }
   else{
     this.setState(({contacts})=>({contacts:[newData,...contacts]
    }))
     
   }
}

   visibleContacts =() =>{
     const {contacts,filter}= this.state;
    //  return contacts.filter(contact =>contact.name.toUpperCase().includes(filter.toUpperCase()))
      const normalizefilter = filter.toUpperCase();
      return contacts.filter(contacts => contacts.name.toUpperCase().includes(normalizefilter))
    } 
  
  changeFilter= e =>{
    this.setState({filter: e.currentTarget.value})
  }
  
  deleteContact =(contactsId) =>{
    this.setState(prevState =>({
    contacts:prevState.contacts.filter(li => li.id !== contactsId)  
    }))
  }

  componentDidUpdate(prevProps, prevState){
if (this.state.contacts !== prevState.contacts ){
 localStorage.setItem ("contacts",JSON.stringify(this.state.contacts))

}
  }
  componentDidMount(){
    const contactes = localStorage.getItem('contacts')
    const parselContacts = JSON.parse(contactes)
    this.setState({contacts: parselContacts})
  }
   
  render(){
    const {filter} = this.state
    const searchContacts =this.visibleContacts()
  return (
    <AppWrapper>
    <Form onSubmit={this.formSubmitHandler}/>
   <Contacts contacts={searchContacts} onDelete={this.deleteContact} />
   <Filter value={filter} onChange={this.changeFilter}/>
   </AppWrapper>
    )
    
  } 
}
      
      
      
      
  
 



export default App;