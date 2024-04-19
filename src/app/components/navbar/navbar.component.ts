import { Component, OnInit } from '@angular/core';
import { RouterLink ,RouterLinkActive} from '@angular/router';
import {UserAthService} from '../../servecies/user-ath.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { changeLanguageAction } from '../../store/language/lang.action';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn!:boolean;
  languge$:Observable<string>;
  lang!:string;
  constructor(private _userAuthService : UserAthService,  private store : Store<{language:string}>){

    this.languge$ =this.store.select('language')
    this.languge$.subscribe((lang)=>{
     this.lang = lang
    })

  }
  ngOnInit(): void {
  // this.isUserLoggedIn =this._userAuthService.getUserLogged()
  this._userAuthService.getuserBehivourSubject().subscribe({
    next : (status)=>{
      this.isUserLoggedIn = status
    }

  })
   
  }

  changelang(){
    this.store.dispatch(changeLanguageAction({lang:(this.lang=='en')?"ar": "en"}))
  }
}
