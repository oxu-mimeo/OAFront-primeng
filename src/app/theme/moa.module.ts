import { NgModule,ModuleWithProviders } from "@angular/core";
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MOAPageTopComponent } from "./components/moaPageTop";
import { MOAPageMenuComponent } from "./components/moaPageMenu";
import { MOAMenuService } from "./services";
import { MOABASEComponent } from "./moa.component";
import { workspaceRoutes } from "./moa.routes";
import {InputTextModule, ButtonModule, DataTableModule,SharedModule, AccordionModule, GrowlModule, TooltipModule} from 'primeng/primeng';
const MOA_COMPONENTS=[
    
    MOAPageTopComponent,
    MOAPageMenuComponent,
    MOABASEComponent
];

const MOA_SERVICES=[
    MOAMenuService
]
@NgModule({
   declarations:[
       MOA_COMPONENTS
   ],
    exports:[
        MOA_COMPONENTS
    ],
    providers:[
        MOA_SERVICES
    ],
    imports:[
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        BrowserAnimationsModule,
        RouterModule.forChild(workspaceRoutes),
        InputTextModule,
        ButtonModule,
        // DataTableModule,
        SharedModule,
        AccordionModule,
        GrowlModule,
        TooltipModule
    ],
})

export class MOAModule{
    static forRoot():ModuleWithProviders{
        return <ModuleWithProviders>{
            ngModule:MOAModule,
            providers:[
                MOA_SERVICES
            ]
        }
    }
}