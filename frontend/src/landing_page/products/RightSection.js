import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-1 p-5'></div>
                <div className='col-3 mt-5'>
                    
                    <h3 className='pb-4'>{productName}</h3>
                    <p className='lh-lg'>{productDescription}</p>
                    <a href={learnMore} >Learn More</a>
                
                </div>
                <div className='col-1'></div>
                 <div className='col-6 mb-5'>
                    <img src={imageURL} className='mb-5'></img>
                 </div>
            </div>
        </div>
    );
}

export default RightSection;