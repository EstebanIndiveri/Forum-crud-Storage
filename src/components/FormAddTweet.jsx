import React,{useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {validationFormAddTweetAction} from '../actions/validationActions';
import {addTweetAction} from '../actions/tweetsActions';
import uuid from 'uuid/dist/v4';
import moment from 'moment';
import {openCloseAddTweetModalAction} from '../actions/modalsActions';
const FormAddTweet = () => {
    const[formValue,setFormValue]=useState({
        name:'',
        tweet:''
    });
//inicio dispatch:
const dispatch=useDispatch();
const errorForm=state=>dispatch(validationFormAddTweetAction(state));
const addTweet=state=>dispatch(addTweetAction(state));
const closeModal=state=>dispatch(openCloseAddTweetModalAction(state));
//estado de la validacion
const errorFormValue=useSelector(state=>state.validations.errorFormAddTweet)

    const onChan=e=>{
        errorForm(false);
        setFormValue({
            ...formValue,
            [e.target.name]:e.target.value
        });
    }
    const onSubmit=e=>{
        e.preventDefault();
        const{name,tweet}=formValue;
        if(!name || name==='' ||!tweet || tweet===''){
            errorForm(true);
        }else{
            errorForm(false);
            addTweet({
                id:uuid(),
                name,
                tweet,
                date:moment().format('DD MM YYYY')
            });
            closeModal(false);
        }
    }
    return ( 
       <Form className="m-3" onChange={onChan} onSubmit={onSubmit}>
           <Form.Group className="text-center">
                <h1>Nuevo tweet</h1>
           </Form.Group>
           <Form.Group>
               <Form.Control type="text" name="name" placeholder="Escribe tu nombre"/>
           </Form.Group>
           <Form.Group>
               <Form.Control 
               as="textarea"
               name="tweet"
               row="3"
               placeholder="¡Escribe lo que quieres comunicar!"
               />
           </Form.Group>
           <Button variant="secondary" type="submit">
               Enviar Tweet
           </Button>
           {errorFormValue?(<Alert variant="danger" className="mt-4 text-center">Todos los campos son obligatorios</Alert>):(null)}
       </Form> 
     );
}
 
export default FormAddTweet;