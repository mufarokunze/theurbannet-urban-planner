import { Link } from "react-router-dom";
import authPhoto from "../assets/sign_up_image.png";

function SignUp() {
    return (
        <main className="auth-page">
            <section className="auth-card">
                <div className="auth-content">
                    <p className="eyebrow">Join the Community</p>
                    <h1>
                        Create your <span>Urban Planner</span> account today!
                    </h1>
                    <p className="intro-text">Start planning with Real People Real Services</p>
                    <form className="auth-form">
                        {/* Including the Role selector which will connect with the database */}
                        <div className="role-selector">
                            <label style={{ cursor: 'pointer'}}>
                                <input type="radio" name="role" value="customer" defaultChecked />
                                Customer <br/>(I am planning an event)
                            </label>
                            <label style={{cursor: 'pointer'}}>
                                <input type="radio" name="role" value="provider"  />
                                Service Provider <br/>(I am offering a service)
                            </label>
                        </div>

                        <label>
                            Email 
                            <input type="email" placeholder="Enter your email" required />
                        </label>

                        <label>
                            Password 
                            <input type="password" placeholder="Create a password" required />
                        </label>

                        <button type="submit">Sign Up</button>
                        <p>Already have an account? <Link to="/login" style={{color: 'var(--orange)'}}>Log In here</Link></p>
                    </form>
                </div>

                <div className="auth-image">
                    <img src={authPhoto} alt="urbannet registration visual" />
                </div>
            </section>
        </main>
    )
}

export default SignUp
// for styling the role sector style={{ display: 'flex', gap: '10px', marginBottom: '20px'
// styling the p after Sign up button : <p style={{ marginTop: '15px', fontSize: '14px' }}>

