import { HTTP_STATUS, MohismError } from '@mohism/core';

const { NotFound, BadRequest } = HTTP_STATUS;

export const ErrUserNotFound = new MohismError('user not found')
  .setStatus(NotFound)
  .setSeq(1);

export const ErrCreateConnFailed = new MohismError('创建连接失败')
  .setStatus(BadRequest)
  .setSeq(1);