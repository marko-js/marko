// tags/widget.marko
const $clicks = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$2 = _script_update("c0", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));
enableBranches();

// tags/layout.marko
const $open = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("b1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
enableBranches();

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a2", "<p class=loading>crunching numbers…</p>", "b");
const $count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranches();

// tags/widget.marko.update.mjs
const $clicks_seed = _update_signal("c1");
const $update$2 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $clicks_seed, patch["g"]);
	_update_scope(patch, live);
};
var widget_marko_update_default = _resume("c2", $update$2);

// tags/layout.marko.update.mjs
const $open_seed = _update_signal("b2");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $open_seed, patch["g"]);
	if ("Dc" in patch) _update_dynamic(patch, live, "Dc", "Ac", 0);
};
var layout_marko_update_default = _resume("b3", $update$1);

// template.marko.update.mjs
const $for_update = _update_for(1, "a7", (branch, args) => _update_scope(args[0], branch));
const $count_seed = _update_signal("a8");
const $await_content__update = (patch, live) => {
	if ("a" in patch) widget_marko_update_default(patch["a"], live["a"]);
	if ("Ab" in patch) $for_update(live, [patch["Ab"], "M"]);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $await_content__update);
};
const $Reports_content__update = (patch, live) => {
	if ("f" in patch) live["f"] = patch["f"];
	_update_scope(patch, live);
	if ("Ab" in patch) _update_branch(patch, live, "b", $try_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) layout_marko_update_default(patch["c"], live["c"]);
};
_update_content("a5", $Reports_content__update);
var template_marko_update_default = _resume("a9", $update);
