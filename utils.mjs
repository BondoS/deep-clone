export const enhancedTypeOf = (unIdentifiedVar) =>
  Object.prototype.toString.call(unIdentifiedVar).slice(8, -1);
