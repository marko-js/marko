// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};

// components/tags-grandchild.marko
var import_vdom = require_vdom();
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__setup__script = _script("__tests__/components/tags-grandchild.marko_1", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$await_content__value($scope, $scope.value + "!");
	});
	console.log("child init effect");
});
const $await_content__setup = ($scope) => {
	console.log("child rendered");
	$await_content__setup__script($scope);
};
const $await_content__value = /*@__PURE__*/ _let("value/4", ($scope) => _text($scope["#text/1"], $scope.value));
const $await_content__v$1 = $await_content__value;
const $await_content__$params$1 = ($scope, $params2) => $await_content__v$1($scope, $params2[0]);
const $await_content$1 = /*@__PURE__*/ _await_content("#text/0", "<button> </button>", " D ", $await_content__setup);
const $await_promise$1 = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params$1);
function $setup$1($scope) {
	$await_content$1($scope);
	$await_promise$1($scope, resolveAfter("child", 2));
}
var tags_grandchild_default = /*@__PURE__*/ _template("__tests__/components/tags-grandchild.marko", $template$1, "b%c", $setup$1);

// components/class-child.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-child.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "class" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_grandchild_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

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
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content__setup, 0, $catch_content);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
function $setup($scope) {
	$await_content2($scope);
	$try($scope);
	$await_promise($scope, resolveAfter("done", 3));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
