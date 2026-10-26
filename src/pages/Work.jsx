import { useState, useEffect, useCallback, useRef } from 'react'
import '../styles/work.css'

const caseStudies = [
  {
    id: 'senso',
    title: 'Senso',
    role: 'Team Lead / Product / Scrum Master / Full Stack Engineer',
    tags: ['Accessibility', 'Hardware', 'Learning'],
    summary: 'A hardware-integrated braille learning platform for visually impaired children, pairing a 3D-printed device and Raspberry Pi with a Flask backend and a React frontend with audio feedback. Built in 48 hours by a team of 7 at Hornet Hacks 4.0, it won 1st Place in Open Innovation.',
    images: [
      '/assets/senso-4.png',
      '/assets/senso-1.png',
      '/assets/senso-2.png',
      '/assets/senso-3.JPG',
      '/assets/senso-5.png',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/g35k/senso' },
    ],
    sections: [
      { heading: 'Problem',        body: "Braille literacy is closely tied to employment: of the fewer than 40% of blind American adults who are employed, 90% read Braille (National Federation of the Blind). Even so, braille is often treated as nonessential and is hard for learners and teachers to access, and literacy rates keep falling. That leaves visually impaired people less prepared to succeed professionally." },
      { heading: 'My Role',        body: "I led a cross-disciplinary team of 7 computer scientists and computer engineers as team lead, product owner, scrum master, and full stack engineer. I owned features, research, and the 3D model, and I unblocked teammates while building my own pieces." },
      { heading: 'Process',        body: "I wanted to work in the ADA space, which led me to the braille literacy gap. We built a simple prototype and had it tested by three people from the blind community (one from a disability access center and two from the Society for the Blind), and consulted a disability center associate from UC Davis. Their advice shaped our target age group, how we structured lessons, and what content to teach. Because the team was new to hardware and we had 48 hours, we cut integrated speakers and vibration, which would have elevated the device." },
      { heading: 'Key Decision',   body: "On pitch day we learned we could not set up the device before our slot, and its boot and setup time was too long to do live. I made a split-second call to divide the team: half operated the device in a classroom across campus while the other half joined a live Discord call for the demo. I delivered the pitch alone. Without that call, we could not have demoed the device at all." },
      { heading: 'Outcome',        body: "1st Place, Open Innovation at Hornet Hacks 4.0, among 9 competing teams. The team has since reunited to improve the web platform and the 3D model, and we plan to meet again to add integrated speakers and vibration." },
      { heading: 'What I Learned', body: "Leading means managing people and getting your hands dirty at the same time. I unblocked teammates, built my own features, and kept everyone focused on what actually needed to ship instead of perfecting one feature. I also learned to get explicit feedback from the target audience early and iterate on it, which is what made Senso a product that could really address the problem. Next time I would set up Jira before the project starts. I did not until v2." },
    ],
  },
  {
    id: 'sdg-workshops',
    title: 'SDG Workshops',
    role: 'Lead Workshop Designer / Graphic Designer',
    tags: ['Sustainability', 'Multicultural', 'Education'],
    summary: "A semester-long project from my study abroad at Yokohama National University, where my international class taught the Sustainable Development Goals to children at Gumyoji Daycare, fully in Japanese, through hands-on activities. Pre and post surveys showed a 60% increase in the children's SDG knowledge.",
    images: [
      '/assets/sdg-1.JPG',
      '/assets/sdg-2.JPG',
      '/assets/sdg-3.JPG',
      '/assets/sdg-4.JPG',
    ],
    sections: [
      { heading: 'Problem',        body: "Children at Gumyoji Daycare needed education on the SDGs. It matters to start in childhood so the goals stick, and Japan puts real emphasis on meeting its own SDG targets." },
      { heading: 'My Role',        body: "I was the lead workshop designer and graphic designer, working with 16 international classmates from Korea, Australia, Ireland, Malaysia, Indonesia, and more. I organized classmates into teams, came up with and facilitated activities, prepared workshop materials, and presented to the children in Japanese. I was the only American, and not everyone spoke English, so I used simple Japanese or leaned on our bilingual classmates to get ideas across." },
      { heading: 'Process',        body: "We ran three workshops in total. In the first, my team ran a dessert bingo, labeled in daycare-level hiragana, after we each presented desserts from our countries. For the last and largest, a classmate who had taken the class before mentioned that the kids had loved a pretend farmers market. I built on that into stations modeled after a farmers market, where kids traveled from station to station learning about the SDGs. They received “SDG dollars” to support their local community by buying origami paper produce and used toys and books, and by sorting trash like cleaned milk cartons, cans, and PET bottles following the prefecture's rules." },
      { heading: 'Outcome',        body: "Students showed a 60% increase in knowledge of SDG topics, measured with pre and post surveys. We completed 3 workshops before the semester ended." },
      { heading: 'What I Learned', body: "With patience, language barriers can be overcome with methods other than language, like drawings and diagrams. I also learned how much a project opens up when you build around people's strengths. One classmate was great with kids and led the interactions, another was an excellent artist and worked with me on graphics to explain instructions, and our bilingual classmates made quick plan changes and explanations possible on workshop days. Next time I would divide the work better. For the last workshop, my partner and I took on most of the material preparation." },
    ],
  },
  {
    id: 'hand-it-down',
    title: 'Hand It Down',
    role: 'Team Lead / Frontend Lead / Product',
    tags: ['Sustainability', 'Education', 'Web'],
    summary: 'A student-run materials exchange that connects students with used textbooks and supplies to cut waste and cost. The frontend MVP was designed and shipped in 48 hours at Hornet Hacks 3.0 and won 1st Place in Sustainability.',
    images: [
      '/assets/handitdown-2.png',
      '/assets/handitdown-1.png',
      '/assets/handitdown-3.jpg',
      '/assets/handitdown-4.JPG',
    ],
    links: [
      { label: 'Live demo', href: 'https://handitdown.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/g35k/HandItDown' },
    ],
    sections: [
      { heading: 'Problem',        body: "Students at our university struggle to get course materials at the start of each semester. Materials are expensive, and professors often expect niche ones that are hard to find. It was a burden my teammates and I felt ourselves." },
      { heading: 'My Role',        body: "I led a team of 5 computer scientists as team lead, frontend lead, and product owner. I owned the people, the decisions, some features, and the pitch." },
      { heading: 'Process',        body: "At the start of the hackathon I ran a survey and got about 75 responses, which confirmed how deep the pain point went. From there we sorted features into must-haves and nice-to-haves, and we traded off anything that needed startup costs we could not cover." },
      { heading: 'Key Decision',   body: "I made the site a peer-to-peer exchange instead of having us source, store, and middleman the materials ourselves. Housing books and supplies would have dramatically increased startup costs. Connecting students directly still solves the pain point and makes the idea far more realistic to start." },
      { heading: 'Outcome',        body: "1st Place, Sustainability at Hornet Hacks 3.0, plus an invitation to join the Carlsen Center for Entrepreneurship Innovation Lab to keep developing the project. It is available as a live demo, but I chose not to launch it to real users because of my proximity to graduation." },
      { heading: 'What I Learned', body: "Products need a way to generate revenue to be sustainable, and this one would have relied on free labor or donations. I also learned to think about product peaks and lows. Usage would spike at the start of a semester and fade shortly after, which raises real questions about longevity. Next time I would choose a pain point with a clear path to revenue." },
    ],
  },
  {
    id: 'floora-hep',
    title: 'Floora HEP',
    role: 'Full Stack Engineer / Team Integrator / Database Architect',
    tags: ['Health', 'App', 'Client'],
    summary: 'A client-based capstone app for a local pelvic floor physical therapist, replacing handwritten exercise slips with a scalable web and mobile platform. Therapists assign home exercise programs, patient progress is tracked in real time, and the app is released on the iOS App Store.',
    images: [
      '/assets/floora-2.jpeg',
      '/assets/floora-1.jpeg',
      '/assets/floora-3.jpeg',
      '/assets/floora-4.JPG',
    ],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/floora-hep/id6765753234' },
      { label: 'GitHub', href: 'https://github.com/AnkitaPatwal/FlooraHEP' },
    ],
    sections: [
      { heading: 'Problem',        body: "The therapist handwrote home exercises for patients, and the slips were sometimes illegible or lost. Reps, sets, and frequency were also miscommunicated, so the level of care varied. The process was hard to scale and hard to keep consistent." },
      { heading: 'My Role',        body: "I was a full stack engineer, team integrator, database architect, and assistant scrum master on a team of 8 computer scientists. I owned the database design and full stack features, handled some code integration, and helped create and organize Jira tasks." },
      { heading: 'Process',        body: "Our capstone team was paired with the client, who brought the pain points and goals. I designed over 75% of the database schema, which the rest of the app builds on, so every feature shared a consistent structure for assigning and tracking exercises. I also wrote documentation for file naming and for how we referred to the client and their patients, which cut confusion across the team." },
      { heading: 'Outcome',        body: "Released on the iOS App Store. The shared documentation gave us a more consistent file structure and clearer communication across the team. The client is seeking a consultation with us on further improvements before rolling the app out to their patients." },
      { heading: 'What I Learned', body: "Communication across sprints matters a lot, especially to and from the team integrator. A well-organized Jira is also what keeps a project on pace to hit its deadline. If I did it again, I would split the team into app specialists and website specialists to reduce confusion and build deeper expertise." },
    ],
  },
  {
    id: 'futuresparks',
    title: 'FutureSparks',
    role: 'Team Lead / Frontend Engineer / UI/UX / Product',
    tags: ['Sustainability', 'Education', 'Interactive'],
    summary: 'An interactive, kid-friendly web app that teaches the UN Sustainable Development Goals through mini-games, short content, and a live leaderboard. Built at Hornet Hacks 2.0 with a React frontend and Django REST backend, and scoped to children in California.',
    images: [
      '/assets/futurespark-4.JPG',
      '/assets/futurespark-1.jpg',
      '/assets/futurespark-2.jpg',
      '/assets/futurespark-3.JPG',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/isg28/FutureSparks' },
    ],
    sections: [
      { heading: 'Problem',        body: "After returning from Japan and wrapping up the SDG workshops, I realized the same gap existed in the United States. Many children, and plenty of adults, did not know the SDGs exist or why they matter, and children in California were largely unaware of them. Without that education, the country is less likely to meet its SDG goals, and kids miss the chance to understand how their actions affect the world and the environment." },
      { heading: 'My Role',        body: "I was on a team of 4 developers. I owned the complete UI/UX, the game ideas, and organizing people and tasks." },
      { heading: 'Process',        body: "The idea came from facilitating SDG workshops in Japan, where I saw the same pain point existed at home. A mentor encouraged us to narrow our audience from all children in the United States to children in California. That focus let us build activities tied to our local community, like games about saving water inspired by California's 2012 to 2016 drought, the worst in 1,200 years." },
      { heading: 'Outcome',        body: "We did not place at Hornet Hacks 2.0 and the project did not reach real users. It is now archived, and the code is on GitHub." },
      { heading: 'What I Learned', body: "Start with a narrow audience instead of trying to solve the problem for everyone in version one. Here that meant children in California first, then expanding once we learned what worked. I also saw how much a finished Figma or rough prototype helps, because everyone shares the same picture of the end product before it exists. Next time I would narrow the audience from the start and test with real users." },
    ],
  },
]

