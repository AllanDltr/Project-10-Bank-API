import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { FetchData } from "../../services/FetchData";
import { loadData, saveData } from "../../services/LocalStorage";
import './Form.css'

export const Form = () => {

    const [login, setLogin] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = loadData('token')

    useEffect(() => {
        if(token) {
            navigate("/profile")
        }
    }, [])

    const handleChange = e => {
        setLogin((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
            }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const fetchedData = await FetchData('user/login', 'POST', {body:login})
        await dispatch({type:"auth/addUserToken", payload: fetchedData.body.token})
        saveData('token', fetchedData.body.token)
        navigate('/profile');
    }

    const {email, password} = login

    return (
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"> </i>
                    <h1> Sign In </h1>
                    <form id="form" onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username"> Username </label>
                            <input type="text" value={email} name="email" id="username" onChange={handleChange}/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password"> Password </label>
                            <input type="password" value={password} name="password" id="password" onChange={handleChange}/>
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me"> Remember me </label>
                        </div>

                        <button className="sign-in-button"> Sign in </button>
                    </form>
            </section>
    )};