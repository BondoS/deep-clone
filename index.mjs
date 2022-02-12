import { deepCloneBasic } from './deepClone.mjs';
import { test } from './test.mjs';

// test
(function () {
  const originalObj = {
    parent: {
      child1: {
        child2: 'msg from child2',
        sibling2: "I'm the sibling",
      },
    },
  };
  const copiedObj = deepCloneBasic(originalObj);
  originalObj.parent.child1.child2 = 'msg changed';

  test('deepCloneBasic', () =>
    originalObj.parent.child1.child2 === 'msg changed' &&
    copiedObj.parent.child1.child2 === 'msg from child2');
})();
