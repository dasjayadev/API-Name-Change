import React, { useState } from 'react';

function State() {
    const [count , setCount] = useState(0)

    function allHandler (event){

        console.log(count);


        let value = event.target.innerText
        if(value === "inc"){
            setCount(count+1)
        }
        else if(value === "dec"){
            setCount( count - 1)
        }
    }
  return (
    <>
        <button onClick={allHandler}>inc</button>
        <p>{count}</p>
        <button onClick={allHandler}>dec</button>
    </>
  );
}

export default State;
