// components/counter.marko
const $template$2 = "<button class=inc> </button>";
const $walks$2 = " D l";
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script$1 = _script("b0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.c + 1);
	});
	$signal($scope, 0).onabort = () => console.log("counter destroyed");
});
function $setup$2($scope) {
	$signalReset($scope, 0);
	$count($scope, 0);
	$setup__script$1($scope);
}

// components/tags-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__setup = ($scope) => {
	$setup$2($scope.a);
};
const $await_content = /*@__PURE__*/ _await_content(0, $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise(0);
function $setup$1($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter(1, 1));
}
var tags_await_default = /*@__PURE__*/ _template("c", $template$1, "b%c", $setup$1);

// components/tags-if.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const $template = "<!><!><button class=hide>hide</button>";
const $walks = "b%b b";
const $if = /*@__PURE__*/ _if(0, "<span>shown</span>");
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("d0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, false);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var tags_if_default = /*@__PURE__*/ _template("d", $template, $walks, $setup);

// template.marko
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_await_default, null, null, null, null, _componentDef, "0");
	(0, import_dynamic_tag.default)(out, tags_if_default, null, null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
