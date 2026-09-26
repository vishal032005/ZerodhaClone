import React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
    return (  
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                    <h3 className='mt-5 '>404 Kiaan couldn’t find that page</h3>
                    <p className='p-2 fs-5 text-secondary'>We couldn’t find the page you were looking for. Visit <Link to="/">Zerodha’s home page</Link></p>
                    
            </div>

        </div>
    );
}

export default Notfound;