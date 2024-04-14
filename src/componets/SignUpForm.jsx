import { useState } from "react"


export default function SignUpForm(){
const [userName,setUserName]=useState("")
const [passWord,setPassWord]=useState("")
const [error,setError]=useState(null)
async function handleSubmit(event) {
  try{
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup")
    const resualt = await response.json();
    console.log(resualt)
    
  }catch(e){
  setError(e.messege)
  }

}
  return(
    <>
    <h2>sign up</h2>
   {error !== null && (
    <p>error</p>
   )}
    <form onSubmit={handleSubmit}>
<label htmlFor="username"></label>
<input value={userName} onChange={(e)=>setUserName(e.target.value)} name="username"/>
<label htmlFor="password"></label>
<input value={passWord} onChange={(e)=>setPassWord(e.target.value)} name="password"/>
<button>submit</button>
    </form>
    
    </>


  )
}