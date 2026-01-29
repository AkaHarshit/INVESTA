import React from 'react'
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-md-6 text-center text-md-start mb-4 mb-md-0'>
                    <img src={imageURL} style={{width: '100%', maxWidth: '500px', height: 'auto'}} className='d-block mx-auto mx-md-0'/>
                </div>
                <div className='col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5'>
                    <h1 className='text-center text-md-start'>{productName}</h1>
                    <p className='text-center text-md-start'>{productDescription}</p>
                    <div className='text-center text-md-start'>
                        <a href={tryDemo} className='d-block d-md-inline-block mb-2 mb-md-0' style={{textDecoration:"none"}}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} className='d-block d-md-inline-block ms-md-5' style={{textDecoration:"none"}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3 text-center text-md-start'>
                        <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg" style={{maxWidth: '150px', height: 'auto'}} alt="Get it on Google Play" /></a>
                        <a href={appStore} className='ms-md-5' style={{marginLeft:"20px"}}><img src="/media/images/appStoreBadge.svg" style={{maxWidth: '150px', height: 'auto'}} alt="Download on the App Store" /></a>
                    </div>

                </div>
            </div>

        </div>
     );
}

export default LeftSection;