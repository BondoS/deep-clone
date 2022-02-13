import { enhancedTypeOf } from './utils.mjs';
/*
 * Basic deep clone, this will NOT work in case of copying
 *  a function or Set or Map or circular references issue.
 */

export const deepCloneBasic = (originalObj) =>
  JSON.parse(JSON.stringify(originalObj));

/*
 * Advanced deep clone, this will handle Sets. Objects, Arrays and fix circular reference issue.
 */
export const deepCloneAdvanced = (originalObj, map = new WeakMap()) => {
  let clone = null;
  // Handle Set
  if (enhancedTypeOf(originalObj) === 'Set') {
    clone = new Set();
    originalObj.forEach((element) => {
      clone.add(deepCloneAdvanced(element));
    });
    return clone;
  }

  // Handle Map
  if (enhancedTypeOf(originalObj) === 'Map') {
    clone = new Map();
    for (const [key, value] of originalObj) {
      clone.set(key, deepCloneAdvanced(value));
    }
    return clone;
  }

  if (typeof originalObj === 'object') {
    // Handle Object or Array types.
    clone = Array.isArray(originalObj) ? [] : {};
    // Fixing circular reference issue by returning the reference of an object if it was saved from previous iteration.
    if (map.get(originalObj)) return map[originalObj];
    // Use weakMap to save a copy of current Object reference in memory.
    map.set(originalObj, originalObj);
    for (const key in originalObj) {
      // recursively call deepCloneAdvanced function to traverse through the whole object.
      clone[key] = deepCloneAdvanced(originalObj[key], map);
    }
    return clone;
  }
  // basic/exit condition (for other types including primitives and functions....)
  return originalObj;
};
