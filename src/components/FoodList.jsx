import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
  const [allFoods, setAllFoods] = useState(foodsJson);

  const [foodsRender, setFoodsRender] = useState(foodsJson);

  return (
    <>
      <h1>React IronNutrition</h1>

      <AddFoodForm foodsRender={foodsRender} setFoodsRender={setFoodsRender} />

      <Search allFoods={allFoods} setFoodsRender={setFoodsRender} />

      <FoodBox
        foodsRender={foodsRender}
        setAllFoods={setAllFoods}
        setFoodsRender={setFoodsRender}
      />
    </>
  );
}

export default FoodList;
