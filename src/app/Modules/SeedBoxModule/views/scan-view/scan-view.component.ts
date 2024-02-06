import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-view',
  templateUrl: './scan-view.component.html',
  styleUrls: ['./scan-view.component.scss'],
})
export class ScanViewComponent implements OnInit {


  public scannerEnabled: boolean = true;
  public transports: Transport[] = [];
  public information: string = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.information = "Espera recuperando información... ";

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
    this.information = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";
  }

}

interface Transport {
  plates: string;
  slot: Slot;
}

interface Slot {
  name: string;
  description: string;
}
