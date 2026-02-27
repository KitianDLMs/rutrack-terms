import { Routes } from '@angular/router';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: TermsComponent },
  { path: 'terminos', component: TermsComponent },
  { path: 'contacto', component: ContactoComponent }
];