import React, { useState } from 'react'

const Number_Items = () => {
    let [data, setData] = useState({
        productsOfElectric: [
            {
                sno: 1,
                name: "Apple Watch",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqopy6yMZ_vfc2XuB5lImHUjKnGmzGX8e3A&s",
                price: 500,
                qty: 2
            },
            {
                sno: 2,
                name: "Banana Watch",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnwBboqZgFqBYh3FAZLQWfvVlvYSdIes-zg&s",
                price: 800,
                qty: 2
            },
            {
                sno: 3,
                name: "Orange Watch",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsD2KI7XSEWc_cBVPtcUvemkQihvaJf-Bfw&s",
                price: 1200,
                qty: 2
            },
            {
                sno: 4,
                name: "Cherry Watch",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHM8fcM5CkzzH4Rq7iP4eSiiHFBqCZ9KsIw&s",
                price: 1500,
                qty: 2
            },
            {
                sno: 5,
                name: "FineApple Watch",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKfUVIlQJ7gJm9wZMacltJF-WB5fWrQUlmA&s",
                price: 2000,
                qty: 2
            }
        ]
    })
    // Destructuring :
    let { productsOfElectric } = data

    let lowestValue = (productId) => {
        let result = productsOfElectric.map((value) => {
            if (value.sno === productId) {
                return {
                    ...value,
                    qty: value.qty - 1
                }
            }
            return value
        })
        setData(() => ({
            productsOfElectric: [...result]
        }))
    }
    let highValue = (productId) => {
        let result = productsOfElectric.map((value) => {
            if (value.sno === productId) {
                return {
                    ...value,
                    qty: value.qty + 1
                }
            }
            return value
        })
        setData(() => ({
            productsOfElectric: [...result]
        }))
    }
    let grandTotall = () => {
        let total = 0
        for (let value of productsOfElectric) {
            total += value.price * value.qty
        }
        return total
    }

    return (
        <>
            <h1>Number of Items are Added to the React.js</h1>
            <p>Paragraph</p>
            <table>
                <tr>
                    <th>Serial No:</th>
                    <th>Name:</th>
                    <th>Image:</th>
                    <th>Price:</th>
                    <th>Quantity:</th>
                    <th>Total:</th>
                </tr>
                {
                    productsOfElectric.map((value) => {
                        return (
                            <tr key={value.sno}>
                                <td>{value.sno}</td>
                                <td>{value.name}</td>
                                <td><img src={value.image} height={50} width={50} /></td>
                                <td>&#8377;{value.price.toFixed(2)}</td>
                                <td>
                                    <i onClick={() => lowestValue(value.sno)} class="fa-solid fa-minus" />
                                    {value.qty}
                                    <i onClick={() => highValue(value.sno)} class="fa-solid fa-plus" />
                                </td>
                                <td>&#8377;{(value.qty * value.price).toFixed(2)}</td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td colSpan={4}></td>
                    <td>GrandTotall:</td>
                    <td>&#8377;{grandTotall().toFixed(2)}</td>
                </tr>
            </table>
        </>
    )
}

export default Number_Items
