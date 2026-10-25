import { useState, useEffect, useCallback, useRef } from 'react'
import '../styles/about.css'

const aboutImages = [
  '/assets/abtme-1.JPG',
  '/assets/abtme-2.jpg',
  '/assets/abtme-3.JPG',
  '/assets/senso-3.JPG',
  '/assets/abtme-4.JPG',
]

const timeline = [
  { date: 'Aug 2021',  label: 'Begin my undergrad at Sacramento State University' },
  { date: 'Feb 2023',  label: 'I become a U.S. Department of State Gilman Scholar' },
  { date: 'Mar 2023',  label: 'I start my study abroad at Yokohama National University' },
  { date: 'Mar 2024',  label: 'I participate in my first hackathon, Hornet Hacks 1.0' },
  { date: 'Oct 2025',  label: 'I win my first hackathon with Hand It Down at Hornet Hacks 3.0' },
  { date: 'Jan 2026',  label: 'I begin my Physical Security & IT Internship at Sac State Police Department' },
  { date: 'Feb 2026',  label: 'I win my second hackathon with Senso at Hornet Hacks 4.0' },
  { date: 'May 2026',  label: "I finish my capstone project, Floora, and graduate Cum Laude with a Bachelor's in CS" },
]

const funFacts = [
  'I love cooking and am a giant foodie. Mexican and Korean food are my favorites.',
  'I love video games. God of War and Ghost of Tsushima are my favorites.',
  'I recently started learning to build DIY hardware electronics from spare parts.',
]

function AutoPhotoCarousel({ images }) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIdx(i => (i + 1) % images.length)
    }, 3500)
  }, [images.length])

  useEffect(() => {
    if (images.length > 1) startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer, images.length])

  return (
    <div className="about-carousel-wrap">
      <div className="about-carousel">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Photo ${i + 1}`}
            className={i === idx ? 'visible' : ''}
          />
        ))}
      </div>
      <div className="about-carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`abt-dot ${i === idx ? 'active' : ''}`}
            onClick={() => { setIdx(i); startTimer() }}
            aria-label={`Photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="about container">
      <div className="about-sage-blob" aria-hidden="true" />
      <div className="about-sage-blob2" aria-hidden="true" />
      <div className="about-sage-blob3" aria-hidden="true" />

      <h1 className="about-page-title">About Me</h1>

      <div className="about-bio">
        <div className="bio-text">
          <h2 className="bio-greeting">Hi, I'm Kayla.</h2>
          <p>I'm a recent Computer Science graduate from Sacramento State, and I love building software that is genuinely useful to the people who use it. That is what pulls me toward frontend engineering, product thinking, and accessibility: they all start with understanding who you're building for.</p>
          <p>My year at Yokohama National University as a U.S. Department of State Gilman Scholar took that mindset further. Adapting to a new academic environment built my independence and resilience, and working with classmates from around the world grew my Japanese and showed me how differently people can experience the same problem.</p>
          <p>Back home, hackathons became my favorite way to learn quickly. I've competed in four and won two, including Senso, a braille learning device my team built in 48 hours, and I'm happiest where creativity meets technical execution. I'm especially drawn to accessibility-focused products, where thoughtful design makes a real difference in someone's day.</p>
          <a href="/assets/Kayla_Garibay_Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </div>
        <AutoPhotoCarousel images={aboutImages} />
      </div>

      <section className="timeline-section">
        <h2 className="section-label">Background at a Glance</h2>
        <div className="timeline-scroll">
          <div className="timeline-track" style={{ '--n': timeline.length }}>
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'above' : 'below'}`}>
                <div className="timeline-box">
                  <span className="timeline-date">{item.date}</span>
                  <p className="timeline-label">{item.label}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="facts-section">
        <h2 className="section-label">Fun Facts</h2>
        <div className="facts-grid">
          {funFacts.map((f, i) => (
            <p key={i} className="fact-item">{f}</p>
          ))}
        </div>
      </section>
    </div>
  )
}