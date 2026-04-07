import React from 'react'
import AboutPage from './Pages/AboutPage'
import Admin from './Pages/Admin'
import { useState } from "react"; 

const App = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  return (
    <div>
      {showAdmin ? (
        <Admin goBack={() => setShowAdmin(false)} />
      ) : (
        <AboutPage openAdmin={() => setShowAdmin(true)} />
      )}
    </div>
  )
}

export default App