import React from 'react'

const PracticeOnePropse = (props) => {
    console.log(props)
    return (
        <>
            <h3>This is a React.js Propse</h3>
            <p>This is a Raect.js Propse Paragraph</p>
            <p>Name :{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Qualification:{props.qualification}</p>
            <p>RollNumber:{props.rollNumber}</p>
            <pre>{JSON.stringify(props)}</pre>
        </>
    )
}

export default PracticeOnePropse
