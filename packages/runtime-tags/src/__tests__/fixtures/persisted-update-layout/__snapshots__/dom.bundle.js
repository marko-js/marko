// tags/layout/layout.marko
const $open = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g ? "Close" : "Menu"));
const $setup__script = _script_update("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
const $dynamicTag = _var_resume("b1", /* @__PURE__ */ _dynamic_tag(2));

// template.marko
const $layout_content__input_title = /* @__PURE__ */ _closure_get(3, ($scope) => _text($scope.a, $scope._.d));
const $layout_content__setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.e + 1);
}));
const $layout_content__setup = ($scope) => {
	if (!_updating()) $layout_content__input_title($scope);
	$layout_content__count($scope);
	$layout_content__setup__script($scope);
};
const $layout_content__count = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.c, $scope._.e));
const $layout_content = _content_resume("a1", "<h1> </h1><button class=inc> </button>", "D l D l", $layout_content__setup);
const $count = /* @__PURE__ */ _let(4, /* @__PURE__ */ _closure($layout_content__count));

// tags/layout/layout.marko.update.mjs
const $dynamic_update = _update_signal("b1");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Dc" in patch) _update_dynamic(patch, live, "Dc", "Ac", $dynamic_update);
};
var layout_marko_update_default = _resume("b2", $update$1);

// template.marko.update.mjs
const $layout_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("a" in patch) _text(live["a"], patch["a"]);
};
const $update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("a" in patch) layout_marko_update_default(patch["a"], live["a"]);
};
_update_content("a1", $layout_content__update);
var template_marko_update_default = _resume("a0", $update);
