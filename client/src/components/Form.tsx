import React, { InputHTMLAttributes, useCallback } from 'react';
import { email, nome, whats } from './masks'
import './Form.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: "nome" | "whats" | "email";
    prefix?: string;
}

const Form: React.FC<InputProps> = ({ mask, prefix, ...props }) => {
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        if (mask === 'nome') {
            nome(e);
        }
        if (mask === 'whats') {
            whats(e);
        }
        if (mask === 'email') {
            email(e);
        }
    }, [mask]);
    return (
        <div className="form prefix">
            {prefix && <span className="prefix-span">{prefix}</span>}
            <input {...props} onKeyUp={handleKeyUp} />
        </div>
    )
}

export default Form;