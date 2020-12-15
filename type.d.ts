export interface IConnSetting {
  _id?: string;
  name: string;
  dsn: string;
}

export interface ICommonResponse {
  data: ICommonResponseData;
}
export interface ICommonResponseData {
  code: number;
  data: any;
  message: string;
}