const otherProjects = [
  { title: 'Delta Track', desc: 'Financial tracker, sophomore year. Team lead. MongoDB + React + Node.js. Full UI ownership.' },
  { title: 'Bijou',       desc: 'AI augmented fashion assistant app concept for college students. PM on the MVP definition.' },
]

function AutoCarousel({ images, title, aspectClass }) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIdx(i => (i + 1) % images.length)
    }, 2000)
  }, [images.length])

  useEffect(() => {
    if (images.length > 1) startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer, images.length])

  if (images.length === 0) return null

  return (
    <div className={`carousel ${aspectClass || ''}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} ${i + 1}`}
          className={i === idx ? 'visible' : ''}
        />
      ))}
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === idx ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setIdx(i); startTimer() }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function CaseStudyCard({ project, openId, onToggle }) {
  const isOpen = openId === project.id
  const cardRef = useRef(null)
  const scrollBeforeOpen = useRef(null)
  const wasOpen = useRef(false)

  const handleToggle = () => {
    if (!isOpen) {
      scrollBeforeOpen.current = window.scrollY
      onToggle(project.id)
    } else {
      onToggle(project.id)
    }
  }

  useEffect(() => {
    if (isOpen && !wasOpen.current) {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      wasOpen.current = true
    } else if (!isOpen && wasOpen.current) {
      window.scrollTo({ top: scrollBeforeOpen.current ?? 0, behavior: 'smooth' })
      wasOpen.current = false
    }
  }, [isOpen])

  return (
    <div ref={cardRef} className={`case-card ${isOpen ? 'open' : ''}`} id={project.id}>
      {isOpen ? (
        <div className="case-expanded">
          <div className="case-expanded-top">
            <div>
              <div className="case-tags">
                {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <h3 className="case-title-open">{project.title}</h3>
              <p className="case-role-open">{project.role}</p>
            </div>
            <button className="case-toggle" onClick={handleToggle} aria-label="Collapse">↑</button>
          </div>

          <AutoCarousel images={project.images} title={project.title} aspectClass="carousel-wide" />

          <div className="case-expanded-body">
            <p className="case-summary-open">{project.summary}</p>
            <div className="case-sections">
              {project.sections.map((s) => (
                <div key={s.heading} className="case-section">
                  <h4 className="section-heading">{s.heading}</h4>
                  <p className="section-body">{s.body}</p>
                </div>
              ))}
            </div>
            {project.links && (
              <div className="case-links">
                {project.links.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="case-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <button className="case-collapsed" onClick={handleToggle}>
          <div className="case-collapsed-inner">
            <div className="case-thumb">
              <img src={project.images[0]} alt={project.title} />
            </div>
            <div className="case-collapsed-meta">
              <div className="case-tags collapsed-tags">
                {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <h3 className="case-title-collapsed">{project.title}</h3>
              <p className="case-desc-collapsed">{project.summary}</p>
            </div>
          </div>
          <span className="case-chevron" aria-hidden="true">↓</span>
        </button>
      )}
    </div>
  )
}

export default function Work() {
  const [openId, setOpenId] = useState(null)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) setOpenId(hash)
  }, [])

  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

  return (
    <div className="work container">
      <div className="hero-blob11" aria-hidden="true" />
      <div className="hero-blob22" aria-hidden="true" />
      <div className="hero-blob33" aria-hidden="true" />
      <h1 className="work-title">My Work</h1>
      <div className="case-grid">
        {caseStudies.map(p => (
          <CaseStudyCard key={p.id} project={p} openId={openId} onToggle={toggle} />
        ))}
      </div>
      <div className="other-projects">
        <h2 className="other-heading">Other Projects</h2>
        <ul className="other-list">
          {otherProjects.map(p => (
            <li key={p.title} className="other-item">
              <span className="other-title">{p.title}</span>
              <span className="other-desc">{p.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}