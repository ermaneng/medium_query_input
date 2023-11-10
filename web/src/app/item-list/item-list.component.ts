import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "../item/item.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-item-list',
    standalone: true,
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css'],
    imports: [CommonModule, ItemComponent]
})
export class ItemListComponent {
  
  constructor(private router:Router){}

  itemClick(id:number){
    this.router.navigate(['item/'+id])
  }

  

}
