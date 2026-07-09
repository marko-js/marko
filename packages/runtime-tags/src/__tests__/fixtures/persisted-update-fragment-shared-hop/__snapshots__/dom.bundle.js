// tags/layout.marko
enableBranches();

// tags/frame.marko
enableBranches();

// template.marko
const $Dashboard_content__tally = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $Dashboard_content__setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$Dashboard_content__tally($scope, $scope.d + 1);
}));
const $frame_content__count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $frame_content__setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$frame_content__count($scope, $scope.d + 1);
}));
enableBranches();

// tags/layout.marko.update.mjs
const $update$2 = (patch, live) => {
	if ("Da" in patch) _update_dynamic(patch, live, "Da", "Aa", 0);
};
var layout_marko_update_default = _resume("c1", $update$2);

// tags/frame.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("Da" in patch) _update_dynamic(patch, live, "Da", "Aa", 0);
};
var frame_marko_update_default = _resume("b1", $update$1);

// template.marko.update.mjs
const $tally_seed = _update_signal("a5");
const $count_seed = _update_signal("a6");
const $Dashboard_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $tally_seed, patch["d"]);
	_update_scope(patch, live);
};
const $frame_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) layout_marko_update_default(patch["c"], live["c"]);
};
const $update = (patch, live) => {
	if ("a" in patch) frame_marko_update_default(patch["a"], live["a"]);
};
_update_content("a1", $Dashboard_content__update);
_update_content("a4", $frame_content__update);
var template_marko_update_default = _resume("a7", $update);
