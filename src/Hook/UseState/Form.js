import React, {useState}from 'react'

export default function Form() {

    // let [name,setName]=useState('')
    // let [email,setEmail]=useState('')
    // let [password,setPassword]=useState('')
    // let nameChange =(e)=>{
    //     setName (e.target.value)
    // }
    // let emailChange =(e)=>{
    //     setName (e.target.value)
    // }
    // let passwordChange =(e)=>{
    //     setName (e.target.value)
    // }
    // let subMit =(e)=>{
    //     console.log(name,email,password)
    //     console.log('submitted')
        
    //     e.preventDefault()
    // }


    let [user,setUser]=useState({name:'',email:'',password:''})
    const {name,email,password}=user



    let nameChange =(e)=>{
        setUser({name:e.target.value,email,password})
        
    }
    let emailChange =(e)=>{
        setUser({name,email:e.target.value,password})
    }
    let passwordChange =(e)=>{
        setUser({name,email,password:e.target.value})
    }
    
    let subMit =(e)=>{
        console.log(user)
        console.log('submitted')
        
        e.preventDefault()
    }
    





  return (
    <div>
        <h1>Registration</h1>
        <form action="" onSubmit={subMit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' value={name} onChange={nameChange}required />

        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' value={email} onChange={emailChange}required />
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' value={password} onChange={passwordChange}required />
        </div>
        
            <button type='submit'>Register</button>
        </form>

</div>
  )
}
