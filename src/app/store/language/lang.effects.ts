import { Actions, createEffect, ofType } from "@ngrx/effects";
import { changeLanguageAction } from "./lang.action";
import { tap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()

export  class LanguageEffects{
     savelanguage = createEffect(()=>this.actions.pipe(
      ofType(changeLanguageAction),
      tap((action)=>{

          localStorage.setItem("lang",action.lang)

      })



     ),{dispatch:false})
    constructor(private actions: Actions){

    }


}