import React from 'react'
import {Container,Navbar,Button} from 'react-bootstrap';
import Logo from '../assets/img/twitter-logo.png';
import {useDispatch}from 'react-redux';
import {openCloseAddTweetModalAction} from '../actions/modalsActions';
const Menu = () => {
//function que ejecuta el dispatch:
    const dispatch =useDispatch();
    const openCloseAddTweetModal=state=>dispatch(openCloseAddTweetModalAction(state));

    const openModal=()=>{
        openCloseAddTweetModal(true);
    }

    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img 
                        alt="tweets simulator redux"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-4"
                    />
                    Tweets SimulatorRedux 
                </Navbar.Brand>
                <Button onClick={openModal} variant="outline-secondary">
                    Nuevo Tweet
                </Button>
            </Container>
        </Navbar>
     );
}
 
export default Menu;