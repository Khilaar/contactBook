import { useState } from 'react'
import './App.css'
import ContactList from './components/contactList/contactList'
import NewContact from './components/newContact/newContact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='titleContainer'>
        <h1 className='title'>Personal Contact Book</h1>
      </div>
      <ContactList></ContactList>
    </>
  )
}

export default App
