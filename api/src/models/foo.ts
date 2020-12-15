import { Model } from '@mohism/core';

export default Model('foo', {
  name: { type: String, default: 'mohism' },
  age: { type: Number, default: 99 },
});