// Your code here

import React from "react";

function FoodBox(props) {

  const { calories, image, name, servings, id } = props.food

  const handleDelete = () => {
    const filteredFoods = props.allFoods.filter((eachFood) => {
      return eachFood.id !== id
    })
    props.setAllFoods (filteredFoods)
  }

  return (
    <div>
      <p>{name}</p>

      <img src={image} width={150}/>

      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>

      <p>
        <b>Total Calories: {servings * calories}</b> kcal
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default FoodBox;
