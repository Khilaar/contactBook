import { useState } from 'react'
import './App.css'
import ContactList from './components/contactList/contactList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactList></ContactList>
    </>
  )
}

export default App
