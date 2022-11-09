import data from '../data'
import { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export const DataContext = ({ children }) => {
    const [active, setActive] = useState(0)
    const [people, setPoeple] = useState(data[active])

    const prev = () => {
        if (active === 0) {
            setActive(data.length - 1)
        } else {
            setActive(active - 1)
        }
        setPoeple(data[active])
    }

    const next = () => {
        if (active === data.length - 1) {
            setActive(0)
        } else {
            setActive(active + 1)
        }
        setPoeple(data[active])
    }

    useEffect(() => {
        let auto = setInterval(() => {
            next()
        }, 5000)
        return () => {
            clearInterval(auto)
        }
    }, [active])

    return (
        <Context.Provider value={{
            next, prev,
            people, setActive
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
