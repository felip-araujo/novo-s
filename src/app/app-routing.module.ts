import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'sobre-mim', component: SobreMimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
