export default (hub, details) => {
  if (details) {
    return hub.parseExpression(`_(${details.value})`, details.pos - 1)
      .arguments;
  }
};
