// packages/marko/test/migrate/fixtures/widget-data-is-state/index.js

module.exports = {
  onCreate(input) {
    this.state = {
      x: input.x,
      y: input.y
    };
  }
};
