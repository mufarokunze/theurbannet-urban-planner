import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      
      {/* 1. The "Immediate Gateway" Hero (Airbnb Style) */}
      <section className="home-hero">
        <img src="/src/assets/hero_image.png" alt="A lady planning an event" className="hero-image" />
        <div className="hero-content">
          <h1>Event Planning, <br/><span>Simplified.</span></h1>
          <p>The ultimate workspace for customers to plan <br/> and professionals to thrive.</p>
          <Link to="/signup" className="search-btn">Start Planning</Link>
                    <p className="hero-subtext">Already have an account? <Link to="/login">Log in</Link></p>
          
          {/* /* <div className="search-bar home-search">
            <input type="text" placeholder="What are we planning today? (e.g., Wedding)" />
          </div>
 */}
        </div> */
      </section>

      {/* 2. The "Product-Led Showcase" (Notion Style) */}
      <section className="home-showcase">
        <h2>How <span>The Urban Planner</span> Works</h2>
        <p className="section-subtitle">Say goodbye to scattered spreadsheets. We guide you from idea to execution.</p>
        
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon"></div>
            <h3>1. Tell us your vision</h3>
            <p>Select your event type and location. We instantly generate a custom blueprint.</p>
          </div>
          <div className="step-card">
            <div className="step-icon"></div>
            <h3>2. Get your checklist</h3>
            <p>Follow your Guided Plan to see exactly which services you need, step-by-step.</p>
          </div>
          <div className="step-card">
            <div className="step-icon"></div>
            <h3>3. Book the best</h3>
            <p>Review top-rated local professionals who opt-in directly to your event.</p>
          </div>
        </div>
      </section>

      {/* 3. The "Two-Sided Story" Provider CTA (HoneyBook Style) */}
      <section className="provider-cta">
        <div className="cta-content">
          <h2>Are you a top-tier professional?</h2>
          <p>Stop chasing cold leads. Join the marketplace, see open events in your area, and grow your business with our "Marketplace Pull" system.</p>
          <Link to="/signup" className="provider-btn">Apply as a Provider</Link>
        </div>
      </section>

    </main>
  );
}

export default Home;