import React from 'react'

export const GroceryInput = ({handleAdd}) => {

    const [title, setTitle] = React.useState("")

    return(
        <>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => {handleAdd(title)}} >Add</button> 
        </>
    )
}