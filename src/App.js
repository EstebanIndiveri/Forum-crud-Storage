import React from 'react';
import {Container} from 'react-bootstrap';
import Menu from './components/Menu';
import Modal from './components/Modal';
import FormAddTweet from './components/FormAddTweet';
import TweetList from './components/TweetsList';
//redux
import store from './store';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <Menu/>
    <Container className="mt-5">
      <h1 className="text-center">TWEETS</h1>
      <TweetList/>
    </Container>
    <Modal>
      <FormAddTweet/>
    </Modal>
    </Provider>
  );
}

export default App;
