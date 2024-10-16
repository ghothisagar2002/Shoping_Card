import React, { useState } from 'react'

const MultipleStates = () => {
    let [state, setState] = useState({
        product: {
            sno: 1,
            name: "Watch",
            imgage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmiwxRKY6qhnhtTYJC-fTySKo7ICb1ThROg&s",
            price: 200,
            qty: 2
        }
    })
    let { product } = state

    let Incress = () => {
        setState((state) => ({
            product: {
                ...state.product,
                qty: state.product.qty + 1
            }
        }))
    }

    let Decress = () => {
        setState((state) => ({
            product: {
                ...state.product,
                qty: state.product.qty - 1
            }
        }))
    }
    return (
        <div>
            <h1>Multiple States Heading </h1>
            <p>Multiple states paragraph</p>
            <table>
                <tr>
                    <th>SNo</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>{product.sno}</td>
                    <td>{product.name}</td>
                    <td><img src={product.imgage} height={50} width={50} /></td>
                    <td>{product.price}</td>
                    <td>
                        <i onClick={Decress} class="fa-solid fa-minus" />
                        {product.qty}
                        <i onClick={Incress} class="fa-solid fa-plus" />
                    </td>
                    <td>{product.qty * product.price}</td>
                </tr>
            </table>
        </div>
    )
}

export default MultipleStates
