import { Routes } from '@angular/router';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'terminos', component: TermsComponent },
  { path: 'contacto', component: ContactoComponent }
];