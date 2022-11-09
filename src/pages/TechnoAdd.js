export default function TechnoAdd() {
  return (
    <div className="techno-add">
      <h1>Add Techno</h1>
      <div>
        <form>
          <label htmlFor="techno-name">Name</label>
          <br />
          <input type="text" name="techno-name" id="techno-name" />
          <br />
          <label htmlFor="techno-category">category!</label>
          <br />
          <select name="techno-category" id="techno-category">
            <option value="">Select a category</option>
            <option value="front">front</option>
            <option value="back">back</option>
            <option value="fullstack">fullstack</option>
            <option value="other">other</option>
          </select>
          <br />
          <label htmlFor="techno-description">Description!</label>
          <br />
          <textarea
            name="techno-description"
            id="techno-description"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <input type="submit" value="Add Techno" />
        </form>
      </div>
    </div>
  );
}
