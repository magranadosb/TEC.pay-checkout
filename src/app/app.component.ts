import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BmbThemeComponent } from '@ti-tecnologico-de-monterrey-oficial/ds-ng';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopBarComponent,
    BmbThemeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TEC.pay-checkout';
}
