// template.marko.persisted.mjs
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(1, "<li> </li>", "D l", 0, $for_content__$params);
const $items = _var_resume("a4", /*@__PURE__*/ _let_persisted(2, ($scope) => {
	if (!updating) $for($scope, [$scope.c, function(item) {
		return item;
	}]);
}));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, `c${$scope.c?.length}`]);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("a")) });
const $items_seed = _update_signal("a4");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) _update_seed($live, $items_seed, $patch["c"]);
	if ("Ab" in $patch) _update_for($patch["Ab"], $live["Ab"], $for_content_holes, $live, "Ab", "a1");
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(1, "<li> </li>", "D l", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let_persisted(2, ($scope) => $for($scope, [$scope.c, function(item) {
	return item;
}]));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, `c${$scope.c?.length}`]);
}));
