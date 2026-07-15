// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a4", "loading…", "b");
const $clicks = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $clicks_seed = _update_signal("a2");
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", _update_scope);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("h" in _patch) _update_seed(_live, $clicks_seed, _patch["h"]);
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("g" in _patch) _live["g"] = _patch["g"];
	if ("Ac" in _patch) _update_branch(_patch, _live, "c", $try_content__update);
};
const _merge = _resume("a5", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
