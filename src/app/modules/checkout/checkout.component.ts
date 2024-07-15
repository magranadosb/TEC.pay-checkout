import { Component } from '@angular/core';
import {
  BmbButtonDirective,
  BmbCardComponent,
  BmbCheckboxComponent,
  BmbContainerComponent,
  BmbDividerComponent,
  BmbLayoutDirective,
  BmbLayoutItemDirective,
} from '@ti-tecnologico-de-monterrey-oficial/ds-ng';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    BmbLayoutDirective,
    BmbLayoutItemDirective,
    BmbContainerComponent,
    BmbCardComponent,
    BmbDividerComponent,
    BmbCheckboxComponent,
    BmbButtonDirective
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export default class CheckoutComponent {}
