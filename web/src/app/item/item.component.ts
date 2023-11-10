import { Component, Input, OnInit, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Item } from './item.interface';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input({transform:numberAttribute}) id!:number;
  protected postDetailUrl: string = `https://jsonplaceholder.typicode.com/posts`;
  item!:Item;

  constructor(private http:HttpClient){}

  private getPostDetail(id:number): Observable<Item> {
    return this.http.get<Item[]>(
      this.postDetailUrl,
      {params:{id}}
    ).pipe(
      map((items:Item[]) => items[0] )
    );
  }

  ngOnInit(){
    this.getPostDetail(this.id).subscribe((res:Item)=>{
      this.item = res;
    })
  }
}
