import { useDispatch, useSelector } from "react-redux";
import { changeSearchValue } from "../store";
function CarSearch(){
    const searchItem = useSelector((state)=>{
        return state.cars.searchValue;
    })

    const dispatch = useDispatch();
    const handleSeachOnChange =(event)=>{
        dispatch(changeSearchValue(event.target.value));
    }
    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3> 
            <div className="search" field is-horizontal>
                <label className="label">Search</label>
                <input 
                    className="input"
                    value={searchItem}
                    onChange={handleSeachOnChange}
                />
            </div>
        </div>
    )
}

export default CarSearch;