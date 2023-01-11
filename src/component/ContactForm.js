import { useState } from "react"

// Prop Drilling
// Context API helps with Prop Drilling

export default function ContactForm() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('')
    let [user,setUser]=useState({firstname:'',lastname:'',email:'',password:'',comment:''})
    let {firstname,lastname,email,password,comment}=user

    const changeFirstName = (e) => {
        setUser({firstname:e.target.value,lastname,email,password})
    }

    const changeLastName = (e) => {
        setUser({firstname,lastname:e.target.value,email,password})
    }
    let changeEmail =(e)=>{
        setUser({firstname,lastname,email:e.target.value,password})
    }
    let changePassword =(e)=>{
        setUser({firstname,lastname,email,password:e.target.value})
    }
    let changeComment =(e)=>{
        setUser({firstname,lastname,email,password,comment:e.target.value})
    }

    // const submitForm = (e) => {
    //     alert(firstname + ' ' +  lastname +' '+email)
        
    // }
     
    let submitForm =(e)=>{
        console.log(user)
        e.preventDefault()
    }
    return(
        <div className="w-[480px] m-auto mt-16">
            <h1 className="text-2xl mb-4">Contact Us</h1>

            <form action="#">
                <div className="my-3">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" className="border-2 form-input w-full" onChange={changeFirstName} required  value={firstname} />
                </div>

                <div  className="my-3">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" className="border-2 form-input w-full" onChange={changeLastName} required  value={lastname}/>
                </div>

                <div  className="my-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="border-2 form-input w-full " required onChange={changeEmail} value={email}/>
                </div>
                <div  className="my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="border-2 form-input w-full " required onChange={ changePassword} value={password}/>
                </div>


                <div className="my-3">
                    <label htmlFor="comment" >Comment</label>
                    <textarea name="comment" id="" cols="30" rows="10" className="border-2 form-input w-full resize-none" value={comment} onChange={changeComment} />
                </div>

                <button className="w-full bg-cyan-600 text-white py-4 border-2" onClick={submitForm}>Submit Form</button>
            </form>

        </div>
    )
}
