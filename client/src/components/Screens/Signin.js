import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signin = ()=>{
    const history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const PostData =()=>{
        // eslint-disable-next-line no-useless-escape
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.token))
                M.toast({html: "signed in successfully",classes:"#2e7d32 green darken-3"})
                history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Sociogram</h2>
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button className="btn waves-effect waves-light  #6a1b9a purple darken-3" onClick={()=>PostData()}>Login
                </button>
                <h5>
                    <Link to="/signup">Don't have an account ?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signin