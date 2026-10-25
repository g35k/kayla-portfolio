import { useState } from 'react'
import '../styles/contact.css'

const email = 'kayla.garibay31@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(email).catch(() => {
      const el = document.createElement('textarea')
      el.value = email
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }).finally(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  
return (
  <div className="contact-page">
    <div className="contact-blob1" aria-hidden="true" />
    <div className="contact-blob2" aria-hidden="true" />
    <div className="contact-blob3" aria-hidden="true" />

    <div className="contact container">
      <div className="contact-layout">
        <div className="contact-left">
          <h1 className="contact-title">Contact Me</h1>

          <p className="contact-intro">
            I'm open to PM, APM, and PM-adjacent roles. Whether you have an opportunity, want to collaborate, or just want to connect — reach out.
          </p>

          <p className="contact-email-display">{email}</p>

          <button className="contact-copy-btn" onClick={copyEmail}>
            {copied ? (
              <>
                <span aria-hidden="true">✓</span>
                Copied
              </>
            ) : (
              <>
                <span aria-hidden="true">▢</span>
                Copy email
              </>
            )}
          </button>
        </div>

        <div className="contact-right">
          <a
            href="/assets/KaylaGaribay_PM.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M8 13h8M8 17h8" />
  </svg>
</span>
            <span className="contact-link-content">
              <span className="contact-link-title">Resume</span>
              <span className="contact-link-description">
                Experience, education & skills
              </span>
            </span>
            <span className="contact-link-arrow" aria-hidden="true">↗</span>
          </a>

          <a href={`mailto:${email}`} className="contact-link">
          <span className="contact-link-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
</span>
            <span className="contact-link-content">
              <span className="contact-link-title">Email</span>
              <span className="contact-link-description">
                Get in touch directly
              </span>
            </span>
            <span className="contact-link-arrow" aria-hidden="true">↗</span>
          </a>

          <a
            href="https://linkedin.com/in/kaylagaribay"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.3 18H5.6V9.3h2.7ZM7 8.1a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.4 18h-2.7v-4.2c0-1 0-2.2-1.4-2.2s-1.6 1.1-1.6 2.1V18H10V9.3h2.6v1.2h.1a2.9 2.9 0 0 1 2.6-1.4c2.8 0 3.3 1.8 3.3 4.1Z" />
  </svg>
</span>
            <span className="contact-link-content">
              <span className="contact-link-title">LinkedIn</span>
              <span className="contact-link-description">
                Connect professionally
              </span>
            </span>
            <span className="contact-link-arrow" aria-hidden="true">↗</span>
          </a>

          <a
            href="https://github.com/g35k"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.4 3.8 1.7.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3.1 1.1a10.7 10.7 0 0 1 5.7 0c2.2-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
</span>
            <span className="contact-link-content">
              <span className="contact-link-title">GitHub</span>
              <span className="contact-link-description">
                Explore my code & projects
              </span>
            </span>
            <span className="contact-link-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  </div>
)

}