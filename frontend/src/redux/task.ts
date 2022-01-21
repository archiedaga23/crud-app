import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../App";

const taskSlicer = createSlice({
    name: 'task',
    initialState:<ITask[]> [],
    reducers: {
        addTask: (state: ITask[], action: PayloadAction<ITask>) => {
            return [...state, action.payload];
        },
        updateTask: (state: ITask[], action: PayloadAction<ITask>) => {
            return state.map(task => task._id === action.payload._id ? action.payload : task);
        },
        deleteTask: (state: ITask[], action: PayloadAction<string>) => {
            return state.filter(task => task._id !== action.payload);
        }
    }
});

export const { addTask, updateTask, deleteTask } = taskSlicer.actions;

export default taskSlicer.reducer;