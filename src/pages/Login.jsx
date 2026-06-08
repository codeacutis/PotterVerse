import { FaUser, FaLock, FaSign } from 'react-icons/fa'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { signIn } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = signIn(email, password);
        if (result) navigate('/home');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <FaUser className='icon'/>
                </div>
                <div>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <FaLock className='icon'/>
                </div>
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login