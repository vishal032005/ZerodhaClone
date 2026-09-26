import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore 
    }) {
    return (
        <div className='container'>
            <div className='row mt-4 p-5'>
                <div className='col-1'></div>
                <div className='col-6 p-5'>
                    <img src={imageURL}></img>

                </div>
                <div className='col-4 ms-5  p-5 mt-5'>
                    <h3>{productName}</h3>
                    <p className='lh-lg'>{productDescription}</p>
                    <div>
                    <a href={tryDemo}> Try Demo</a>
                    <a href={learnMore} className='ms-5'>Learn More</a>
                    </div>
                    <div className='mt-4'>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'></img></a>
                    <a href={appStore}><img src='media/images/appstoreBadge.svg' className='ms-3'></img></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LeftSection;