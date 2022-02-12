/*
 * Basic deep clone, this will not work in case of copying
 *  a function or circular references.
 */

export const deepCloneBasic = (originalObj) =>
  JSON.parse(JSON.stringify(originalObj));

/*
 * Advanced deep clone, this will handle Objects, Arrays and fix circular reference issue.
 */
export const deepCloneAdvanced = (originalObj, map = new WeakMap()) => {
  if (typeof originalObj === 'object') {
    // Handle Object or Array types.
    let clone = Array.isArray(originalObj) ? [] : {};
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
  // basic/exit condition
  return originalObj;
};
