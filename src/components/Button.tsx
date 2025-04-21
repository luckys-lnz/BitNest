import React, { ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void;
    label: ReactNode;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false, className = '' }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`btn ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;