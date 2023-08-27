import { useState } from "react";

function Search(props) {
  const [queryInput, setQueryInput] = useState("");

  const handleSearch = (e) => {
    setQueryInput(e.target.value);

    const filterArr = props.foods.filter((eachFood) => {
      if (eachFood.name.starsWith(e.target.value) === true) {
        return true;
      } else {
        return false;
      }
    });

    props.setFoodsToRender(filterArr);
    console.log(filterArr);
  };

  return (
    <div>
      <form>
        <label htmlFor="query">Search</label>
        <input
          type="text"
          name="query"
          value={queryInput}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}
export default Search;
