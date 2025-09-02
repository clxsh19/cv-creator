import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Mouse movement parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home-body">
      {/* Animated particles background */}
      <div className="particles-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--delay': `${Math.random() * 20}s`,
              '--duration': `${15 + Math.random() * 10}s`,
              '--size': `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      <div className="content-container">
        {/* Main hero section */}
        <div className={`hero-section ${isVisible ? 'visible' : ''}`}>
          <div className="title-container">
            <div className="content">
              <h1 className="main-title">CVMaker</h1>
              <h1 className="main-title-outline">CVMaker</h1>
            </div>
          </div>

          <div className="hero-content">
            <div className="super-title">
              <span>Fast.</span>
              <span>Easy.</span>
              <span>Effective.</span>
            </div>

            <div className="intro-body">
              <h2>
                Online CV Maker
                <br />
                Create a Simple CV In
                <br />
                Our App for <span className="highlight">free</span>
              </h2>
            </div>

            <div className="intro-desc">
              One sheet of paper decides whether you get the job. Easy to create
              and
              <br />
              with option to download your CV as PDF.
            </div>

            <Link to="/form/info" className="create-btn glow-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="btn-content">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
                CREATE YOUR CV NOW
              </div>
            </Link>
          </div>
        </div>

        {/* Side image with parallax effect */}
        <div
          className="side-section"
          style={{
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
          }}
        >
          <div className="side-img">
            <div className="image-overlay"></div>
            <div className="floating-elements">
              <div className="floating-card card-1">
                <div className="card-icon">📄</div>
                <div className="card-text">Professional</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">⚡</div>
                <div className="card-text">Fast</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🎯</div>
                <div className="card-text">Effective</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="decorative-elements">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>
    </div>
  );
};

export default Home;
