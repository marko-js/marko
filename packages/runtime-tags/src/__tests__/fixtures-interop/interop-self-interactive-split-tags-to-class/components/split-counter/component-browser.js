// Split component: browser-only logic, like ebay-button. It is stateless (no
// re-render) and reacts to its own DOM events after attaching on hydration.
module.exports = class {
  handleClick() {
    const el = this.getEl();
    el.setAttribute("data-count", Number(el.getAttribute("data-count")) + 1);
  }
};
