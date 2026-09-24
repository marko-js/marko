// components/class-thing.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {
	onCreate() {
		this.state = { clicks: 0 };
	},
	inc() {
		this.state.clicks++;
	}
};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "class": "thing" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "inc", false) });
	out.t("thing ", _component);
	out.t(state.clicks, _component);
	out.ee();
}, { t: _marko_componentType$1 }, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-spread.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const $template = "<div></div>";
const $walks = " b";
const $input__script = _script("c0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	_attrs_content($scope, "a", $scope.c);
	$input__script($scope);
});
var tags_spread_default = /*@__PURE__*/ _template("c", $template, " b", 0, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
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
	(0, import_dynamic_tag.default)(out, tags_spread_default, () => ({ "id": "spread" }), (out) => {
		out.t("Hello ", _component);
		out.t(state.n, _component);
		(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "2");
	}, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
