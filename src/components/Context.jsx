import data from '../data'
import { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export const DataContext = ({ children }) => {
    const [active, setActive] = useState(0)

    const move = action => {
        if (action === 'prev') {
            if (active === 0) {
                setActive(data.length - 1)
            } else {
                setActive(active - 1)
            }
        }

        if (action === 'next') {
            if (active === data.length - 1) {
                setActive(0)
            } else {
                setActive(active + 1)
            }
        }
    }

    useEffect(() => {
        let auto = setInterval(() => {
            move('next')
        }, 5000)
        return () => {
            clearInterval(auto)
        }
    }, [active])

    return (
        <Context.Provider value={{
            move, active,
            setActive, data
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
