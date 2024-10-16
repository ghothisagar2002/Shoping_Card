import React, { useState } from 'react'

const Mobile = () => {
    let [state, setState] = useState({
        mobil_Details: {
            sno: 1,
            name: "Samsung Galaxy",
            imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1iLoKO8Gi9Dr9jMnyczfM26dTR8-tnvVjA&s",
            price: 5000,
            qty: 2
        }
    })
    let { mobil_Details } = state

    let Minus_Square = () => {
        setState((state) => ({
            mobil_Details: {
                ...state.mobil_Details,
                qty: state.mobil_Details.qty - 1
            }
        }))
    }

    let Plus_Square = () => {
        setState((state) => ({
            mobil_Details: {
                ...state.mobil_Details,
                qty: state.mobil_Details.qty + 1
            }
        }))
    }
    return (
        <div>
            <h1>Mobile Phone Details :</h1>
            <p>This is Mobile phone Paragraph</p>
            <div className='Mobile_Container'>
                <table>
                    <tr>
                        <th>S.No :</th>
                        <th>Name :</th>
                        <th>Images:</th>
                        <th>Price</th>
                        <th>Quantity:</th>
                        <th>Total:</th>
                    </tr>
                    <tr>
                        <td>{mobil_Details.sno}</td>
                        <td>{mobil_Details.name}</td>
                        <td><img src={mobil_Details.imge} height={50} width={50} /></td>
                        <td>{mobil_Details.price}</td>
                        <td>
                            <i onClick={Minus_Square} class="fa-solid fa-minus"></i>
                            {mobil_Details.qty}
                            <i onClick={Plus_Square} class="fa-solid fa-plus"></i>
                        </td>
                        <td>{mobil_Details.price * mobil_Details.qty}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Mobile
