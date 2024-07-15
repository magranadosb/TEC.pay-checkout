import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'checkout',
        loadComponent: () => import('./modules/checkout/checkout.component'),
    },
    { path: '', redirectTo: 'checkout', pathMatch: 'full' },
    { path: '**', redirectTo: 'checkout' }
];
