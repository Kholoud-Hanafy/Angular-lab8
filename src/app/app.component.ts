import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{NavbarComponent} from'./components/navbar/navbar.component';
// import{ProductComponent} from'./components/product/product.component';
import{FooterComponent} from'./components/footer/footer.component';
import{OrderComponent} from'./components/order/order.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,OrderComponent,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
  language$:Observable<string>
  dir:string = "ltr"
  constructor(private store: Store<{language:string}>){
   this.language$ = this.store.select('language')

   this.language$.subscribe((lang)=>{

    this.dir =(lang=="en")?'ltr':'rtl'
   })
  }
}
