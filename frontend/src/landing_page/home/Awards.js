import React from 'react'
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-md-6 p-3 p-md-5 text-center text-md-start'>
                    <img src='media/images/largestBroker.svg' style={{width: '100%', maxWidth: '500px', height: 'auto'}}/>
                </div>
                <div className='col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5'>
                    <h1 className='text-center text-md-start'>Largest stock broker in India</h1>
                    <p className='mb-5 text-center text-md-start'>2+ million Investa clients contribute to over 15% of all retail order
                        volumes in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <ul>
                                <li>
                                    <p>Futures & Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"100%", maxWidth:"90%", height: 'auto'}} className='d-block mx-auto mx-md-0'/>
                </div>

            </div>

        </div>
     );
}

export default Awards;