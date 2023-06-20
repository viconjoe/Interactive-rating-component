import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  const [isSubmit, setIsSubmit] = useState(false)

  const handle = (e) => {
    setValue(e.target.innerHTML)
    
  }
const handleSubmit = (e) => {
    setIsSubmit(!isSubmit)
  }
  const showInformation = ( )=> {
    if(!isSubmit) {

      return (

      <div className='container'>
        <div className='mobile'>

          <div className='windows'>
            <div className='circle-star'>
              <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
            </div>

            <div><h1 id='ask'>How did we do?</h1></div>

            <div id='text'>
              <p>Please let us know how we did with your support resquest. 
                All feedback is appreciated to help us improve our offering!</p>
            </div>

            <div className='five-ball'>
              <div onClick={handle} className='circle'>1</div>
              <div onClick= {handle} className='circle'>2</div>
              <div onClick= {handle} className='circle'>3</div>
              <div onClick= {handle} className='circle'>4</div>
              <div onClick= {handle} className='circle'>5</div>
            </div>

            <div onClick={handleSubmit} className='button'><a id='submit-text'>SUBMIT</a></div>

          </div>

        </div>
      </div>
      )
    }
    else {
      return(
        <div className='container-two'>
        <div className='mobile-two'>

          <div className='windows-two'>
            <div className='img-thank'>
              <img src='../images/illustration-thank-you.svg'/>
            </div>

            <div className='answer-box'>
              <p className='answer'>You selected {value} out of 5</p>
            </div>

            <h1 className='thank-you'>Thank you!</h1>

            <div className='appreciate-box'>
              <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
          
            <div id='text'>
              
            </div>


            

          </div>

        </div>
      </div>
      )
    }
  }

  return (
    <>
     { showInformation() }
    </>
  )
}

export default App
