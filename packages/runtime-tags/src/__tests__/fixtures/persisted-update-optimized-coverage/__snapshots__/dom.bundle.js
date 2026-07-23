// template.marko.persisted.mjs
const $count = _var_resume("a12", /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.b, $scope.j)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.j + 1);
}));
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a12");
const $elseif_content__update = ($patch, $live) => {
	if ("b" in $patch) $live["b"] = $patch["b"];
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.j);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("j" in $patch) _update_seed($live, $count_seed, $patch["j"]);
	if ("h" in $patch) $live["h"] = $patch["h"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [
		$if_content_holes,
		$elseif_content__update,
		0
	], [
		"a7",
		"a6",
		"a5"
	]);
};
_construct("a2", $construct);
const $noop_update = () => {};
_update_content("a4", $noop_update);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $inputtag_content__title = /*@__PURE__*/ _closure_get(2, ($scope) => {
	if (!updating) _text($scope.a, $scope._.b);
});
const $inputtag_content__setup = ($scope) => {
	if (!updating) $inputtag_content__title($scope);
};
const $inputtag_content = _content_resume("a4", " ", " b", $inputtag_content__setup);
const $count = /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.b, $scope.j));
const $setup__script = _script_update("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.j + 1);
}));
