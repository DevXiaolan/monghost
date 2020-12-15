import { HTTP_METHODS, useModel } from '@mohism/core';

import { IConnSetting } from '../../../type';
import { makeConn } from '../common/connection-pool';
import { ErrCreateConnFailed } from '../errors';

export const path = '/conn';
export const method = HTTP_METHODS.POST;

export default async (name: string, dsn: string) => {
  try {
    await useModel('conn').create<IConnSetting>({
      name,
      dsn,
    });
    await makeConn(name);
    return true;
  } catch (err) {
    throw ErrCreateConnFailed;
  }
}