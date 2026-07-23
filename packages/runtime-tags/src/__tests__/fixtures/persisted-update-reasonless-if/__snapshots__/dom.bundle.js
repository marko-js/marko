// template.marko.persisted.mjs
const $count = _var_resume("a3", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count_seed = _update_signal("a3");
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
_construct("a1", $construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

// data.ts
let count = typeof process === "undefined" ? 0 : Number(process.env.MARKO_REASONLESS_IF_COUNT || 0);
