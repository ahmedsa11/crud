import React from 'react'
const Form=(props)=>
{
    return(
      <form onSubmit={props.add}>
          <input type="text" onChange={props.update} value={props.curent}/>
          <button>add course</button>
      </form>
    )
}
export default Form