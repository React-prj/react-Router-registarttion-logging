import './Home.css'
import React, {useState} from 'react'

import RecipeList from '../../../components/RecipeList/RecipeList'

import useFetch from '../../../Hooks/useFetch'

function HomeReceipe() {
  const { data: available_recipes, isPending: isLoading, error} = useFetch('http://localhost:3000/recipes')
 
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading data ....</p>}
      {available_recipes && <RecipeList recipes={available_recipes} />}
    </div>
  )
}

export default HomeReceipe