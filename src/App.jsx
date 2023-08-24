import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";

function App() {

  const [ allFoods, setAllFoods ] = useState(foodsJson) // Valor inicial
  return (
    <div className="App">
      {/* <FoodBox
        food={foodsJson[0]}
      /> */}
      <AddFoodForm setAllFoods={setAllFoods} />
      {allFoods.map((eachFood)=> {
        return <FoodBox key= {eachFood.id} food={eachFood} setAllFoods={setAllFoods} allFoods={allFoods} />
      })}

    </div>
  );
}

export default App;
