// template.marko
_enable_catch();
const $await_content__taps = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.c, $scope.f));
const $await_content__setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$await_content__taps($scope, $scope.f + 1);
}));
const $placeholder_content = _content_resume("a4", "loading…", "b");
const $clicks = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $taps_seed = _update_signal("a6");
const $clicks_seed = _update_signal("a2");
const $await_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("f" in _patch) _update_seed(_live, $taps_seed, _patch["f"]);
	_update_scope(_patch, _live);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("h" in _patch) _update_seed(_live, $clicks_seed, _patch["h"]);
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("g" in _patch) _live["g"] = _patch["g"];
	if ("Ac" in _patch) _update_branch(_patch, _live, "c", $try_content__update);
};
const _merge = _resume("a7", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
