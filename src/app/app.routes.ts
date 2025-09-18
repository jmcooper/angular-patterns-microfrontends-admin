import { Routes } from '@angular/router';

import { ManageProducts } from './manage-products/manage-products';
import { ManagePricing } from './manage-pricing/manage-pricing';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'products' },
      { path: 'products', component: ManageProducts },
      { path: 'pricing', component: ManagePricing }
    ]
  },
];

//Use these for testing the shop project independently outside of the host project
export const localRoutes: Routes = [
  {
    path: 'admin',
    children: routes,
  }
]