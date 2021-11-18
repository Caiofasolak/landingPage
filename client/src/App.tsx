import React, { useCallback, useState, useEffect } from "react";
import Axios from 'axios';
import Header from './components/Header'
import Form from './components/Form'
import './components/Form.css'
import "./App.css"
import { nome, email, whats } from "./components/masks";


type User = {
    name: string;
    email: string;
    whats: string;
    auth: string;
}

export const App: React.FC = () => {
    const [user, setUser] = useState<User>({} as User);

    const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value,

        });
    }, [user]);

    const insertUser = () => {
        Axios.post('http://localhost:3001/api/insert', {
            userName: user.name,
            userEmail: user.email, userWhats: user.whats,
            userAuth: user.auth,
        });
    };

    return (
        <body>
            <Header></Header>
            <div className="formWrapper">
                <Form name="name" mask="nome" prefix="Nome" onChange={handleChange} />
                <Form name="email" mask="email" prefix="Email" onChange={handleChange} />
                <Form name="whats" mask="whats" prefix="WhatsApp" onChange={handleChange} />
            </div>
            <div className="autWrapper">
                <div className="aut">
                    <input name="auth" className="checkbox" type="checkbox" id="autorizacao_id" onChange={handleChange} />
                    <label className="autorizacao">Eu preenchi corretamente o formulário.</label>
                </div>
                <button className="button" onClick={insertUser} >ENVIAR</button>
            </div>
        </body>
    )
};