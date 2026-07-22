// template.marko.persisted.mjs
_enable_catch();
const $await_content__taps = _var_resume("a9", /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.c, $scope.f)));
const $await_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$await_content__taps($scope, $scope.f + 1);
}));
const $clicks = _var_resume("a10", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
}));
const $taps_seed = _update_signal("a9");
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $clicks_seed = _update_signal("a10");
const $await_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) _update_seed($live, $taps_seed, $patch["f"]);
	$await_content_holes($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a3");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $clicks_seed, $patch["h"]);
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("Ac" in $patch) _update_branch($patch, $live, "c", $try_content__update, "a6", "a4");
};
const $noop_update = () => {};
_update_content("a4", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $await_content__taps = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.c, $scope.f));
const $await_content__setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$await_content__taps($scope, $scope.f + 1);
}));
const $placeholder_content = _content_resume("a4", "loading…", "b");
const $clicks = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a7", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
}));
