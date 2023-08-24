// Your code here

import { useState } from "react"


function AddFoodForm(props) {

  const [ foodObj, setFoodObj] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  })

  const handleInputChange = (event) => {
    let clone = JSON.parse(JSON.stringify(foodObj))
    clone[event.target.name] = event.target.value
    setFoodObj(clone)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    props.setAllFoods((allFoods) => {
      return [foodObj, ...allFoods ]
    })
  }

  return (
    <div>
      <h3>Food Entry</h3>
      <form>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={foodObj.name} onChange={handleInputChange}/>

        <label htmlFor="image">image</label>
        <input type="text" name="image" value={foodObj.image} onChange={handleInputChange} />

        <label htmlFor="calories">Calories</label>
        <input type="number" name="calories" value={foodObj.calories} onChange={handleInputChange} />

        <label htmlFor="servings">Servings</label>
        <input type="number" name="servings" value={foodObj.servings} onChange={handleInputChange} />

        <button onClick={handleAdd}>Create</button>

        








      </form>
    </div>
  )
}

export default AddFoodForm