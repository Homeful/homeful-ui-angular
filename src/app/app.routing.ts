import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '**' , component: ErrorComponent },
        ])    
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

