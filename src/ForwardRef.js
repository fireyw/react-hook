import React from 'react';
import {useRef, useEffect} from "react";
import CustomInput from "./CustomInput";

function ForwardRef(props) {
    const nameRef = useRef(null);
    const submitRef = useRef(null);

    useEffect(() => {
        alert("페이지 로딩됨");
        nameRef.current.focus();
    }, []);

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            submitRef.current.focus();
        }
    };

    const submitKeyDown = () => {
        alert("form submitted");
        nameRef.current.focus();
    };

    return (
        <div className="App">
            <header className="App-header">
                {/*<input*/}
                {/*    type="text"*/}
                {/*    ref={nameRef}*/}
                {/*    onKeyDown={onKeyDown}*/}
                {/*    placeholder="이름을 입력하세요"*/}
                {/*></input>*/}
                <CustomInput
                    type="text"
                    ref={nameRef}
                    onKeyDown={onKeyDown}
                    placeholder="이름을 입력하세요"
                ></CustomInput>
                <button ref={submitRef} onKeyDown={submitKeyDown}>
                    제출
                </button>
            </header>
        </div>
    );
}


export default ForwardRef;