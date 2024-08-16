import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
function CarList(){
    const dispatch= useDispatch();
    const {carDetails, name}= useSelector(({form, cars:{carsDetails, searchValue}})=>{
        const filteredCars= carsDetails.filter((car)=>
            car.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        return {
            carDetails: filteredCars,
            name: form.name
        }
    });
    const handleDeleteCar =(car)=>{
        dispatch(removeCar(car.id));
    }
    const renderedCars = carDetails.map((car)=>{
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button 
                className="button is-danger"
                onClick={()=>{handleDeleteCar(car)}}
                >
                    Delete
                </button>
            </div>
        );
    })
    return <div className="car-list">
        {renderedCars}       
    </div>
}

export default CarList;