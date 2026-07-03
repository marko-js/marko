// tags/layout/layout.marko
const $open = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g ? "Close" : "Menu"));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $layout_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.e + 1);
}));
const $layout_content__count = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.c, $scope._.e));
const $count = /* @__PURE__ */ _let(4, /* @__PURE__ */ _closure($layout_content__count));

// tags/layout/layout.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Dc" in patch) _update_dynamic(patch["Dc"], patch["Ac"], live["Ac"]);
};
var layout_marko_update_default = _resume("b1", $update$1);

// template.marko.update.mjs
const $layout_content__update = (patch, live) => {
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
