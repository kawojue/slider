import { useContext } from 'react'
import Context from './components/Context'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

function App() {

  const { move, data, active } = useContext(Context)

  return (
    <main>
      <header className="md:text-4xl">
        <span>/</span>
        <h1>Reviews</h1>
      </header>
      <section className="menu">
        <button className="btn md:text-2xl" onClick={() => move('prev')}>
          <FiChevronLeft />
        </button>

        <div className="section-center">
          {data.map((item, itemIndex) => {
            const { id, image, name, title, quote } = item;

            let position = 'nextSlide'
            if (itemIndex === active) {
              position = 'activeSlide'
            }
            if (
              itemIndex === active - 1 ||
              (active === 0 && itemIndex === data.length - 1)
            ) {
              position = 'lastSlide'
            }

            return (
              <article className={position} key={id}>
                <div className="headings">
                  <img src={image} alt={name} className="photo" />
                  <h3 className="md:text-[1.05rem]">{name}</h3>
                  <h5 className="md:text-[1.05rem]">{title}</h5>
                </div>
                <div className="info">
                  <p className="quote md:text-[0.9rem] md:leading-[1.55rem]">{quote}</p>
                  <FaQuoteRight className="icon md:text-5xl" />
                </div>
              </article>
            )
          })}
        </div>

        <button className="btn md:text-2xl" onClick={() => move('next')}>
          <FiChevronRight />
        </button>
      </section>
    </main>
  )
}

export default App
