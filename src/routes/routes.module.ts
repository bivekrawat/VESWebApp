import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGaurdService } from './route-gaurd.service';
import { routes } from './routes';

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [RouteGaurdService],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
