import { useState } from 'react'
import './App.css'
import ContactList from './components/contactList/contactList'
import Header from './components/header/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <ContactList></ContactList>
    </>
  )
}

export default App
