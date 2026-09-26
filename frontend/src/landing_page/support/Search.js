import React from 'react';

function Search() {
    const handleMyTickets = () => {
        alert('You have no open support tickets at this time. All services are running normally.');
    };

    return (
        <div className='bg-body-secondary'>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <div className='d-flex mb-4 align-items-center'>
                                <div className='col'><h1 style={{ fontWeight: 500 }}>Support Portal</h1></div>
                                <div className='col-8 text-end'>
                                    <button 
                                        className='btn btn-primary px-3 py-2' 
                                        onClick={handleMyTickets}
                                        style={{ background: "#387ed1", borderColor: "#387ed1" }}
                                    >
                                        My tickets
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input-group input-group-lg">
                        <span className="input-group-text bg-white" id="inputGroup-sizing-lg">
                            🔍
                        </span>
                        <input 
                            type="text" 
                            className="form-control p-3 border-start-0" 
                            aria-label="Search support" 
                            placeholder='Eg: How do I open my account, How do I activate F&O...'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;