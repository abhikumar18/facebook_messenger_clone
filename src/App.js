import './App.css';
import { useState,useEffect } from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';


function App() {
   const [input, setInput] = useState('');
   const [messages, setMessages] = useState([]);
   const [username,setUsername] = useState('');

   useEffect(() =>{
     db.collection('messages').onSnapshot(snapshot =>{
       setMessages(snapshot.docs.map(doc => doc.data()))
     })
   },[])
  
  useEffect(()=>{
    setUsername(prompt('Please enter your name'))
  },[])

const sendMessage = (event) => {
  event.preventDefault();
  setMessages([...messages,{username:username,text:input}]);
  setInput('');
}


  return (
    <div className="App">
      <h1>Welcome {username}</h1>

      <form>
      <FormControl>
         <InputLabel>Enter a message...</InputLabel>
         <Input value={input} onChange={event => setInput(event.target.value)}/>
         <Button disabled = {!input} variant = 'contained' color='primary' type='submit' onClick={sendMessage}>Send message</Button>
      </FormControl>
      </form>
      {
      messages.map(message=>
        <Message  username = {username} message={message}/>
      )
      }
    </div>
  );
}

export default App;
