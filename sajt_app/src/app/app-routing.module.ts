import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Komponente/index/index.component';
import { PocetnaComponent } from './Komponente/pocetna/pocetna.component';
import { MjesavineComponent } from './Komponente/mjesavine/mjesavine.component';
import { TenktureComponent } from './Komponente/tenkture/tenkture.component';
import { KontaktComponent } from './Komponente/kontakt/kontakt.component';

const routes: Routes = [
  {path: '', component: PocetnaComponent},
  {path: 'medovi', component: IndexComponent},
  {path: 'mjesavine', component: MjesavineComponent},
  {path: 'tenkture', component: TenktureComponent},
  {path: 'kontakt', component: KontaktComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
