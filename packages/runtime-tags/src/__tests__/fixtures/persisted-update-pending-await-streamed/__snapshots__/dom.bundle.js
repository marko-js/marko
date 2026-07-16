// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a2", "loading…", "b");
const $clicks = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
}));

// template.marko.persisted.mjs
_enable_catch();
const $clicks = _var_resume("a6", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $clicks_seed = _update_signal("a6");
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content_holes);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("h" in _patch) _update_seed(_live, $clicks_seed, _patch["h"]);
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("g" in _patch) _live["g"] = _patch["g"];
	if ("Ac" in _patch) _update_branch(_patch, _live, "c", $try_content__update);
};
const $noop_update = () => {};
_update_content("a2", $noop_update);
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
