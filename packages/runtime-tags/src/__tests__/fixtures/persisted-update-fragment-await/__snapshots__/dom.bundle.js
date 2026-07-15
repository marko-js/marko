// tags/widget.marko
const $clicks = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$2 = _script_update("c0", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
enableBranchesPersisted();

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a8", "<p class=loading>crunching numbers…</p>", "b");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/widget.marko.update.mjs
const $clicks_seed = _update_signal("c1");
const $update$2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $clicks_seed, _patch["g"]);
	_update_scope(_patch, _live);
};
const _merge$2 = _resume("c2", $update$2);
_update_content("c", _merge$2);

// tags/layout.marko.update.mjs
const $open_seed = _update_signal("b2");
const $update$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $open_seed, _patch["g"]);
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
};
const _merge$1 = _resume("b3", $update$1);
_update_content("b", _merge$1);

// template.marko.update.mjs
const $for_update = _update_for_keyed(1, ($p, $l) => _update_scope($p, $l));
const $count_seed = _update_signal("a1");
const $await_content__update = (_patch, _live) => {
	if ("a" in _patch) _merge$2(_patch["a"], _live["a"]);
	if ("Ab" in _patch) $for_update(_live, [_patch["Ab"], "M"]);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $Reports_content__update = (_patch, _live) => {
	if ("f" in _patch) _live["f"] = _patch["f"];
	_update_scope(_patch, _live);
	if ("Ab" in _patch) _update_branch(_patch, _live, "b", $try_content__update);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
_update_content("a4", $Reports_content__update);
const _merge = _resume("a9", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
