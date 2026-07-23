// tags/static-bit.marko.persisted.mjs
const $update2$1 = () => {};
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $if_content__count = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.g));
const $count = _var_resume("a5", /*@__PURE__*/ _let_persisted(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $count_seed = _update_signal("a5");
const $if_content__update = ($patch, $live) => {
	if ("Db" in $patch) _update_region("b")($patch, $live);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update], ["a2"]);
};
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.g));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
