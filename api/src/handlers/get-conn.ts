import { useModel } from '@mohism/core';

export const path = '/conn';

export default async () => {
  const list = await useModel('conn').find({}, {
    _id: 1,
    name: 1,
    dsn: 1,
  });
  return list;
}