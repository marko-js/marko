// components/class-child/component.js
var require_component = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = class {
		emitClick() {
			this.emit("click");
		}
	};
}));

// components/class-child/index.marko
var import_components = require_components();
var import_vdom = require_vdom();
var import_merge_attrs = /* @__PURE__ */ __toESM(require_merge_attrs());
var import_component = /* @__PURE__ */ __toESM(require_component());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component2 = import_component.default;
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	const { renderBody, ...attrs } = input;
	out.be("button", (0, import_merge_attrs.default)({ "id": "child" }, attrs), "0", _component, null, 4, { "onclick": _componentDef.d("click", "emitClick", false) });
	out.t("child", _component);
	out.ee();
}, { t: _marko_componentType$1 }, _marko_component2);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component2, _marko_template$1._);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { clicked: 0 };
	},
	handleClick() {
		this.state.clicked++;
	},
	getChild() {
		return _marko_template$1;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "count" }, "0", _component, null, 1);
	out.t(state.clicked, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, _component.getChild(), null, null, null, null, _componentDef, "1", [[
		"click",
		"handleClick",
		false
	]]);
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
