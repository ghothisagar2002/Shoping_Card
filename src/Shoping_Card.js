import React, { useState } from 'react'

const Shoping_Card = () => {
    let [state, setState] = useState({
        products: [
            {
                sno: 1,
                name: "Apple Watch",
                imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKuLdjnspyKC1JPUQWJXTulQQaeVBIuKcpw&s",
                price: 1000,
                qty: 2
            },
            {
                sno: 2,
                name: "Samsung Watch",
                imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXorLFgWatgsQUU6rgYkRR9RmuIQhOIzHog&s",
                price: 2000,
                qty: 2
            },
            {
                sno: 3,
                name: "Smart Watch",
                imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6q1MIkKSH0xKD79p3gdkzCpbYp_oVPji9ZA&s",
                price: 3000,
                qty: 2
            },
            {
                sno: 4,
                name: "Lg Watch",
                imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wjpgJLuIlZYrGjMyhfqFX-ra7pgohxWfUw&s",
                price: 500,
                qty: 2
            }
        ]
    });

    let { products } = state

    let Increment = (productId) => {
        // console.log("hello", productId)
        // console.log("Ravi", products)
        let Items = products.map((product) => {
            // console.log("product", product)
            if (product?.sno === productId) {
                // console.log("If", product)
                return {
                    ...product,
                    qty: product.qty + 1,
                    // price: product.price * (product.qty + 1)
                }

            }
            // else {
            // console.log("Else", product)
            // return {
            // ...product,

            // }
            // }

        })
        // console.log("Bardal", Items)
        setState((state) => ({
            products: [...Items]
        }))
    }
    return (
        <>
            <h1>Shoping Card :</h1>
            <p>Paragraph :</p>
            <table>
                <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {
                    products.map((product) => {
                        return (
                            <tr key={product.sno}>
                                <td>{product.sno}</td>
                                <td>{product.name}</td>
                                <td><img src={product.imge} height={50} width={50} /></td>
                                <td>{product.price}</td>
                                <td>
                                    <i class="fa-solid fa-minus" />
                                    {product.qty}
                                    <i onClick={() => 
                                        // console.log("Good", product.sno);
                                        Increment(product.sno)} class="fa-solid fa-plus" />
                                </td>
                                <td>{product.price * product.qty}</td>
                            </tr>
                        )
                    })
                }

            </table >
        </>
    )
}

export default Shoping_Card
