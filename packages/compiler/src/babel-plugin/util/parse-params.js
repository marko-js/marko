export default (hub, details) => {
  if (details) {
    return hub.parseExpression(`(${details.value})=>{}`, details.pos).params;
  }
};
