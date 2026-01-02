import React from 'react'
function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-3 p-md-5'>
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <h1 className='fs-2 mb-3 mb-md-5 text-center text-md-start'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Investa with ₹3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-4 mt-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. </p>
                    <h2 className='fs-4 mt-4'>The Investa universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4 mt-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <img src="media/images/ecosystem.png" style={{width:"100%", maxWidth:"90%", height: 'auto'}} className='d-block mx-auto'/>
                    <div className='text-center mt-3'>
                        <a href='' className='d-block d-md-inline-block mb-2 mb-md-0 mx-md-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' className='d-block d-md-inline-block' style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Stats;