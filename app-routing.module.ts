import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'formly', loadChildren: () =>import('./module/formly.module').then(m=>m.formlyModule)},
  { path: 'grid-form', loadChildren: () =>import('./module/grid-form.module').then(m=>m.gridFormModule)},
  { path: 'formly-basic', loadChildren: () =>import('./module/formlyBasic.module').then(m=>m.formlyBasicModule)},
  { path: 'formly-advance', loadChildren: () =>import('./module/formlyAdvance.module').then(m=>m.formlyAdvanceModule)},
  { path: 'mat-table-content', loadChildren: () =>import('./module/mat-table-content.module').then(m=>m.MatTableContentModule)},
  { path: 'mat-table-content-advance', loadChildren: () =>import('./module/mat-table-content-advance.module').then(m=>m.MatTableContentAdvanceModule)},
  { path: 'orginazation-chart', loadChildren: () =>import('./module/organizational-chart.module').then(m=>m.OrganizationChartContentModule)},
  { path: 'orginazation-chart1', loadChildren: () =>import('./module/organizational-chart1.module').then(m=>m.OrganizationChart1ContentModule)},
  { path: 'card-view', loadChildren: () =>import('./module/card-view.module').then(m=>m.CardViewModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
