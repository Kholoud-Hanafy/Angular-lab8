import { createReducer, on } from "@ngrx/store";
import { changeLanguageAction } from "./lang.action";

const initialState = localStorage.getItem('lang')?localStorage.getItem('lang'):"en"

export const languageReducer =   createReducer(initialState,


on(changeLanguageAction,(state,action)=>action.lang)



)