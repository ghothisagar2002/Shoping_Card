import React from 'react'

const Props = (props) => {
    console.log(props)

    return (
        <>
            <h1>This is a Props of the React.js</h1>
            <p>This is a Props of the paragraph</p>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Qualification : {props.qualification}</p>
            <pre>{JSON.stringify(props)}</pre>
        </>
    )
}

export default Props
