import './brend-list.css'
import React from 'react';
import data from './data-brends'

function BrendList() {

    let brends = data.map((elem, index) => {
        return <img key = {index} src={elem.name} alt={elem.descr}></img>
    });

    return (
        <>
            <div className='brends'>{brends}</div>
        </>
    );
}

export default BrendList;