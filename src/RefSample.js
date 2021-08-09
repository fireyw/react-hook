import React, {useRef} from 'react';

function RefSample(props) {

    const id= useRef(1);
    const setId = (n)=>{
        id.current=n;
    }
    const printId= ()=>{
        console.log(id.current);
    }
    setId(10);
    printId();
    return (
        <div>sample</div>
    );
}

export default RefSample;