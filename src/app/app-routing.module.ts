import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { PlProjectComponent } from './pl-project/pl-project.component';
import { DpoComponent } from './dpo/dpo.component';
import { WhatsappBComponent } from './whatsapp-b/whatsapp-b.component';
import { IsmaComponent } from './isma/isma.component';
import { ImperioComponent } from './imperio/imperio.component';
import { IdpbComponent } from './idpb/idpb.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'sobre-mim', component: SobreMimComponent} ,
  { path: 'pl-project', component: PlProjectComponent},
  { path: 'dpo', component: DpoComponent},
  { path: 'whatsapp', component: WhatsappBComponent},
  { path: 'isma', component: IsmaComponent},
  { path: 'imperio', component: ImperioComponent},
  { path: 'idpb', component: IdpbComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
