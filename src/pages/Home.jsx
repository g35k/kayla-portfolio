
import { Link } from 'react-router-dom'
import '../styles/home.css'

const projects = [
  {
    id: 'senso',
    number: '01',
    title: 'Senso',
    tags: ['Accessibility', 'Hardware', 'Team Leadership'],
    hook: 'What if learning Braille could be more interactive and accessible?',
    summary:
      'Led a six-person team in developing a tactile learning device and companion web platform, from early concept to a competition-winning prototype.',
    image: '/assets/senso-5.jpg',
    imageAlt: 'Senso Braille learning system prototype',
  },
  {
    id: 'sdg-workshops',
    number: '02',
    title: 'SDG Workshops',
    tags: ['Sustainability', 'Cross-Cultural Leadership', 'Education'],
    hook: 'How can sustainability education connect students across cultures?',
    summary:
      'Led approximately 20 international students in planning and delivering three sustainability workshops for Japanese daycare students during an exchange at Yokohama National University.',
    image: '/assets/sdg-3.jpg',
    imageAlt: 'Sustainability workshop in Japan',
  },
  {
    id: 'hand-it-down',
    number: '03',
    title: 'Hand It Down',
    tags: ['Sustainability', 'MVP', 'Product Strategy'],
    hook: 'Could a campus marketplace make reusing student materials the easier choice?',
    summary:
      'Led a five-person team in building a student exchange MVP, prioritizing core features to turn an idea into a working product.',
    image: '/assets/handitdown-2.jpg',
    imageAlt: 'Hand It Down student exchange platform',
  },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero container">
        <div className="hero-blob1" aria-hidden="true" />
        <div className="hero-blob2" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Kayla Garibay</h1>
            <p className="hero-tagline">
              I turn user needs into thoughtful,
              <br />
              useful technology.
            </p>
          </div>

          <div className="hero-portrait">
            <img src="/assets/headshot.jpg" alt="Kayla Garibay" />
          </div>
        </div>
      </section>

      <section className="featured container">
        <div className="featured-header">
          <h2 className="featured-heading">Selected Work</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <Link
              to={`/work#${project.id}`}
              key={project.id}
              className="editorial-project"
            >
              <div className="editorial-number">
                {project.number}
              </div>

              <div className="editorial-content">
                <h3 className="editorial-title">
                  {project.title}
                </h3>

                <div className="editorial-tags">
                  {project.tags.map((tag) => (
                    <span className="editorial-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="editorial-hook">
                  {project.hook}
                </p>

                <p className="editorial-summary">
                  {project.summary}
                </p>

                <span className="editorial-link">
                  Explore project <span aria-hidden="true">↗</span>
                </span>
              </div>

              <div className="editorial-image">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="view-more-wrap">
          <Link to="/work" className="view-more">
            View All Work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
