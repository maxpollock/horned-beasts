export default function Form({ setHorns }) {
  function handleChange(event) {
    event.preventDefault();
    setHorns(event.target.value);
  }

  return (
    <>
      <form>
        <label>filter by amount of horns:</label>
        <select onChange={handleChange} name="horns">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
          <option value="">View All</option>
        </select>
      </form>
    </>
  );
}
