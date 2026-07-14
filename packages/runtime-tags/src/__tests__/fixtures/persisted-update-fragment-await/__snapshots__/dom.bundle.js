// tags/widget.marko
const $clicks = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$2 = _script_update("c0", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
enableBranchesPersisted();

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a8", "<p class=loading>crunching numbers…</p>", "b");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/widget.marko.update.mjs
const $clicks_seed = _update_signal("c1");
const $update$2 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $clicks_seed, patch["g"]);
	_update_scope(patch, live);
};
const _merge$2 = _resume("c2", $update$2);

// tags/layout.marko.update.mjs
const $open_seed = _update_signal("b2");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $open_seed, patch["g"]);
	if ("Dc" in patch || "Ac" in patch) _update_dynamic(patch, live, "Dc", "Ac");
};
const _merge$1 = _resume("b3", $update$1);

// template.marko.update.mjs
const $for_update = _update_for_keyed(1, (p, l) => _update_scope(p, l));
const $count_seed = _update_signal("a1");
const $await_content__update = (patch, live) => {
	if ("a" in patch) _merge$2(patch["a"], live["a"]);
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
	if ("c" in patch) _merge$1(patch["c"], live["c"]);
};
_update_content("a4", $Reports_content__update);
const _merge = _resume("a9", $update);
function createPatch() {
	return createPatch$1(_merge);
}
