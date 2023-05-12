const FilterDropDown = () => {

    return (
        <div>
            <select name="filter" id="filter-select">
                <option value="">--Please choose an option--</option>
                <option value="Popular">Popular</option>
                <option value="top-rated">Top Rated</option>
                <option value="Upcoming">Upcoming</option>
            </select>
        </div>
    )
}
export default FilterDropDown;