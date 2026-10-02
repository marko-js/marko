// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// tags/lazy-child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value__script = _script("__tests__/tags/lazy-child.marko_0_input_value#3", ($scope) => console.log("loaded " + $scope.input_value));
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => {
	_text($scope["#text/0"], $scope.input_value);
	$input_value__script($scope);
});
const $input = ($scope, input) => $input_value($scope, input.value);
var lazy_child_default = /*@__PURE__*/ _template("__tests__/tags/lazy-child.marko", $template, "D l", 0, $input);

// tags/tags-child.marko
var import_vdom = require_vdom();
const $template$1 = "<!><!><!>";
const $walks$1 = "b%/&c";
let $load_Lazy_setup$1 = /*@__PURE__*/ _load_setup(() => import("./v:lazy-child.marko.setup.mjs"));
let $load_Lazy_tag_input_value$1 = /*@__PURE__*/ _load_signal(() => import("./v:lazy-child.marko.input_value.mjs"));
function $setup$1($scope) {
	$load_Lazy_setup$1($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Lazy_tag_input_value$1($scope["#childScope/1"], "class");
}
var tags_child_default = /*@__PURE__*/ _template("__tests__/tags/tags-child.marko", $template$1, $walks$1, $setup$1);

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-wrap.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "class" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(() => import("./v:lazy-child.marko.setup.mjs"));
let $load_Lazy_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:lazy-child.marko.input_value.mjs"));
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__setup = ($scope) => {
	$load_Lazy_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Lazy_tag_input_value($scope["#childScope/1"], "catch");
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/2"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "<!><!> caught <!>", "b%/&c%", $catch_content__setup, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $await_content2 = /*@__PURE__*/ _await_content("#text/2", " ", " ");
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/2", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter("first", 2));
	$try_content__dynamicTag($scope, _marko_template);
	$try_content__await_promise2($scope, rejectAfter(new Error("x"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!><!>", "b%b%b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);

// tags/v:lazy-child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
