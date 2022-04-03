
import useLocalStorage from "../hooks/useLocalStorage.jsx"
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

export default function Popular() {

    const popular = useLocalStorage('popular')

    const splideOptions = {
        arrows: false,
        pagination: false,
        perPage: 4,
        type: 'loop',
        drag: "free",
        gap: '1rem',
    }

    return (
        <RecipeWrapper>
            <h3>Popular recipes</h3>
            <Splide options={splideOptions}>
                {popular.concat(popular).map(recipe => {
                    return (
                        <SplideSlide key={recipe.id + Math.random() * 50}>
                            <RecipeCard>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={`${recipe.title}`} />
                                <Gradient />
                            </RecipeCard>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </RecipeWrapper>
    )
}

const RecipeWrapper = styled.div`
    margin: 4rem 0rem;
`

const RecipeCard = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    min-height: 25rem;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    p {
        position: absolute;
        width: 100%;
        z-index: 10;
        text-align: center;
        font-size: .75rem;
        bottom: 3rem;
        color: white;
        text-transform: uppercase;
    }
`
const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    left: 0;
    top: 0;
    background: linear-gradient(#0000, #0007)
`