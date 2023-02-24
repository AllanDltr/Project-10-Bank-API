import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { loadData, removeData  } from '../../services/LocalStorage'
import { FetchData } from '../../services/FetchData'
import logo from '../../assets/Logo/logo.png'
import './Header.css'

const userCircle = <FontAwesomeIcon icon={faUserCircle} />

export const Header = () => {

    const dispatch = useDispatch();
    let token= useSelector(state => state.auth.userToken);
    let tokenStore = loadData('token')

    useEffect(() => {
        if( token ) {
            const bearer = "Bearer "+token
            getData(bearer);
        }
        else if (tokenStore) {
            const bearer = "Bearer " + tokenStore
            getData(bearer);
            dispatch({ type: "auth/addUserToken", payload: tokenStore})
        }
    }, [])

    const getData = async (bearer) => {

        const fetchedData = await FetchData('user/profile', 'POST', {bearer: bearer})
        const { email, firstName, lastName } = await fetchedData.body
        dispatch({type:"auth/addUserInfo", payload: { email: email, firstName: firstName, lastName: lastName}})
    }


    const handleClick = (e) => {
        dispatch({type:"auth/resetUser"})
        // A (dé)commenter pour garder les ID en mémoire
        // removeData('token')
    }

    const profileData = useSelector(state => state.auth.userInfo)

    return (
        <nav className="main-nav">
            <Link to="/"> <img src={logo} className="logo" alt="logo" /> </Link>
            { profileData ?.firstName?(
            <div>
                <Link to="/profile" className="nav__item"> <i className="fa fa-user-circle"> { userCircle }</i> {profileData.firstName} </Link>
                <Link to="/" className="nav__item" onClick={handleClick}> <i className="fa fa-sign-out"> </i> Sign Out </Link>
            </div>
            ) : (
                <Link to="/sign-in" className="nav__item"> <i className="fa fa-user-circle"> {userCircle} </i> Sign in</Link>
                )}
        </nav>
    )
}