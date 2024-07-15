import { Component } from '@angular/core';
import { BmbTopBarComponent } from '@ti-tecnologico-de-monterrey-oficial/ds-ng';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [BmbTopBarComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

}
