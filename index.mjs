import { deepCloneAdvanced, deepCloneBasic } from './deepClone.mjs';
import { test } from './test.mjs';

// test
(function () {
  const originalObj = {
    parent: {
      child1: {
        child2: 'msg from child2',
        sibling2: "I'm the sibling",
        siblingArr: [1, 3, 5, 7],
      },
    },
    func: () => 'test func',
  };

  const copiedObjBasic = deepCloneBasic(originalObj);

  // intentionally create a circular reference issue
  // which will cause a "Maximum call stack size exceeded" error
  originalObj.circularReferenceBug = originalObj;
  const copiedObjAdvanced = deepCloneAdvanced(originalObj);

  originalObj.parent.child1.child2 = 'msg changed';

  test('deepCloneBasic', () =>
    originalObj.parent.child1.child2 === 'msg changed' &&
    copiedObjBasic.parent.child1.child2 === 'msg from child2');

  test('deepCloneAdvanced', () =>
    copiedObjAdvanced.parent.child1.child2 === 'msg from child2' &&
    copiedObjAdvanced.func() === 'test func');
})();
