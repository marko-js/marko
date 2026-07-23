// template.marko.persisted.mjs
const $n = _var_resume("a5", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.g + 1);
}));
const $if_content_holes = /*@__PURE__*/ _update_scopes({
	"NcheckedValue:a": /*@__PURE__*/ _update_controllable("a", _update_input_checkedValue),
	"NcheckedValue:b": /*@__PURE__*/ _update_controllable("b", _update_input_checkedValue)
});
const $n_seed = _update_signal("a5");
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $n_seed, $patch["g"]);
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content_holes], ["a2"]);
};
_construct("a1", $construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $n = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.g + 1);
}));
