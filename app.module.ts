import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionRendererComponent, GridFormComponent } from './grid-form/grid-form.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormlyComponent } from './formly/formly.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Ensure you import AgGridModule
import { gridFormModule } from './module/grid-form.module';
import { GridFormTypeComponent } from './formly/grid.type'; 
import { GridFormlyCellComponent } from './formly/grid-formly-cell.component';
import { FormlyBasicComponent } from './formly-basic/formly-basic.component';
import { PhoneCodesService } from './services/phone-codes.service';
import { HttpClientModule} from '@angular/common/http';
import { FormlyAdvanceComponent } from './formly-advance/formly-advance.component'; 
import { formlyAdvanceModule } from './module/formlyAdvance.module';
import { RepeatTypeComponent } from './formly-advance/repeat-section.type';
import { FormlyFieldStepperComponent } from './formly-advance/stepper.type'; 
import { MatStepperModule } from '@angular/material/stepper';
import { PanelWrapperComponent } from './formly-basic/panel-wrapper.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompleteTypeComponent } from './formly-basic/MyAutocompleteTypeComponent';
import { StatesService } from './services/states.services';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AutocompleteMultiSelectTypeComponent } from './formly-basic/myAutocompleteMultiSelectTypeComponent';
import { MatSelectModule } from '@angular/material/select';
import { MatTableTypeComponent } from './formly-basic/mat-tableTypeComponent';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTableContentComponent } from './mat-table-content/mat-table-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableContentAdvanceComponent } from './mat-table-content-advance/mat-table-content-advance.component';
import { OrganizationalChartComponent } from './organizational-chart/organizational-chart-component';
import { HighchartsChartModule } from 'highcharts-angular';
import { OrganizationalChart1Component } from './organizational-chart1/organizational-chart1.component';
import { CardViewDataComponent } from './card-view-data/card-view-data.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    GridFormComponent,
    FormlyComponent,
    GridFormTypeComponent,
    GridFormlyCellComponent,
    FormlyBasicComponent,
    FormlyAdvanceComponent,
    RepeatTypeComponent,
    FormlyFieldStepperComponent,
    PanelWrapperComponent,
    AutocompleteTypeComponent,
    AutocompleteMultiSelectTypeComponent,
    MatTableTypeComponent,
    MatTableContentComponent,
    MatTableContentAdvanceComponent,
    OrganizationalChartComponent,
    OrganizationalChart1Component,
    CardViewDataComponent
  ],
  imports: [
    AgGridModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: 'This field is required'},
        {name: 'minLength', message: 'password should have at least 6 character'}],
      extras: { lazyRender: true },
      types: [
        { name: 'grid', component: GridFormTypeComponent },
        { name: 'repeat', component: RepeatTypeComponent },
        { name: 'stepper', component: FormlyFieldStepperComponent},
        { name: 'my-autocomplete', component: AutocompleteTypeComponent},
        { name: 'my-autocompletemultiselect', component: AutocompleteMultiSelectTypeComponent},
        { name: 'mat-table', component: MatTableTypeComponent}
      ],
      wrappers: [{ name: 'panel', component: PanelWrapperComponent }],
    }),
    FormlyBootstrapModule,
    gridFormModule,
    HttpClientModule,
    formlyAdvanceModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    HighchartsChartModule,
    MatSidenavModule
  ],
  providers: [
    PhoneCodesService,
    StatesService,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add CUSTOM_ELEMENTS_SCHEMA here
})
export class AppModule { }
