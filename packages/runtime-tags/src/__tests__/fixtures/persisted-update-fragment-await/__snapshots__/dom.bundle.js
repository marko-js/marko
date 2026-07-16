// tags/widget.marko
const $clicks = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$2 = _script_update("c1", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("b2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
enableBranchesPersisted();

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "<p class=loading>crunching numbers…</p>", "b");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a10", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/widget.marko.persisted.mjs
const $clicks = _var_resume("c2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g)));
const $setup__script$2 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));
const $clicks_seed = _update_signal("c2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $update2$2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $clicks_seed, _patch["g"]);
	$_holes(_patch, _live);
};
const _merge$2 = _resume("c0", $update2$2);
_update_content("c", _merge$2);

// tags/layout.marko.persisted.mjs
const $open = _var_resume("b3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
const $open_seed = _update_signal("b3");
const $update2$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $open_seed, _patch["g"]);
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
};
const _merge$1 = _resume("b1", $update2$1);
_update_content("b", _merge$1);

// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a11", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $for_update = _update_for_keyed(1, ($p, $l) => $for_content_holes($p, $l));
const $Reports_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $count_seed = _update_signal("a11");
const $await_content__update = (_patch, _live) => {
	if ("a" in _patch) _merge$2(_patch["a"], _live["a"]);
	if ("Ab" in _patch) $for_update(_live, [_patch["Ab"], "M"]);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $Reports_content__update = (_patch, _live) => {
	if ("f" in _patch) _live["f"] = _patch["f"];
	$Reports_content_holes(_patch, _live);
	if ("Ab" in _patch) _update_branch(_patch, _live, "b", $try_content__update);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
_update_content("a2", $Reports_content__update);
const _merge = _resume("a7", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
