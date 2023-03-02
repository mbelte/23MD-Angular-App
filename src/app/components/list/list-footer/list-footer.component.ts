import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-footer',
  templateUrl: './list-footer.component.html',
  styleUrls: ['./list-footer.component.scss']
})
export class ListFooterComponent {
  @Input() totalAmount: number
}
