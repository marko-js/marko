// components/tags-child.marko
var import_vdom = require_vdom();
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("c0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.c + 1);
	});
	console.log("child effect");
});
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var tags_child_default = /*@__PURE__*/ _template("c", $template$1, $walks$1, $setup$1);

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
const _marko_componentType$1 = "b";
const _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "class" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, { t: _marko_componentType$1 }, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-page.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("d0", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $await_content = /*@__PURE__*/ _await_content(1, " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__dynamicTag($scope, _marko_template$1);
	$try_content__await_promise($scope, rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 0));
};
const $try = /*@__PURE__*/ _try(0, "<!><!><!><!>", "b%b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
var tags_page_default = /*@__PURE__*/ _template("d", $template, "b%c", $setup);

// template.marko
const _marko_componentType = "a";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "page" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_page_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
