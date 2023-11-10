import { Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';

export const routes: Routes = [
    {
        path: "",
        component: ItemListComponent
    },
    {
        path: "items",
        component: ItemListComponent
    },
    {
        path: "item/:id",
        component: ItemComponent
    }
];
