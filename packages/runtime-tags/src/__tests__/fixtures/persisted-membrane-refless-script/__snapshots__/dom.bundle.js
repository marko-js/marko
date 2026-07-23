// template.marko.persisted.mjs
const $if_content__setup = _script_shared(($scope) => window.scriptRuns = (window.scriptRuns || 0) + 1);
const $nav = _var_resume("a6", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$nav($scope, $scope.g + 1);
}));
const $nav_seed = _update_signal("a6");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $nav_seed, $patch["g"]);
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [_update_pair], ["a3"]);
};
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__setup = _script_update("a2", ($scope) => window.scriptRuns = (window.scriptRuns || 0) + 1);
const $nav = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$nav($scope, $scope.g + 1);
}));
