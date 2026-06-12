import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="dashboard-page">
      
      {/* Hero Section */}
      <section className="dash-hero">
        <div className="hero-content">
          <h1>Plan for Every <span>Occasion</span></h1>
          <p>Find the right services for your needs — from celebrations to everyday life.</p>
          <div className="search-bar">
            <input type="text" placeholder="What are you planning?" />
            <button type="button">Search</button>
          </div>
        </div>
      </section>

      {/* Popular Combos (Inspiration Cards) */}
      <section className="combos-section">
        <div className="section-header">
          <h2>Popular Service Combos</h2>
          <Link to="/plans" className="view-all">View all combos →</Link>
        </div>
        
        <div className="combos-grid">
          {/* Card 1 */}
          <div className="combo-card">
            <div className="card-image placeholder-img-1"></div>
            <div className="card-content">
              <h3>Birthday Packages </h3>
              <p>Plan your perfect birthday with everything you need to celebrate.</p>
              <div className="tags">
                <span>Beauty & Grooming</span>
                <span>Food & Catering</span>
              </div>
              {/* <div className="card-footer">
                <span className="provider-count">👥 120+ Providers</span>
                <Link to="/plans" className="explore-link">Explore →</Link> */}
              {/* </div> */}
            </div>
          </div>

          {/* Card 2 */}
          <div className="combo-card">
            <div className="card-image placeholder-img-2"></div>
            <div className="card-content">
              <h3>Wedding Essentials </h3>
              <p>Curated services for your special day, stress-free.</p>
              <div className="tags">
                <span>Fashion & Styling</span>
                <span>Food & Catering</span>
              </div>
              {/* <div className="card-footer">
                <span className="provider-count">👥 200+ Providers</span>
                <Link to="/plans" className="explore-link">Explore →</Link> */}
              {/* </div> */}
            </div>
          </div>

          {/* Card 3 */}
          <div className="combo-card">
            <div className="card-image placeholder-img-3"></div>
            <div className="card-content">
              <h3>Self-Care Weekend </h3>
              <p>Relax, recharge, and pamper yourself with top professionals.</p>
              <div className="tags">
                <span>Wellness & Fitness</span>
                <span>Beauty & Grooming</span>
              </div>
              {/* <div className="card-footer">
                <span className="provider-count">👥 75+ Providers</span>
                <Link to="/plans" className="explore-link">Explore →</Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Browse By Category (Your 5 Categories) */}
      <section className="categories-section">
        <h2>Browse by Category</h2>
        <div className="categories-grid">
          
          <div className="category-card">
            <span className="cat-icon"></span>
            <div>
              <h3>Food & Catering</h3>
              <p>Private chefs, bakers, caterers</p>
            </div>
          </div>
          
          <div className="category-card">
            <span className="cat-icon"></span>
            <div>
              <h3>Fashion & Styling</h3>
              <p>Tailors, stylists, wardrobe</p>
            </div>
          </div>
          
          <div className="category-card">
            <span className="cat-icon"></span>
            <div>
              <h3>Wellness & Fitness</h3>
              <p>Trainers, yoga, nutrition</p>
            </div>
          </div>
          
          <div className="category-card">
            <span className="cat-icon"></span>
            <div>
              <h3>Home & Lifestyle</h3>
              <p>Designers, organizers, cleaners</p>
            </div>
          </div>
          
          <div className="category-card">
            <span className="cat-icon"></span>
            <div>
              <h3>Beauty & Grooming</h3>
              <p>Makeup, barbers, spa</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Dashboard;