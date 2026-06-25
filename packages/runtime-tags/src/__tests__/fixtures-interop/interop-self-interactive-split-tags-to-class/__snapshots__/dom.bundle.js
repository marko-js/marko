// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => {};

// components/split-counter/component-browser.js
var require_component_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = class {
		handleClick() {
			const el = this.getEl();
			el.setAttribute("data-count", Number(el.getAttribute("data-count")) + 1);
		}
	};
}));

// v:template.marko.hydrate-5.js
var import_components = require_components();
var import_component_browser = /* @__PURE__ */ __toESM(require_component_browser());
(0, import_components.register)("b", import_component_browser.default);
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
