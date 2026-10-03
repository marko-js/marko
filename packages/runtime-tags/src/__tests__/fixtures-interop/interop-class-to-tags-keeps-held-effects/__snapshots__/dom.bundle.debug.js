// template.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "name": "a" }), null, null, null, _componentDef, "0");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "name": "b" }), null, null, null, _componentDef, "1");
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

// components/tags-child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/components/tags-child.marko_3*content", " ", " ", 0, $catch_content__$params);
const $await_content__input_name__script = _script("__tests__/components/tags-child.marko_2_input_name#0:3", ($scope) => console.log(`${$scope._._.input_name} in try`));
const $await_content__input_name = /*@__PURE__*/ _closure_get("input_name/4", $await_content__input_name__script, ($scope) => $scope._._, "__tests__/components/tags-child.marko_2_input_name#0:3/subscribe");
const $await_content__setup = $await_content__input_name;
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("value", 1));
};
const $input_name__closure = /*@__PURE__*/ _closure($await_content__input_name);
const $input_name__script = _script("__tests__/components/tags-child.marko_0_input_name#3", ($scope) => {
	console.log(`${$scope.input_name} before`);
	console.log(`${$scope.input_name} after`);
});
const $input_name = /*@__PURE__*/ _const("input_name", ($scope) => {
	$input_name__closure($scope);
	$input_name__script($scope);
});
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => $input_name($scope, input.name);
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template, "b%c", $setup, $input);
