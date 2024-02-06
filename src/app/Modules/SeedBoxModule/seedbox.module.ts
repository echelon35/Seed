import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { SeedBoxRoutingModule } from './seedbox-routing.module';
import { ScanViewComponent } from './views/scan-view/scan-view.component';



@NgModule({
  declarations: [ScanViewComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
    SeedBoxRoutingModule,
    ReactiveFormsModule,		
		ZXingScannerModule
  ]
})
export class SeedboxModule { }
