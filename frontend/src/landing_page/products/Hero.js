import React from 'react'
function Hero() {
    return ( 
        <div className='container border-bottom mb-5'>
            <div className='row text-center mt-3 mt-md-5 p-3'>
                <h1 className='px-3'>Investa Products</h1>
                <h3 className='text-muted mt-3 fs-4 px-3'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-3 mb-5 px-3'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;