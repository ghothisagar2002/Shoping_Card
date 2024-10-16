import React from 'react'

const Registration = () => {
    return (
        <>
            <h2>Registration Form:</h2>
            <div className='Form_Container'>
                <div className='form'>
                    <label>Enter Your name :<br />
                        <input type="text" placeholder='enter your name' />
                    </label>
                </div>

                <div className='form'>
                    <label>Enter Your Password :<br />
                        <input type="text" placeholder='enter your password' />
                    </label>
                </div>

                <div className='form'>
                    <label>Enter Your Email :<br />
                        <input type="text" placeholder='enter your email' />
                    </label>
                </div>

                <div className='form'>
                    <select className='form_Select'>
                        <option value="">Select The Colors:</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                    </select>
                </div>

                <div className='form'>
                 <textarea row={4} placeholder='BioGraphi'/>
                </div>
                <div className='form'>
                 <input type="checkbox" />Slected
                </div>

                <button type="submit">Loin</button>
            </div>
        </>
    )
}

export default Registration
