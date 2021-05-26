import React from 'react';
import './searchbox.css';

const Searchbox = ({searchChange}) => {
    return(
        <>
        <div className='searhbox'>
            <p style={{fontSize: '32px', fontWeight: '900', marginRight: '20px'}}> 
                        Repositories
            </p>

            <input
            className="input" 
                type="search"  
                placeholder="Search repository..."
                onChange= {searchChange}
                
            />
        </div>
        </>
    )
}

export default Searchbox;