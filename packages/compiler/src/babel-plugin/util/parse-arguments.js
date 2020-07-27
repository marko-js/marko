export default (file, details) => {
  if (details) {
    return file.parseExpression(`_(${details.value})`, details.pos - 1)
      .arguments;
  }
};
