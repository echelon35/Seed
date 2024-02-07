export class Camera {
    deviceId: string = "";
    kind: string = "";
    label: string = "";

    copyInto(obj: any){
        this.deviceId = obj.deviceId || null;
        this.kind = obj.kind || null;
        this.label = obj.label || null;
    }
}