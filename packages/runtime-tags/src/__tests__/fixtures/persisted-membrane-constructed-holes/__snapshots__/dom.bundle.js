// tags/info-card.marko.persisted.mjs
const $update2$1 = () => {};
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $if_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.k + 1);
}));
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.b, $scope.k)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.k + 1);
}));
const $count_seed = _update_signal("a6");
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
	if ("De" in $patch) _update_region("e")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.k);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("k" in $patch) _update_seed($live, $count_seed, $patch["k"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("h" in $patch) $live["h"] = $patch["h"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	if ("j" in $patch) $live["j"] = $patch["j"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update], ["a3"]);
};
_construct("a1", $construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.k + 1);
}));
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.b, $scope.k));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.k + 1);
}));
