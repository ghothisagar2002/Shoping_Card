import React, { useState } from 'react'

const StoreCard_1 = () => {
    let [data, setData] = useState({
        product: [
            {
                serialNumr: 1,
                name: "Remote",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYtEZXoMkEI13RWBO5qjjgdXk_J_VJ8_VVHg&s",
                price: 500,
                qty: 2
            },
            {
                serialNumr: 2,
                name: "Laptop",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TRU7eMvIBg992vi9vDU1qM_XuvHFFBCflw&s",
                price: 800,
                qty: 2
            },
            {
                serialNumr: 3,
                name: "mobil",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3d425uwMJGKGtfncKI3jINUTbtXWSqeYVQ&s",
                price: 1000,
                qty: 2
            },
            {
                serialNumr: 4,
                name: "Watch",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbnPpOX7GA5JPUHOY1yiswmvmVGfh6Ov5YA&s",
                price: 500,
                qty: 2
            },
            {
                serialNumr: 5,
                name: "shoes",
                image: "https://www.travelandleisure.com/thmb/PfaICiWm5dS05LJYtz6OQQUVn_E=/fit-in/1500x2666/filters:no_upscale():max_bytes(150000):strip_icc()/tal-mens-travel-shoes-test-allbirds-tree-dasher-2-ivy-ford-02-ec6af8e503f64eb5b518570290c97721.jpg",
                price: 1200,
                qty: 2
            }
        ]
    })

    let { product } = data

    let decrease = (ItemsId) => {
        let res = product.map((Val) => {
            if (Val.serialNumr === ItemsId) {
                return {
                    ...Val,
                    qty: Val.qty - 1 ? Val.qty - 1 : 1,
                }
            }
            return Val
        })
        setData((data) => ({
            product: [...res]
        }))
    }

    let Increase = (ItemsId) => {
        let res = product.map((Val) => {
            if (Val.serialNumr === ItemsId) {
                return {
                    ...Val,
                    qty: Val.qty + 1
                }
            }
            return Val
        })
        setData((data) => ({
            product: [...res]
        }))
    }
    let overallTotal = () => {
        let total = 0;
        for (let Val of product) {
            total += Val.price * Val.qty
        }
        return total
    }

    return (
        <div>
            <h1>Store Data Card :</h1>
            <p>Store Data Paragraph </p>
            <table border={2}>
                <tr>
                    <th>SerialNumr:</th>
                    <th>Name:</th>
                    <th>Image:</th>
                    <th>Price:</th>
                    <th>Quanttity:</th>
                    <th>Totally :</th>
                </tr>
                {
                    product.map((Val) => {
                        return (
                            <tr key={Val.serialNumr}>
                                <td>{Val.serialNumr}</td>
                                <td>{Val.name}</td>
                                <td><img src={Val.image} height={50} width={50} /></td>
                                <td>&#8377;{(Val.price).toFixed(2)}</td>
                                <td>
                                    <i onClick={() => decrease(Val.serialNumr)} class="fa-solid fa-minus" />
                                    {Val.qty}
                                    <i onClick={() => Increase(Val.serialNumr)} class="fa-solid fa-plus" />
                                </td>
                                <td>&#8377;{(Val.price * Val.qty).toFixed(2)}</td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td colSpan={4}></td>
                    <td>GrandTotal:</td>
                    <td>{overallTotal()}</td>
                </tr>
            </table>
        </div>
    )
}

export default StoreCard_1
