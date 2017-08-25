import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NeedComponent } from './need.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: 'needs',
				component: NeedComponent
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class NeedRoutingModule { }

