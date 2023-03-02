import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listTitle = 'Services';

  totalAmount = 0
  
  items = [
    {
      title: 'Web Development',
      price: 300,
      isSelected: false
    },
    {
      title: 'Design',
      price: 400,
      isSelected: false
    },
    {
      title: 'Integration',
      price: 250,
      isSelected: false
    },
    {
      title: 'Training',
      price: 220,
      isSelected: false
    },
  ]
}
