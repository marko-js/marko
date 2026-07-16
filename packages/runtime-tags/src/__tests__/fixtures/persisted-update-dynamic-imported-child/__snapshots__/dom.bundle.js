// template.marko
const $count = /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.c, $scope.n));
const $setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.n + 1);
}));

// tags/roster.marko.persisted.mjs
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content_holes($p, $l));
const $update2$1 = (_patch, _live) => {
	if ("Aa" in _patch) $for_update(_live, [_patch["Aa"], "M"]);
};
const _merge$2 = _resume("c2", $update2$1);
_update_content("c", _merge$2);

// tags/digest.marko.persisted.mjs
const _merge$1 = _resume("b0", /* @__PURE__ */ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b")
}));
_update_content("b", _merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.c, $scope.n)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.n + 1);
}));
const $count_seed = _update_signal("a4");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("n" in _patch) _update_seed(_live, $count_seed, _patch["n"]);
	if ("i" in _patch) _live["i"] = _patch["i"];
	if ("j" in _patch) _live["j"] = _patch["j"];
	if ("l" in _patch) _live["l"] = _patch["l"];
	$_holes(_patch, _live);
	if ("Dd" in _patch || "Ad" in _patch) _update_dynamic(_patch, _live, "Dd", "Ad");
	if ("De" in _patch || "Ae" in _patch) _update_dynamic(_patch, _live, "De", "Ae");
};
const _merge = _resume("a2", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
