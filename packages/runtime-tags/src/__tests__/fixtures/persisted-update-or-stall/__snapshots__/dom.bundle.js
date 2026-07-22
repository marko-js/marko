// template.marko.persisted.mjs
const $if_content__pair = _var_resume("a8", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.a, $scope.e)));
const $if_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$if_content__pair($scope, $scope.e + "!");
}));
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $pair_seed = _update_signal("a8");
const $if_content_holes = /*@__PURE__*/ _update_scopes({
	"Qc": /*@__PURE__*/ _update_text("c"),
	"Qd": /*@__PURE__*/ _update_text("d")
});
const $count_seed = _update_signal("a9");
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $pair_seed, $patch["e"]);
	$if_content_holes($patch, $live);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update, 0], ["a4", "a3"]);
};
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__pair = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.a, $scope.e));
const $if_content__setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$if_content__pair($scope, $scope.e + "!");
}));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
