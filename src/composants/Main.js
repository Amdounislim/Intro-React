import React from 'react'


export const Main = () => {


 const Aff=()=>{
        alert("Hello")
    }

    return (
        <form>
           <label>Name : </label> <input type="text" />
           <label>Age : </label> <input type="text" />
           <label>Email : </label> <input type="text" />
           <button onClick={Aff}>Submit</button>
        </form>
    )
}



