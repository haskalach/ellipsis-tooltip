import { NgModule } from '@angular/core';
import { TootltipComponent } from './tootltip/tootltip.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CommonModule } from '@angular/common';

export const customTootltipModule = TooltipModule.forRoot();
@NgModule({
  declarations: [TootltipComponent],
  imports: [
    customTootltipModule,
    CommonModule
  ],
  exports: [TootltipComponent]
})
export class EllipsisTooltipModule { }
