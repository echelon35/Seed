import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Camera } from '../../Model/Camera';

@Component({
  selector: 'app-scan-view',
  templateUrl: './scan-view.component.html',
  styleUrls: ['./scan-view.component.scss'],
})
export class ScanViewComponent implements OnInit {

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent = new ZXingScannerComponent;

  public scannerEnabled: boolean = false;
  public scanSuccess: boolean = false;
  public information: string = "Aucune information de code n'a été détectée. Zoomez sur le code à scanner.";
  public allowedFormats: BarcodeFormat[] = [];
  public zoomType: string = "";
  public cameras: Camera[] = [];

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    
  }

  public scanQR(){
    this.allowedFormats = [ BarcodeFormat.QR_CODE ];
    this.zoomType = "QR";
    this.enableScanner();
  }

  public scanBarCode(){
    this.allowedFormats = [ BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX ];
    this.zoomType = "BARCODE";
    this.enableScanner();
  }

  public scanSuccessHandler($event: any) {

    this.scannerEnabled = false;
    this.scanSuccess = true;
    this.information = $event;

    // const appointment = new Appointment($event);
    // this.logService.logAppointment(appointment).subscribe(
    //   (result: OperationResponse) => {
    //     this.information = $event;
    //     this.transports = result.object;
    //     this.cd.markForCheck();
    //   },
    //   (error: any) => {
    //     this.information = "Ha ocurrido un error por favor intentalo nuevamente ... ";
    //     this.cd.markForCheck();
    //   });
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "Aucune information de code n'a été détectée. Zoomez sur le code à scanner.";
  }

  public camerasFoundHandler($event: any){
    this.cameras = [];
    console.log($event)
    if($event.length > 0){
      for(var i=0;i<$event.length;i++) {
        console.log("test");
        var camera = new Camera;
        camera.copyInto($event[i]);
        this.cameras.push(camera);
      };
    }
  }

  public camerasNotFoundHandler($event: any){
    console.log($event)
  }

}

