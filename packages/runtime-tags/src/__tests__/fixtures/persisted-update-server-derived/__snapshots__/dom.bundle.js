// template.marko
const $if_content__details_price__script = _script_update("a4", ($scope) => _on($scope.c, "click", function() {
	$count($scope._, $scope.f);
}));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
const $if_content__details_price__script = _script_shared(($scope) => _on($scope.c, "click", function() {
	$count($scope._, $scope.f);
}));
const $if_content__details_price = _var_resume("a6", /*@__PURE__*/ _const_persisted(5, ($scope) => {
	_text($scope.b, $scope.f);
	$if_content__details_price__script($scope);
}));
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $details_price_update = _update_signal("a6");
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a7");
const $if_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("f" in _patch) $details_price_update(_live, _patch["f"]);
	$if_content_holes(_patch, _live);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $count_seed, _patch["g"]);
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("Dc" in _patch) _update_if(_patch, _live, "Dc", "Ac", [$if_content__update, 0]);
};
const _merge = _resume("a3", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
