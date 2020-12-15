import { Model } from '@mohism/core';

export default Model('conn', {
  name: { type: String, default: 'local', unique: true },
  dsn: { type: String, default: '' },
});