import { useState } from "react";

function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNameInput(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageInput(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCaloriesInput(event.target.value);
  };

  const handleServingsChange = (event) => {
    setServingsInput(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const newFood = {
      name: nameInput,
      image: imageInput,
      calories: caloriesInput,
      servings: servingsInput,
    };

    let clone = JSON.parse(JSON.stringify(props.foods));
    clone.unshift(newFood);
    console.log(clone);
    props.addFood(newFood);
    console.log("El nuevo alimento a crear es:", newFood);

    setNameInput("");
    setImageInput("");
    setCaloriesInput(0);
    setServingsInput(0);
  };
  return (
    <div>
      <h4>Add new food</h4>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={nameInput}
        />
        <br />
        <label htmlFor="image">Imagen</label>
        <input
          type="text"
          name="image"
          onChange={handleImageChange}
          value={imageInput}
        />
        <br />
        <label htmlFor="calories">Calorías</label>
        <input
          type="number"
          name="calories"
          onChange={handleCaloriesChange}
          value={caloriesInput}
        />
        <br />
        <label htmlFor="servings">servings</label>
        <input
          type="number"
          name="servings"
          onChange={handleServingsChange}
          value={servingsInput}
        />
        <br />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
