// tags/static-bit.marko.persisted.mjs
const $update2$2 = () => {};
const $merge$2 = _resume("c0", $update2$2);
_update_content("c", $merge$2);

// tags/stateful-widget.marko.persisted.mjs
const $count__script = _script_shared(($scope) => window.widgetBump = () => $count($scope, $scope.d + 1) - 1);
const $count = _var_resume("b2", /*@__PURE__*/ _let_persisted(3, ($scope) => {
	_text($scope.a, $scope.d);
	$count__script($scope);
}));
const $count_seed = _update_signal("b2");
const $construct$1 = ($scope) => {
	_text($scope.a, $scope.d);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
_construct("b0", $construct$1);
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $construct = ($scope) => {
	_construct_child($scope, "a", "b0");
};
const $update2 = ($patch, $live) => {
	if ("a" in $patch) $merge$1($patch["a"], $live["a"]);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/stateful-widget.marko
const $count__script = _script_update("b1", ($scope) => window.widgetBump = () => $count($scope, $scope.d + 1) - 1);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => {
	_text($scope.a, $scope.d);
	$count__script($scope);
});
