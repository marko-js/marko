export default (file, details) => {
  if (details) {
    return file.parseExpression(`(${details.value})=>{}`, details.pos).params;
  }
};
