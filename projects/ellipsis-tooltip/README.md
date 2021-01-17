# EllipsisTooltip

This lirary will give a dynamic tooltip using ngx bootstrap and bootstrap style , for overfloating texts.
the tooltip will show and hide dynamicly during window resize .

## usage
npm i ellipsis-tooltip

then importing the module inside your app module

EllipsisTooltipModule
import { EllipsisTooltipModule } from 'ellipsis-tooltip';

than adding bootstrap styles to angular.json file

 "node_modules/bootstrap/dist/css/bootstrap.css"

 finaly wrapping your desired text inside the tooltip component 
 <lib-tootltip></lib-tootltip>

 ## Current issues
 the component will give a tslint error inside the editor , this will be updated soon 

