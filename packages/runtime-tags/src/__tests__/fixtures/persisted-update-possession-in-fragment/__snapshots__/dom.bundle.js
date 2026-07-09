// tags/layout.marko
enableBranches();

// template.marko
const $count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranches();

// tags/layout.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("Da" in patch) _update_dynamic(patch, live, "Da", "Aa", 0);
};
var layout_marko_update_default = _resume("b1", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a7");
const $Widget_content__update = (patch, live) => {
	if ("Da" in patch) _update_dynamic(patch, live, "Da", "Aa", 0);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) layout_marko_update_default(patch["c"], live["c"]);
};
_update_content("a1", _update_scope);
_update_content("a3", $Widget_content__update);
_update_content("a0", _update_scope);
var template_marko_update_default = _resume("a8", $update);
