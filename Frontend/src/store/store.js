import { configureStore } from '@reduxjs/toolkit';
import appslice from './appslice';


export const Store = configureStore({
  reducer: {
    app: appslice
  
       
}
});