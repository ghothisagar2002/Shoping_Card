import React from 'react'

const SagarFun = () => {
    return (
        <>
            <div className='Practice_One'>
                <h1>Heading One</h1>
                <h2>Heading Two</h2>
                <h3>Heading Three</h3>
                <h4>Heading Four</h4>
                <h5>Heading Five</h5>
                <h6>Heading Six</h6>

                <div className='Paragraps'>
                    <p className='para'>Paragraph One Class</p>
                    <p id="fpara">Paragraph Two This is Id</p>
                    <p>Paragraph Three this Only Tag</p>
                </div>

                <div className='Images'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMyBrJc7D6wWiUVoFXMFGUoXJFeSbxuJboQ&s" alt="Lpu_image" />
                </div>

                <div className='anchor_Tag'>
                    <a href='https://chromewebstore.google.com/?hl=en'>Click Here</a>&nbsp;&nbsp;

                    <a href="https://www.youtube.com/" target='_blank' >Goto New Page</a>&nbsp;&nbsp;

                    <a href="#fpara">Open Self Page</a>
                </div>

                {/* order and unorder list starting */}
                <ol type="number">
                    <li>Ram</li>
                    <li>Laxman</li>
                    <li>Seetha</li>
                </ol><br />

                <ol type="I">
                    <li>Mango</li>
                    <li>Orange</li>
                    <li>Banana</li>
                </ol><br />

                <ol type="i">
                    <li>Waheguru ji</li>
                    <li>Satnam sri Waheguru ji</li>
                    <li>Singh</li>
                </ol><br />

                <ol type="A">
                    <li>Mango</li>
                    <li>Orange</li>
                    <li>Banana</li>
                </ol><br />

                <ol type="a">
                    <li>Mango</li>
                    <li>Orange</li>
                    <li>Banana</li>
                </ol><br />
                {/* orderlist Ending */}

                {/* Unordered list starting */}
                <ul type="disc">
                    <li>Nandhakhan park</li>
                    <li>Chilka park</li>
                    <li>Simplipall national park</li>
                </ul><br />

                <ul type="circle">
                    <li>Nandhakhan park</li>
                    <li>Chilka park</li>
                    <li>Simplipall national park</li>
                </ul><br />

                <ul type="square">
                    <li>Nandhakhan park</li>
                    <li>Chilka park</li>
                    <li>Simplipall national park</li>
                </ul><br />
                {/* unorderlist Ending */}

                {/* Tages */}
                <div className='tages'>
                    <b>This is a bold tag</b>&nbsp;
                    <i>Italic tag</i>&nbsp;
                    <mark>Mark Tag</mark>&nbsp;
                    <em>Emphasized tag</em>&nbsp;
                    <u>Underline Tag</u>&nbsp;
                    <strong>Strong Tag</strong>&nbsp;
                    <p>H<sub>2</sub>O<sub>2</sub></p>&nbsp;
                    <p>e=MC<sup>2</sup></p>&nbsp;
                    <p>This is a good morning<blockquote>
                        display the Best method
                    </blockquote></p>
                    <p>This is <q>Quotation</q> tag</p>
                    <p>This is a best <abbr title="WHO">World Health Oraganization</abbr></p>

                    <p>This is : addresss tag :<address>name:sagar<br />
                        H.No : 3-67/2<br />
                        Mandal:kangti <br />
                        Dist:Narayanked<br />
                    </address></p>
                    <p>This is <marquee>Hello Sagar</marquee></p>
                    {/* Tabels  */}
                    <table border="1" align="center">
                        <tr>
                            <th>Name:</th>
                            <th>Age:</th>
                            <th>Contact No :</th>
                        </tr>
                        <tr>
                            <td>Sagar</td>
                            <td>22</td>
                            <td>6303803250</td>
                        </tr>
                        <tr>
                            <td>Raju Police</td>
                            <td>23</td>
                            <td>7891566235</td>
                        </tr>
                        <tr>
                            <td>Jaggu</td>
                            <td>21</td>
                            <td>9347052901</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td rowSpan={2}>3</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                    </table>
                    {/* Nested Tables */}
                    <table border={1}>
                        <tr>
                            <td>Sagar</td>
                            <td>Gothi</td>
                        </tr>
                        <tr>
                            <td>Govind</td>
                            <td>
                                <table border={1}>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>Ram</td>
                            <td>Seetha</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SagarFun;
