// template.marko
var import_vdom = require_vdom();
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_spread_default, () => ({ "id": "spread" }), (out) => {
		(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
			(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
				out.t("Got ", _component);
				out.t(value, _component);
			} });
		}, {
			"_provider": resolveAfter("done", 1),
			"_name": "resolveAfter(\"done\", 1)"
		}), out, _componentDef, "1");
	}, null, null, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};

// components/tags-spread.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $input__script = _script("__tests__/components/tags-spread.marko_0_input#2", ($scope) => _attrs_script($scope, "#div/0"));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input);
	$input__script($scope);
});
var tags_spread_default = /*@__PURE__*/ _template("__tests__/components/tags-spread.marko", $template, " b", 0, $input);
