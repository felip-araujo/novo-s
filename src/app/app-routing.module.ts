import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { PlProjectComponent } from './pl-project/pl-project.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'sobre-mim', component: SobreMimComponent} ,
  { path: 'pl-project', component: PlProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
