import './Create.css'
import React, { useState, useRef,useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'
import useFetch from '../../../Hooks/useFetch.js'

function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    //remove white spaces in the ingredient 
    const ing = newIngredient.trim()

    //make sure we have the ing data and avoid re-adding same ingredient 
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }
  
  //redirect the user when we get data response
  // useEffect(() => {
  //   if (data) {
  //     navigate('/account/home')
  //   }
  // }, [data, navigate])

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(i => (<em key={i}>{i},  </em>))}</p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div> 
  )
}

export default Create