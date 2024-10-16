import React, { useState } from 'react'

const Shoping_1_Card = () => {
    let [data, setData] = useState({
        Man_Things: [
            {
                serialNo: 1,
                name: "Shoes",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJwHRRTa2y8G_fcBEFHl-plJZJkkSQVb20A&s",
                price: 500,
                quantiti: 2
            },
            {
                serialNo: 2,
                name: "Pant",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcxm2a0GwyVzOLepX2JxhruIiDbhoTEchjA&s",
                price: 800,
                quantiti: 2
            },
            {
                serialNo: 3,
                name: "Shirt",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwww3VuQxmNsTXvHArhxB8ngPLOlppwkKTqg&s",
                price: 1200,
                quantiti: 2
            },
            {
                serialNo: 4,
                name: "T-shirt",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNAatE0HQKzbX3QnHQdwnDXzL7eN0DkiEYQ&s",
                price: 700,
                quantiti: 2
            },
            {
                serialNo: 5,
                name: "Watch",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxe3CE8OJt4Ss_VBlmsRWS8oU5JSomOx7AQ&s",
                price: 1500,
                quantiti: 2
            }
        ]
    })
    let { Man_Things } = data

    let Decress = (proId) => {
        let Value = Man_Things.map((item) => {
            if (item.serialNo === proId) {
                return {
                    ...item,
                    quantiti: item.quantiti - 1
                }
            }
            return item
        })
        setData((data) => ({
            Man_Things: [...Value]
        }))
    }

    let Increass = (proId) => {
        let Value = Man_Things.map((item) => {
            if (item.serialNo === proId) {
                return {
                    ...item,
                    quantiti: item.quantiti + 1
                }
            }
            return item;
        });
        setData((data) => ({
            Man_Things: [...Value]
        }))
    }
    return (
        <div>
            <table>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Imagee</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                </tr>
                {
                    Man_Things.map((item) => {
                        return (
                            <tr>
                                <td>{item.serialNo}</td>
                                <td>{item.name}</td>
                                <td><img src={item.image} height={50} width={50} /></td>
                                <td>{item.price}</td>
                                <td>
                                    <i onClick={() => Decress(item.serialNo)} class="fa-solid fa-minus mx-1" />
                                    {item.quantiti}
                                    <i onClick={() => Increass(item.serialNo)} class="fa-solid fa-plus mx-1" />
                                </td>
                                <td>{item.price * item.quantiti}</td>
                            </tr>
                        )
                    })
                }
            </table>

        </div>
    )
}

export default Shoping_1_Card
