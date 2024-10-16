import React from 'react'

const FirstReact_Propse = (propse) => {
    console.log(propse)
    return (
        <>
            <div className='first_Practice_Propse'>
                <h1>What is your name ? </h1>
                <p>My name is : {propse.name} </p>
                <p>Your higher Qualification ?</p>
                <p>My Higher Qualification : {propse.Quali} </p>
                <pre>{JSON.stringify(propse)}</pre>
            </div>
        </>
    )
}

export default FirstReact_Propse
