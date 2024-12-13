const regexpCharsReg = /[\\^$.*+?()[\]{}|]/g;
export function escapeRegExp(str) {
  return str.replace(regexpCharsReg, "\\$&");
}
