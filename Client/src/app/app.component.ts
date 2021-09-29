import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  
  constructor(private basketService: BasketService, private accountService: AccountService) {
   }
  
  ngOnInit(): void {
    this.loadBasket();
    this.loadUser();
  }

  loadBasket() {
     const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(() =>
      {
        console.log('initialized a basket')
      }, error => {
        console.log(error);
      })
    }
  }

  loadUser() {
    const token = localStorage.getItem('token');
      this.accountService.loadCurrentUser(token).subscribe(()=> {
        // this.accountService.getCurrentUserValue();
        console.log('user logged');
      },
        error => {
          console.log(error);
      })
    
  }
}
