// template.marko
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));

// tags/inner.marko.persisted.mjs
const $update2$2 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const _merge$2 = _resume("b1", $update2$2);
_update_content("b", _merge$2);

// tags/panel.marko.persisted.mjs
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l));
const $for_content__update = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const $update2$1 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
	if ("Db" in _patch || "Ab" in _patch) _update_dynamic(_patch, _live, "Db", "Ab");
	if ("Ac" in _patch) $for_update(_live, [_patch["Ac"], "M"]);
};
const _merge$1 = _resume("c5", $update2$1);
_update_content("c", _merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $part_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $header_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a6");
const $body_content__update = (_patch, _live) => {
	if ("a" in _patch) _merge$2(_patch["a"], _live["a"]);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("h" in _patch) _update_seed(_live, $count_seed, _patch["h"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
_update_content("a2", $part_content_holes);
_update_content("a1", $body_content__update);
_update_content("a0", $header_content_holes);
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
