// template.marko
var import_components = require_components();
var import_vdom = require_vdom();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "d";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", null, "0", _component, null, 0);
	(0, import_render_tag.default)(_marko_template$1, { "depth": 4 }, out, _componentDef, "1");
	out.ee();
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// a.marko
var import_vdom = require_vdom();
var import_load_tag_browser = /* @__PURE__ */ __toESM(require_load_tag_browser());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "a";
const _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
const _marko_load_B = (0, import_load_tag_browser.default)("b", () => Promise.resolve().then(() => b_exports));
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("span", null, "0", _component, null, 0);
	out.t("a ", _component);
	out.t(input.depth, _component);
	out.ee();
	if (input.depth > 0) (0, import_render_tag.default)(_marko_load_B, { "depth": input.depth - 1 }, out, _componentDef, "1");
}, { t: _marko_componentType$1 }, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// t.marko
const $template = "<span>t <!></span><!><!>";
const $walks = "Db%l%c";
_resumed.a = _marko_template$1;
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_depth = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, _marko_template$1, ($_) => ({ depth: $scope._.e - 1 })));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_depth);
const $input_depth = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.a, $scope.e);
	$if($scope, $scope.e > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var t_default = /*@__PURE__*/ _template("c", $template, $walks, 0, $input);

// b.marko
var b_exports = /* @__PURE__ */ __exportAll({ default: () => _marko_template });
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType = "b";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("span", null, "0", _component, null, 0);
	out.t("b ", _component);
	out.t(input.depth, _component);
	out.ee();
	if (input.depth > 0) (0, import_dynamic_tag.default)(out, t_default, () => ({ "depth": input.depth - 1 }), null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
