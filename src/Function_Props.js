import React from 'react'

const Function_Props = (props) => {
    console.log(props)
    return (
        <>
            <div className='Container'>
                <h2>This is Function Props Components {props.name}</h2>
                <p>This is Function Props Paragraph {props.age}</p>
                <h3>{JSON.stringify(props)}</h3>
                <p>This is best for the Functions Props : {props.fullName}</p>
            </div>
        </>
    )
}

export default Function_Props
