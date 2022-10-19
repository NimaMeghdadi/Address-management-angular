import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: 'home',
      component: AddressFormComponent,
    },
  ];

@NgModule({
    declarations: [ AddressCardComponent , AddressFormComponent],
    imports: [ CommonModule,RouterModule.forChild(routes), NzCardModule  ],
    exports: [],
    providers: [],
})
export class MainModule {}