import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  // solo la vista del usuario
  const [foodsRender, setFoodsRender] = useState(foods);

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);

    setFoods(updatedFoods);
  };

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div>
      <Search foods={foods} setFoodsRender={setFoodsRender} />
      <AddFoodForm addFood={addFood} foods={foods} />
      {foods.map((food, i) => (
        <FoodBox key={i} food={food} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;
