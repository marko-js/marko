// tags/inner.marko.persisted.mjs
const $update2$2 = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $merge$2 = _resume("b1", $update2$2);
_update_content("b", $merge$2);

// tags/panel.marko.persisted.mjs
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "c4");
const $for_content__update = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $update2$1 = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
	if ("Db" in $patch || "Ab" in $patch) _update_dynamic($patch, $live, "Db", "Ab");
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
};
const $merge$1 = _resume("c3", $update2$1);
_update_content("c", $merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
const $item_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("a")) });
const $count_seed = _update_signal("a8");
const $body_content__construct = ($scope) => {
	_construct_child($scope, "a", "b1");
};
const $body_content__update = ($patch, $live) => {
	if ("a" in $patch) $merge$2($patch["a"], $live["a"]);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.i);
	_construct_child($scope, "c", "c3");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
_construct("a7", $body_content__construct);
_construct("a0", $construct);
_update_content("a4", $item_content_holes);
const $noop_update = () => {};
_update_content("a1", $noop_update);
_update_content("a3", $body_content__update, $body_content__construct);
_update_content("a2", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
