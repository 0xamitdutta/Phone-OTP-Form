import { useEffect, useRef, useState } from 'react'
import '../App.css'

const OTPInput = ({ length }) => {
    const [OTP, setOTP] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0].focus();
    }, [])

    const handleChange = (e, index) => {
        // Check if value entered is number
        const value = e.target.value;
        if (isNaN(value)) {
            return;
        }
        // Update state
        const newOTP = [...OTP];
        newOTP[index] = value.substring(value.length - 1);
        setOTP(newOTP);

        // Change the focus to next input once entered
        if (index !== length - 1 && value) {
            inputRefs.current[index + 1].focus();
        }

        const OTPString = newOTP.join('');
        if (OTPString.length === length) {
            console.log('Login Successful');
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key == 'Backspace' && !OTP[index] && index !== 0) {
                inputRefs.current[index - 1].focus();
        }
    }

    return (
        <div className='app-container'>
            <h1>Enter 4 digit OTP</h1>
            {
                OTP.map((value, index) => {
                    return (
                        <input
                            key={index}
                            type='text'
                            className='otp-input'
                            value={value}
                            ref={(ref) => inputRefs.current[index] = ref}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    )
                })
            }
        </div>
    )
}

export default OTPInput