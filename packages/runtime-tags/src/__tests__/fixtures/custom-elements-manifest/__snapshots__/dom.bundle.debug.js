// template.marko
const $template = "<probe-badge label=hello><span>child</span></probe-badge>";
const $walks = "b";
const $setup = () => {};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b");

// node_modules/probe-elements/define/probe-badge.js
customElements.define("probe-badge", class extends HTMLElement {});
