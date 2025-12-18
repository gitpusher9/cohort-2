import {useEffect} from "react"
function App() {

  useEffect(function(){
    console.log("app")
  })
  return(<div>
    <Cardwrapper>
      hey there nabaa
    </Cardwrapper>
    <Cardwrapper></Cardwrapper>
    
    </div>
  )
} 


function Cardwrapper({children}){
  useEffect(function(){
    console.log("cardwrapper")
  })
    return(
      <div style={{border:"2px solid black" , padding:"10px"}}>
        {children}
      </div>
    )
}





export default App
  