
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SayHelloComponent }   from './sample-content/sayhello.component';

const routes: Routes = [
  { path: 'sample/sayhello', component: SayHelloComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SayHelloRoutingModule { }

