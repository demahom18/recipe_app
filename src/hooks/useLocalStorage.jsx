import { useState, useEffect } from 'react'

export default function useLocalStorage(item) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getData(item)
    }, [item])
    
    async function getData(item) {
        const dataFromLS = localStorage.getItem(item)
        if (dataFromLS) {
            setData(JSON.parse(dataFromLS))
        }
        else {
            const apiKey = process.env.REACT_APP_API_KEY
            const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=3`
            
            const response = await fetch(url)
            const results = await response.json()
            
            localStorage.setItem(item, JSON.stringify(results.recipes))
            setData(results.recipes)
        }
    }

    return data
}
