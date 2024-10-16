import React, { useState } from 'react'

const PracticeTwoWishMess = () => {
    let [wish, setWish] = useState({
        mess: "Hello"
    })
    let goodMorng = () => {
        setWish(() => ({
            mess: "Good Morning Is A very nice"
        }))
    }

    let goodAfter = () => {
        setWish(() => ({
            mess: "Good After Noon Very nice"
        }))
    }

    let goodEven = () => {
        setWish(() => ({
            mess: "Good Evening is very night"
        }))
    }
    return (
        <div>
            <h2>Wish Card Two in React .js</h2>
            <h3>{wish.mess}</h3>
            <button onClick={goodMorng} type="button">Good Morg</button>
            <button onClick={goodAfter} type="button">Good After</button>
            <button onClick={goodEven} type="button">Good Evening</button>
        </div>
    )
}

export default PracticeTwoWishMess
