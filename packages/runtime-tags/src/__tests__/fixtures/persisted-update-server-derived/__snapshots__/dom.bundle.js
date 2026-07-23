// template.marko.persisted.mjs
const $if_content__details_price__script = _script_shared(($scope) => _on($scope.c, "click", function() {
	$count($scope._, $scope.f);
}));
const $if_content__details_price = _var_resume("a8", /*@__PURE__*/ _const_persisted(5, ($scope) => {
	_text($scope.b, $scope.f);
	$if_content__details_price__script($scope);
}));
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $details_price_update = _update_signal("a8");
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a9");
const $if_content__construct = ($scope) => {
	_text($scope.b, $scope.f);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) $details_price_update($live, $patch["f"]);
	$if_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update, 0], ["a4", "a3"]);
};
_construct("a4", $if_content__construct);
_construct("a1", $construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__details_price__script = _script_update("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope._, $scope.f);
}));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
