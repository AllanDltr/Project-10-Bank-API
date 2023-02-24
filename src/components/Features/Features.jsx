import React from 'react';
import './Features.css'
import chat from '../../assets/Icons/icon-chat.png'
import money from '../../assets/Icons/icon-money.png'
import security from '../../assets/Icons/icon-security.png'

export const Features = () => {

    return (
        <section className="features">
            <h2 className="sr-only"> Features </h2>
                <div className="feature-item"> 
                    <img src={chat} className="feature-icon" alt="chat" />
                    <h3> You are our #1 priority</h3>
                    <p> Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. </p>
                </div>
                <div className="feature-item"> 
                    <img src ={money} className="feature-icon" alt="money" />
                    <h3> More savings means higher rates</h3>
                    <p> The more you save with us, the higher your interest rate will be!</p>
                </div>
                <div className="feature-item"> 
                    <img src={security} className="feature-icon" alt="security" />
                    <h3> Security you can trust</h3>
                    <p> We use top of the line encryption to make sure your data and money is always safe.</p>
                </div>
        </section>
    )};