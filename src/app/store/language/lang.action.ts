import { createAction, props } from "@ngrx/store";

export const changeLanguageAction = createAction("changelanguage",props<{lang:string}>())