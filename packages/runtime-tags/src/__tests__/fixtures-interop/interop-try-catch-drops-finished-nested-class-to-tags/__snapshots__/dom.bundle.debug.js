// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2__done = ($scope, done) => _text($scope["#text/0"], done);
const $await_content2__$params = ($scope, $params4) => $await_content2__done($scope, $params4[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__dynamicTag($scope, _marko_template);
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 0));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content__setup, 0, $catch_content);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
function $setup($scope) {
	$await_content2($scope);
	$try($scope);
	$await_promise($scope, resolveAfter("done", 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => {};

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/tags-leaf.marko
var import_vdom = require_vdom();
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/components/tags-leaf.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	console.log("child effect");
});
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var tags_leaf_default = /*@__PURE__*/ _template("__tests__/components/tags-leaf.marko", $template$1, $walks$1, $setup$1);

// components/class-inner.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "__tests__/components/class-inner.marko";
const _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "inner" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_leaf_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
function $setup($scope) {
	$dynamicTag($scope, _marko_template$1);
}
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template, "b%c", $setup);

// components/class-wrap.marko
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
