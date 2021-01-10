import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signin = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const PostData =()=>{
        // eslint-disable-next-line no-useless-escape
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html: data.message,classes:"#2e7d32 green darken-3"})
                history.push('/Signin')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Sociogram</h2>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button className="btn waves-effect waves-light  #6a1b9a purple darken-3" 
                onClick={()=>PostData()}>Signup
                </button>
                <h5>
                    <Link to="/signin">Already have an account ?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signin