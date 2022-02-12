/*
 * Basic deep clone, this will not work in case of copying
 *  a function or circular references or....
 */
// export function deepCloneBasic( originalObj) {
//  return JSON.parse (JSON.stringify (originalObj));

// }

export const deepCloneBasic = (originalObj) =>
  JSON.parse(JSON.stringify(originalObj));

// export deepCloneBasic;
