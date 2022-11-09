import { useContext } from 'react'
import Context from './components/Context'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

function App() {

  const { people, next, prev } = useContext(Context)

  const { image, name, title, quote } = people

  return (
    <main>
      <h1 className="md:text-4xl">
        <span>/</span>
        Reviews
      </h1>
      <section className="menu">
        <button className="btn" onClick={() => prev()}>
          <FiChevronLeft />
        </button>
        <article>
          <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h5>{title}</h5>
          </div>
          <div>
            <p>{quote}</p>
            <FaQuoteRight />
          </div>
        </article>
        <button className="btn" onClick={() => next()}>
          <FiChevronRight />
        </button>
      </section>
    </main>
  )
}

export default App
