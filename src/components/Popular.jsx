import { useEffect, useState } from "react"

export default function Popular() {
    useEffect(() => {
        getPopular()
    }, [])

    const [popular, setPopular] = useState([])

    async function getPopular () {
        const apiKey = process.env.REACT_APP_API_KEY
        const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=3`

        const data = await fetch(url)
        const popular = await data.json()
        console.log(popular.recipes);
        setPopular(popular.recipes)
    }

    return (
    <div>
        {popular.map(recipe => {
            return (
                <div key={recipe.id}>
                    <p>{recipe.title}</p>
                </div>
            )
        })}
    </div>
  )
}
