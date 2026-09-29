// components/counter.marko
var import_vdom = require_vdom();
const $template$2 = "<button class=inc> </button>";
const $walks$2 = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script$1 = _script("__tests__/components/counter.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	$signal($scope, 0).onabort = () => console.log("counter destroyed");
});
function $setup$2($scope) {
	$signalReset($scope, 0);
	$count($scope, 0);
	$setup__script$1($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/components/counter.marko", $template$2, $walks$2, $setup$2);

// components/tags-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
function $setup$1($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter(1, 1));
}
var tags_await_default = /*@__PURE__*/ _template("__tests__/components/tags-await.marko", $template$1, "b%c", $setup$1);

// components/tags-if.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const $template = "<!><!><button class=hide>hide</button>";
const $walks = "b%b b";
const $if = /*@__PURE__*/ _if("#text/0", "<span>shown</span>");
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/components/tags-if.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, false);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var tags_if_default = /*@__PURE__*/ _template("__tests__/components/tags-if.marko", $template, $walks, $setup);

// template.marko
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_await_default, null, null, null, null, _componentDef, "0");
	(0, import_dynamic_tag.default)(out, tags_if_default, null, null, null, null, _componentDef, "1");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
