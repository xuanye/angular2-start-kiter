

import { NgModule } from '@angular/core';
import { SayHelloRoutingModule } from "./sample.routing";
import { SayHelloComponent }   from './sample-content/sayhello.component';

@NgModule({
    imports: [
        SayHelloRoutingModule
    ],
    exports: [],
    declarations: [SayHelloComponent],
    providers: [],
})
export class SampleModule { }
