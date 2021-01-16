import { NgModule } from '@angular/core';
import { TootltipComponent } from './tootltip/tootltip.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [TootltipComponent],
  imports: [
    TooltipModule.forRoot(),
    CommonModule
  ],
  exports: [TootltipComponent]
})
export class EllipsisTooltipModule { }
