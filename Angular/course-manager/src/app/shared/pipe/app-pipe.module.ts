import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ReplacePipe } from "./replace.pipe";

@NgModule({
    declarations: [
        ReplacePipe
    ],
    exports: [
        ReplacePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppPipeModule { 

}