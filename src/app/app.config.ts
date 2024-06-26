import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import{languageReducer} from './store/language/lang.reducer';
import { provideEffects } from '@ngrx/effects'
import { LanguageEffects } from './store/language/lang.effects';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()),
    provideStore({
        language: languageReducer
    }), provideEffects([LanguageEffects])]
};
