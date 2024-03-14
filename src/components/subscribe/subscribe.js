'use client';

import { useState } from 'react';
import SubscribeForm from './subscribeForm/subscribeForm'
import SubscribeResponse from './subscribeResponse/subscribeResponse'

const Subscribe = () => {

    const [subscriberName, setSubscriberName] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <div>
            {formSubmitted ? <SubscribeResponse name={subscriberName} /> : 
            <SubscribeForm setFormSubmitted={setFormSubmitted} setSubscriberName={setSubscriberName} />}
            
        </div>
    )
    
}

export default Subscribe;