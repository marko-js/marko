// tags/child.marko.persisted.mjs
const $update2$1 = () => {};
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $count_seed = _update_signal("a4");
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
	if ("De" in $patch) _update_region("e")($patch, $live);
	if ("Df" in $patch || "Af" in $patch) _update_dynamic($patch, $live, "Df", "Af");
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $globalnativeTag_content = _content_resume("a2", "dynamic", "b");
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
