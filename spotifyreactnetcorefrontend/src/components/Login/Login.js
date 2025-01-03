import React, { useState, useEffect } from "react"
import { LoginButton, LoginContainer } from "./Styles"
import { Buffer} from "buffer"


const LoginPassURL = () => {
        const [loginURL, setLoginURL] = useState([]);
    
        const showData = async () => {
            const response = await fetch('home/login')
            const encode = await response.json()
            const data = Buffer.from(encode, "base64").toString()
            setLoginURL(data)
        }
       //showData()
        
        useEffect(() => {
        showData()
        },[])
        return (
            <LoginContainer>
                <img src="https://1000logos.net/wp-content/uploads/2017/11/Spotify-Logo-2015.png" alt="logo" />
            <LoginButton href={loginURL}>Login with Spotify</LoginButton>
        </LoginContainer>
            )
    }
        export default LoginPassURL