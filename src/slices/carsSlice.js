import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState:{
        searchValue:'',
        carsDetails:[]
    },
    reducers:{
        changeSearchValue(state, action){
            state.searchValue= action.payload;
        },
        addCar(state, action){
            state.carsDetails.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id:nanoid()
            });
        },
        removeCar(state, action){
            const updatedCars = state.carsDetails.filter((car)=>{
                return car.id !== action.payload;
            });
            state.carsDetails = updatedCars;
        }
    }
});

export const {addCar, removeCar, changeSearchValue}= carsSlice.actions;
export const CarsReducer = carsSlice.reducer;