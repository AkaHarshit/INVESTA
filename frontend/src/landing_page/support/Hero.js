import React from 'react'
function Hero() {
    return ( 
        
        <section className='container-fluid' id="supportHero">
            <div className='p-3 p-md-5' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>

            </div>
            <div className='row p-3 p-md-5 m-0 m-md-3'>
                <div className='col-12 col-md-6 p-3 p-md-5 mb-4 mb-md-0'>
                    <h1 className='fs-3 mb-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className="mb-3 support-input" placeholder='Eg: how do i activate F&O, why is my order getting rejected..'/><br/>
                    <div className='support-links'>
                        <a className='d-block d-md-inline-block mb-2 mb-md-0' style={{marginRight:"20px"}} href=''>Track account opening</a>
                        <a className='d-block d-md-inline-block mb-2 mb-md-0' style={{marginRight:"20px"}} href=''>Track segment activation</a>
                        <a className='d-block d-md-inline-block mb-2 mb-md-0' style={{marginRight:"20px"}} href=''>Intraday margins</a>
                        <a className='d-block d-md-inline-block' href=''>Kite user manual</a>
                    </div>
                </div>
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li className='mb-3'><a href=''>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                    
                    
                </div>

            </div>
        </section>
     );
}

export default Hero;