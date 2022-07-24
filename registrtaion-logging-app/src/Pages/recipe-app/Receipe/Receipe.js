import './Receipe.css'
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch'

function Receipe() {
  //the name id should be the same as path of route  <Route path="/recipes/:id" element={<Protected><Receipe /></Protected>}>
  let {id} = useParams();
  const url = 'http://localhost:3000/recipes/' + id
  const { data: recipe, isPending: isLoading, error } = useFetch(url, {type: 'GET'})
  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Receipe