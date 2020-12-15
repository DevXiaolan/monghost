import request from '../utils/request';
import { IConnSetting, ICommonResponseData, ICommonResponse } from '../../../type';

export const addConn = async (data: IConnSetting) => {
  const { code, message } = await request('/api/conn', {
    data,
    method: 'POST',
    responseType: 'json',
  }) as ICommonResponseData;
  
  if (code !== 0) {
    throw new Error(message);
  }
}


export const getConnList = async (): Promise<IConnSetting[]> => {
  const { code, data, message } = await request('/api/conn') as ICommonResponseData;
  if (code !== 0) {
    throw new Error(message);
  }
  return data;
}

export const deleteConn = async (name: string) => {
  const { code, data, message } = await request('/api/conn', {
    data: {
      name,
    },
    method: 'DELETE',
  }) as ICommonResponseData;
  if (code !== 0) {
    throw new Error(message);
  }
  return data;
}