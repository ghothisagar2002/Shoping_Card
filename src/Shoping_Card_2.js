import React, { useState } from 'react'

const Shoping_Card_2 = () => {
    let [item, setItem] = useState({
        cheges: [
            {
                order: 1,
                name: "MathsBook",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ36DqvSdHmFkolE9m9xS_nDVp8qI_QUnng&s",
                price: 200,
                quant: 2
            },
            {
                order: 2,
                name: "ReasiningBook",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwQteKOGYoqjfAYQFnJ5fCCDSm8ZFAUm1t7Q&s",
                price: 400,
                quant: 2
            },
            {
                order: 3,
                name: "English",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CKLm0HrYPXrDK8qyA5nFwbNWsnjmu-ppyw&s",
                price: 500,
                quant: 2
            },
            {
                order: 4,
                name: "Hindi",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrecpRS6UV0NyVzZ4eoC0OrD5Y9OKn9QSxvA&s",
                price: 150,
                quant: 2
            },
            {
                order: 5,
                name: "Physics",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlXv3_hcq7CeLvc3HdViR4_tfCxfRMGx-zg&s",
                price: 800,
                quant: 2
            }
        ]
    })

    let { cheges } = item

    let minus = (quality) => {
        let result = cheges.map((value) => {
            if (value.order === quality) {
                return {
                    ...value,
                    quant: value.quant - 1
                }
            }
            return value
        })
        setItem((item) => ({
            cheges: [...result]
        }))
    }

    let plues = (quality) => {
        let result = cheges.map((value) => {
            if (value.order === quality) {
                return {
                    ...value,
                    quant: value.quant + 1
                }
            }
            return value
        })
        setItem((item) => ({
            cheges: [...result]
        }))
    }

    let grandTotally = () => {
        let total = 0;
        for (let value of cheges) {
            total += value.price * value.quant
        }
        return total
    }

    return (
        <div>
            <h1>This is a Shoping Card @2</h1>
            <p>This is shoping Card Paragraph</p>
            <table>
                <tr>
                    <th>orderNo:</th>
                    <th>Name:</th>
                    <th>Image:</th>
                    <th>Price:</th>
                    <th>Quanti:</th>
                    <th>Total:</th>
                </tr>
                {
                    cheges.map((value) => {
                        return (
                            <tr>
                                <td>{value.order}</td>
                                <td>{value.name}</td>
                                <td><img src={value.image} height={50} width={50} /></td>
                                <td>&#8377;{value.price.toFixed(2)}</td>
                                <td>
                                    <i onClick={() => minus(value.order)} class="fa-solid fa-minus mx-1" />
                                    {value.quant}
                                    <i onClick={
                                        () => plues(value.order)

                                    } class="fa-solid fa-plus mx-1" />
                                </td>
                                <td>&#8377;{(value.price * value.quant).toFixed(2)}</td>
                            </tr>
                        )
                    })
                }

                <tr>
                    <td colSpan={4}></td>
                    <td>Grand Total :</td>
                    <td>{grandTotally()}</td>
                </tr>
                
            </table>
        </div>
    )
}

export default Shoping_Card_2
