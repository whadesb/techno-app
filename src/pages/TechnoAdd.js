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
                    <select name="techno-category" id="techno-category"></select>
                    <input type="submit" value="Add Techno" />
                </form>
            </div>
        </div>
    )
}