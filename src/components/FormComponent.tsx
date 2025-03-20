import { ChangeEvent, FormEvent, useState } from "react";
import errorIcon from '../images/icons/error.png';

interface Condition {
    text: string;
    check: boolean;
}

const FormComponent = () => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const conditions: Condition[] = [
        { text: 'Minimum 6 characters', check: password.length >= 6 },
        { text: 'One uppercase letter', check: /[A-Z]/.test(password) },
        { text: 'One lowercase letter', check: /[a-z]/.test(password) },
        { text: 'One number', check: /\d/.test(password) },
        { text: 'One special character', check: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
    ];

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (conditions.some((cond) => !cond.check)) {
            setError('Password does not meet all conditions.');
            return;
        }
        setError('');
        alert('Password successfully set!');

    };

    const handleReset = () => {
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    return (
        <div className='card-container'>
            <div className='card'>
                <div className='header-wrapper'>
                    <h1>Create a Strong Password</h1>
                    <p>Follow the rules below to secure your account</p>
                </div>
                <div className='form-wrapper'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-wrapper'>
                            <label>Password</label>
                            <input type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={`toggle-visibility-btn ${showPassword ? 'show' : 'hide'}`}
                            >
                                
                            </button>
                        </div>
                        <div className='input-wrapper'>
                            <label>Confirm Password</label>
                            <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleConfirmPasswordChange} />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className={`toggle-visibility-btn ${showConfirmPassword ? 'show' : 'hide'}`}
                            >
                            </button>
                        </div>
                        <div className='password-strength'>
                            <div className="text">Strength</div>
                            <div className="score">
                                <div className={`scale scale-${conditions.filter((c) => c.check).length}`}></div>
                            </div>
                        </div>
                        <div className='checklist-wrapper'>
                            {conditions.map((cond, index) => (
                                <div key={index} className="condition">
                                    <div className={`check ${cond.check ? 'checked' : ''}`}></div>
                                    <div className={`text ${cond.check ? 'active' : ''}`}>{cond.text}</div>
                                </div>
                            ))}
                        </div>
                        <div className='buttons-wrapper'>
                            <button className='button btn-submit' type='submit'>Submit</button>
                            <button className='button btn-reset' type='reset' onClick={handleReset}>Reset</button>
                        </div>
                        {error && <div className='error-container'>
                            <img src={errorIcon} alt={'error'} width={15} height={15} />
                            <div className="message">{error}</div>
                        </div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormComponent;
