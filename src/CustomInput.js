import React from 'react';

const CustomInput = React.forwardRef(({ type, onKeyDown, placeholder }, ref) => {
    return (
        <input
            type={type}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            ref={ref}
        />
    );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;