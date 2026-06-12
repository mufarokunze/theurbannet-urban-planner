import { Link } from "react-router-dom";
import authPhoto from "../assets/login_image.png";

function Login() {
    return (
        <main className="auth-page">
            <section className="auth-card">
                <div className="auth-content">
                    <p className="eyebrow">Welcome Back</p>
                    <h1>Access your <span>Workspace</span></h1>
                    <p className="intro-text">Log in to manage your events and services</p>

                    <form action="" className="auth-form">
                        <label>
                            Email
                            <input type="email" placeholder="Enter your email" required/>
                        </label>
                        <label>
                            Password
                            <input type="password" placeholder="Enter your password" required />
                        </label>

                        <button type="submit">Log In</button>
                        <p>Don't have an account? <Link to="/signup" style={{color: 'var(--orange)'}}>Sign up here</Link></p>
                    </form>
                </div>

                <div className="auth-image">
                    <img src={authPhoto} alt="Urbannet Login Visual" />
                </div>
            </section>
        </main>
    );
}

export default Login
// for styling the p after the submit button : style={{ marginTop: '15px', fontSize: '14px' }}