// tags/badge.marko
enableBranchesPersisted();

// tags/card.marko
enableBranchesPersisted();

// tags/counter.marko
const $n = /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script$1 = _script_update("d1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
enableBranchesPersisted();

// tags/widget.marko
enableBranchesPersisted();

// template.marko
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
enableBranchesPersisted();

// tags/badge.marko.persisted.mjs
const _merge$4 = _resume("b0", /* @__PURE__ */ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Qb": /*@__PURE__*/ _update_text("b")
}));
_update_content("b", _merge$4);

// tags/card.marko.persisted.mjs
const $_holes$1 = /*@__PURE__*/ _update_scopes({
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Nclass:c": /*@__PURE__*/ _update_attr("c", _attr_class),
	"Qd": /*@__PURE__*/ _update_text("d")
});
const $update2$3 = (_patch, _live) => {
	$_holes$1(_patch, _live);
	if ("a" in _patch) _merge$4(_patch["a"], _live["a"]);
};
const _merge$3 = _resume("c0", $update2$3);
_update_content("c", _merge$3);

// tags/counter.marko.persisted.mjs
const $n = _var_resume("d2", /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c)));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
const $n_seed = _update_signal("d2");
const $update2$2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("c" in _patch) _update_seed(_live, $n_seed, _patch["c"]);
};
const _merge$2 = _resume("d0", $update2$2);
_update_content("d", _merge$2);

// tags/widget.marko.persisted.mjs
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2$1 = (_patch, _live) => {
	$_holes(_patch, _live);
	if ("b" in _patch) _merge$2(_patch["b"], _live["b"]);
};
const _merge$1 = _resume("e0", $update2$1);
_update_content("e", _merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
const $count_seed = _update_signal("a2");
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("l" in _patch) _update_seed(_live, $count_seed, _patch["l"]);
	if ("c" in _patch) _merge$3(_patch["c"], _live["c"]);
	if ("d" in _patch) _merge$1(_patch["d"], _live["d"]);
};
const _merge = _resume("a0", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
