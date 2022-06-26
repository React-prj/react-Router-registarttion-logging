import './Home.css'
import React, {useState} from 'react'

import RecipeList from '../../../components/RecipeList/RecipeList'

import useFetchCustomHook from '../../../Hooks/useFetchCustomHook'

function HomeReceipe() {
  const [url, setUrl] = useState('http://localhost:3000/recipes')
  const { data: available_recipes, isPending: isLoading, error } = useFetchCustomHook(url, {type: 'GET'})
 
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading data ....</p>}
      {available_recipes && <RecipeList recipes={available_recipes} />}
    </div>
  )
}

export default HomeReceipe