import { useState } from 'react'
import './App.css'
import Candidates from './components/Candidates'
import ChatBot from './components/Chatbot'
import MonitorLayout from './components/Layout/MonitorLayout'
import { ElectionProvider } from './context/ElectionContext'


function App() {
 

  return (
     <ElectionProvider>
       <MonitorLayout/>
       <Candidates/>

       <ChatBot/>
     </ElectionProvider>
   

  )
}

export default App
