import { FaUser, FaLock } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import potterverseLogo from '../../assets/potterverse_semfundo.webp';
import './Login.css';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const canvasRef = useRef(null);
    const particles = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = ['#ffe066', '#ffd700', '#c084fc', '#818cf8', '#ffffff'];

        function handleMouseMove(e) {
            for (let i = 0; i < 3; i++) {
                particles.current.push({
                    x: e.clientX + (Math.random() - 0.5) * 8,
                    y: e.clientY + (Math.random() - 0.5) * 8,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: -Math.random() * 1.2 - 0.3,
                    radius: Math.random() * 2.5 + 1,
                    alpha: Math.random() * 0.5 + 0.4,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    wobble: Math.random() * Math.PI * 2,
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.current = particles.current.filter(p => p.alpha > 0);
            particles.current.forEach(p => {
                p.wobble += 0.08;
                p.x += p.vx + Math.sin(p.wobble) * 0.4;
                p.y += p.vy;
                p.alpha -= 0.012;
                p.radius *= 0.98;
                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });
            requestAnimationFrame(animate);
        }

        animate();
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const { signIn, login } = useAuth();

    useEffect(() => {
        if (login) navigate('/home');
    }, [login]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')){
            setError("Digite um endereço de e-mail válido!");
            return;
        }
        const result = signIn(email, password);
        (result) ? navigate('/home') : setError("Email ou senha incorretos!");
    }

    return(
        <div className='login-page'>
            <canvas ref={canvasRef} className='magic-canvas' />
            <img src={potterverseLogo} alt='PotterVerse' className='login-logo' />
            <div className='login-card'>
                <form onSubmit={handleSubmit} noValidate>
                    <div className='input-group'>
                        <FaUser className='input-icon'/>
                        <input type="text" placeholder="Endereço de e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className='input-group'>
                        <FaLock className='input-icon'/>
                        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <button type='submit'>Entrar no Castelo</button>
                </form>
                {error && <p className='error-message'>{error}</p>}
            </div>
        </div>
    )
}

export default Login