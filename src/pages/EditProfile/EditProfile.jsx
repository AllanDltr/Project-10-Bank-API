import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FetchData } from '../../services/FetchData';
import './EditProfile.css'

export const EditProfile = () => {
    const UserInfo = useSelector(state => state.auth.userInfo)
    const token = useSelector(state => state.auth.userToken)

    const [profileData, setProfileData] = useState({
        firstName: UserInfo.firstName,
        lastName: UserInfo.lastName,
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = e => {
        setProfileData((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if(profileData.firstName === "" || profileData.lastName === "") {
            return;
        } else {
            const bearer = "Bearer "+ token

            const fetchedData = await FetchData('user/profile', 'PUT', {bearer: bearer, body:profileData})
             dispatch({type:"auth/editUserInfo", payload: {"firstName": fetchedData.body.firstName, "lastName": fetchedData.body.lastName}})
            navigate('/profile')
        }
    }

    const { firstName, lastName } = profileData;

    return (
    <main className="main bg-dark">
        <section className="edit-profile-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Edit Profile</h1>
            <form id="form" onSubmit={submitHandler}>
                <div className="input-wrapper">
                    <label htmlFor="username">Firstname</label><input type="text" value={firstName} name="firstName"
                        id="firstName" onChange={handleChange}></input>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Lastname</label><input type="text" value={lastName} name="lastName"
                        id="lastName" onChange={handleChange}></input>
                </div>
                <button type="submit" className="sign-in-button">Submit</button>
            </form>
        </section>
    </main>
)}