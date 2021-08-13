import React from 'react';

const  Struct= ({name,age,index})=> {
    return (
        <div>
            <ul>
                <div>{name}</div>
                <div>{age}</div>
                <div>{index}</div>
            </ul>
        </div>
    );
}

export default Struct;