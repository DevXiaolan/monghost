import { HTTP_METHODS, useModel } from '@mohism/core';

export const path = '/conn';
export const method = HTTP_METHODS.DELETE;

export default async (name: string) => {
  await useModel('conn').deleteOne({ name });
  return true;
}