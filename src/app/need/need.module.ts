import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NeedRoutingModule } from './need.routing';

import { NeedComponent } from './need.component';

import { LoggerService } from '../logger.service';
import { NeedService } from '../need/need.service';

@NgModule({
	declarations: [
	],
	imports: [
		FormsModule,
		HttpModule,
	],
	exports: [
		RouterModule
	],
	providers: [
		LoggerService,
		NeedService,
	]
})
export class NeedModule { }
