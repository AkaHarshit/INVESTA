import React from 'react'
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-4 mb-4 mb-md-0'>
                    <h1 className='mb-3 fs-2 text-center text-md-start'>Unbeatable pricing</h1>
                    <p className='text-center text-md-start'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='d-block text-center text-md-start' style={{textDecoration:"none"}} >See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-12 col-md-2 d-none d-md-block'></div>
                <div className='col-12 col-md-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col-6 col-md-6 p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and<br/> direct mutual funds</p>
                        </div>
                        <div className='col-6 col-md-6 p-3 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
     );
}

export default Pricing;