import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../shared/models/IBasket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  increaseCount(item: IBasketItem) {
    this.basketService.increaseItemQuantity(item);
  }

  decreaseCount(item: IBasketItem) {
    this.basketService.decreaseItemQuantity(item);
  }

  deleteItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

}
