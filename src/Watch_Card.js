import React, { useState } from 'react'

const Watch_Card = () => {
    let [state, setState] = useState({
        product_Detailes: {
            sno: 1,
            name: "Watch",
            imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh2Jo3_pf4qbjy3SNijWTM1nNQQcTQs4-uw&s",
            price: 1000,
            qty: 2
        },
    })
    let { product_Detailes } = state;

    let Decrease = () => {
        setState((state) => ({
            product_Detailes: {
                ...state.product_Detailes,
                qty: state.product_Detailes.qty - 1 > 0 ? state.product_Detailes.qty - 1 : 0
            }
        }))
    }
    let Increase = () => {
        setState((state) => ({
            product_Detailes: {
                ...state.product_Detailes,
                qty: state.product_Detailes.qty + 1
            }
        }))
    }
    return (
        <div>
            <h1>Watch Card Detailes :</h1>
            <p>Watch Card Paragraph and is used for very clearing the paragraph</p>
            <div className='tables'>
                <table>
                    <thead>
                        <tr>
                            <th>S.No :</th>
                            <th>Name :</th>
                            <th>Image :</th>
                            <th>Price :</th>
                            <th>Quantiti :</th>
                            <th>Total :</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product_Detailes.sno}</td>
                            <td>{product_Detailes.name}</td>
                            <td><img src={product_Detailes.imge} height={50} width={50} /></td>
                            <td>{product_Detailes.price}</td>
                            <td>
                                <i class="fa-solid fa-minus" onClick={Decrease} />
                                {product_Detailes.qty}
                                <i class="fa-solid fa-plus" onClick={Increase} />
                            </td>
                            <td>{product_Detailes.price * product_Detailes.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Watch_Card
