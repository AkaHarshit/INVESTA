import React from 'react'
function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                
                <div className='col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5 order-2 order-md-1'>
                    <h1 className='text-center text-md-start'>{productName}</h1>
                    <p className='text-center text-md-start'>{productDescription}</p>
                    <div className='text-center text-md-start'>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-12 col-md-6 text-center text-md-start mb-4 mb-md-0 order-1 order-md-2'>
                    <img src={imageURL} style={{width: '100%', maxWidth: '500px', height: 'auto'}} className='d-block mx-auto mx-md-0'/>
                </div>
            </div>

        </div>
     );
}

export default RightSection;
