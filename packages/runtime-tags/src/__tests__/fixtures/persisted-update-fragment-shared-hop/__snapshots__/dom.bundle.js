// tags/layout.marko
enableBranchesPersisted();

// tags/frame.marko
enableBranchesPersisted();

// template.marko
const $Dashboard_content__tally = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $Dashboard_content__setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$Dashboard_content__tally($scope, $scope.d + 1);
}));
const $frame_content__count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $frame_content__setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$frame_content__count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/layout.marko.persisted.mjs
const $update2$2 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const _merge$2 = _resume("c1", $update2$2);
_update_content("c", _merge$2);

// tags/frame.marko.persisted.mjs
const $update2$1 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const _merge$1 = _resume("b1", $update2$1);
_update_content("b", _merge$1);

// template.marko.persisted.mjs
const $Dashboard_content__tally = _var_resume("a6", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $Dashboard_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$Dashboard_content__tally($scope, $scope.d + 1);
}));
const $frame_content__count = _var_resume("a7", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $frame_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$frame_content__count($scope, $scope.d + 1);
}));
const $tally_seed = _update_signal("a6");
const $Dashboard_content_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $count_seed = _update_signal("a7");
const $Dashboard_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $tally_seed, _patch["d"]);
	$Dashboard_content_holes(_patch, _live);
};
const $frame_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$2(_patch["c"], _live["c"]);
};
const $update2 = (_patch, _live) => {
	if ("a" in _patch) _merge$1(_patch["a"], _live["a"]);
};
_update_content("a2", $Dashboard_content__update);
_update_content("a1", $frame_content__update);
const _merge = _resume("a3", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
