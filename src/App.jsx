import { useState } from 'react'

import Accordion from './components/accordion'
import RandomColor from './components/random-color'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random Color Component  */}
      <RandomColor />
    </>
  )
}

export default App
