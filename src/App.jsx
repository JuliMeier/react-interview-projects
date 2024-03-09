import { useState } from 'react'

import Accordion from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random Color Component  */}
      {/* <RandomColor /> */}
       {/* Star Rating Component  */}
       <StarRating numOfStars={10}/>
    </>
  )
}

export default App
