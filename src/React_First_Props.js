import React from 'react'

const React_First_Props = (props) => {
    console.log(props)
    return (
        <>
            <div className='Props_Parent'>
                <div className='left_Child'>
                    <h2>Left Side of the Child {props.name}</h2>
                    <p>Left Side Of The Paragraph {props.age}</p>
                    <button>Left Side Button</button>
                </div>
                <div className='right_child'>
                    <h2>Right side Of the Child {props.Sex}</h2>
                    <p>Right Side Of the Paragraph {props.BloodGroup}</p>
                    <button>Right side Button</button>
                </div>
                <pre>{JSON.stringify(props)}</pre>
            </div>
        </>
    )
}

export default React_First_Props
