import { Component, Input } from '@angular/core';
import { ItemsType } from 'src/assets/ItemType';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  @Input() listTitle: string  
  @Input() items: ItemsType[]
  @Input() title: string
  @Input() price: number
  @Input() isSelected: boolean
  @Input() totalAmount: number

  toggleSelect(item: ItemsType): void {
    item.isSelected = !item.isSelected

    if (item.isSelected) {
      this.totalAmount += item.price
    } else {
      this.totalAmount -= item.price
    }
    
  }
}
