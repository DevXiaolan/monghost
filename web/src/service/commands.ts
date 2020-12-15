import request from '../utils/request';
import { ICommonResponseData } from '../../../type';

export const showDBs = async (name: string) => {
  const { code, data, message } = await request(`/api/show-dbs?name=${name}`) as ICommonResponseData;
  if (code !== 0) {
    throw new Error(message);
  }
  return data;
}

export const showTables = async (name: string, db: string) => {
  const { code, data, message } = await request(`/api/show-tables?name=${name}&db=${db}`) as ICommonResponseData;
  if (code !== 0) {
    throw new Error(message);
  }
  return data;
}

export const find = async (conn: string, db: string, table: string) => {
  if (conn && db && table) {
    const { code, data, message } = await request(`/api/find?conn=${conn}&db=${db}&table=${table}`) as ICommonResponseData;
    if (code !== 0) {
      throw new Error(message);
    }
    return data;
  }
  return [];
}
