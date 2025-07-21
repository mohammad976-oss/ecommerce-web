import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; // or import other standalone components

export const routes: Routes = [
  {
    path: '',
    component: AppComponent // 👈 or another component like HomeComponent
  }
];
