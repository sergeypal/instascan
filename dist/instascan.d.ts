
export interface IDevice {
    name: string;
    id: string;

    getCameras(): any;
}

export interface ICamera {
    _stream: any;

    getCameras(): Promise<any>;
}

export interface IScanner {
    _camera: ICamera;

    addListener(name: string, callback: () => void);

    start(device: any);

    stop(): Promise<any>;

    scan(): any;

    new(settings:any) : IScanner;
}

export default interface IInstascan {
    Camera: ICamera;
    Scanner: IScanner;
    new () : IInstascan;
}
