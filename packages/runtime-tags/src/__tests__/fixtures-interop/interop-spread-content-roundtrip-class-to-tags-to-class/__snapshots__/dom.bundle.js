// components/class-thing.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$2 = "c", _marko_template$2 = (0, import_vdom.t)(_marko_componentType$2);
(0, import_registry.r)(_marko_componentType$2, () => _marko_template$2);
const _marko_component$2 = {
	onCreate() {
		this.state = { clicks: 0 };
	},
	inc() {
		this.state.clicks++;
	}
};
_marko_template$2._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "class": "thing" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "inc", false) });
	out.t("thing ", _component);
	out.t(state.clicks, _component);
	out.ee();
}, { t: _marko_componentType$2 }, _marko_component$2);
_marko_template$2.Component = (0, import_defineComponent.default)(_marko_component$2, _marko_template$2._);

// components/class-child.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("p", { "id": input.id }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.ee();
}, { t: _marko_componentType$1 }, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-to-class.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_resumed.b = _marko_template$1;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input = ($scope, input) => $dynamicTag($scope, _marko_template$1, () => input);
var tags_to_class_default = /*@__PURE__*/ _template("d", $template, "b%c", 0, $input);

// template.marko
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	inc() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "inc", false) });
	out.t(state.n, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_to_class_default, () => ({ "id": "roundtrip" }), (out) => {
		out.t("Hello ", _component);
		out.t(state.n, _component);
		(0, import_render_tag.default)(_marko_template$2, {}, out, _componentDef, "2");
	}, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
