import React from 'react'

const Profile = ()=>{
    return(
       <div style={{maxWidth:"550px",margin:"0px auto"}}>
           <div style={{
               display:'flex',
               justifyContent:'space-around',
               margin:'18px 0px',
               borderBottom:"1px solid grey"
           }}>
               <div>
                   <img style={{width:"160px",height:"160px",borderRadius:"80PX"}}
                   src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
               </div>
               <div>
                   <h4>Albert</h4>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}> 
                       <h6>4 posts</h6>
                       <h6>2 followers</h6>
                       <h6>4 following</h6>
                   </div>
               </div>
           </div>
                <div className="gallery">
                    <img className="item" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <img className="item" src="https://images.unsplash.com/photo-1585602173562-e7eeb0e6f380?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <img className="item" src="https://images.unsplash.com/photo-1576863151139-66451365be5e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAxfHxwZXJzb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <img className="item" src="https://images.unsplash.com/photo-1562005310-b29f2aac918c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzMwfHxwZXJzb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <img className="item" src="https://images.unsplash.com/photo-1602985392664-d823a33836db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzYzfHxwZXJzb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
       </div>
    )
}

export default Profile 