import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutclickDirective } from './outclick.directive';


@NgModule({
  declarations: [
    OutclickDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OutclickDirective
  ]
})
export class OutclickModule { }
