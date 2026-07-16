// template.marko
_enable_catch();
const $await_content__taps = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.c, $scope.f));
const $await_content__setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$await_content__taps($scope, $scope.f + 1);
}));
const $placeholder_content = _content_resume("a2", "loading…", "b");
const $clicks = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
_enable_catch();
const $await_content__taps = _var_resume("a7", /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.c, $scope.f)));
const $await_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$await_content__taps($scope, $scope.f + 1);
}));
const $clicks = _var_resume("a8", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
}));
const $taps_seed = _update_signal("a7");
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $clicks_seed = _update_signal("a8");
const $await_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("f" in _patch) _update_seed(_live, $taps_seed, _patch["f"]);
	$await_content_holes(_patch, _live);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("h" in _patch) _update_seed(_live, $clicks_seed, _patch["h"]);
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("g" in _patch) _live["g"] = _patch["g"];
	if ("Ac" in _patch) _update_branch(_patch, _live, "c", $try_content__update);
};
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
