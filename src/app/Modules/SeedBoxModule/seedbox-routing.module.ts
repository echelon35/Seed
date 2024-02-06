import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ScanViewComponent } from './views/scan-view/scan-view.component';
import { ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';

const routes: Routes = [
    {
      path: '',
      component: ScanViewComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes),
        ZXingScannerModule
    ],
    exports: [RouterModule],
  })
  export class SeedBoxRoutingModule {}