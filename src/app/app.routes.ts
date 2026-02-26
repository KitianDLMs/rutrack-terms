import { Routes } from '@angular/router';
import { TermsComponent } from './pages/terms/terms.component';

export const routes: Routes = [
  { path: '', component: TermsComponent },
  { path: 'terminos', component: TermsComponent }
];