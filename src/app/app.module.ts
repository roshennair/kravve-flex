import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ItemComponent } from './item/item.component';

@NgModule({
	declarations: [
		AppComponent,
		ContainerComponent,
		ItemComponent
	],
	imports: [
		BrowserModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
