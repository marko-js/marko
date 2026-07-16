// tags/store.marko
const $value = /*@__PURE__*/ _let_persisted(0, ($scope) => _return($scope, $scope.a));
const $setup__script$3 = _script_refresh("c2", ($scope) => $value($scope, $scope.$.seed));
function $valueChange($scope) {
	return function(next) {
		$value($scope, next + $scope.$.step);
	};
}
_resume("c0", $valueChange);
enableBranchesPersisted();

// tags/widget.marko
const $clicks = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$2 = _script_update("d1", ($scope) => _on($scope.a, "click", function() {
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
const $Dashboard_content__setup__script = _script_update("a8", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.b, $scope.l + 1);
}));
const $Dashboard_content__tally = _var_resume("a6", /*@__PURE__*/ _const_persisted(11, ($scope) => _text($scope.e, $scope.l)));
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a9", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/store.marko.persisted.mjs
const $value = _var_resume("c3", /*@__PURE__*/ _let_persisted(0, ($scope) => _return($scope, $scope.a)));
const $setup__script$3 = _script_shared(($scope) => $value($scope, $scope.$.seed));
const $value_seed = _update_signal("c3");
const $update2$3 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("a" in _patch) _update_seed(_live, $value_seed, _patch["a"]);
};
const _merge$3 = _resume("c1", $update2$3);
_update_content("c", _merge$3);

// tags/widget.marko.persisted.mjs
const $clicks = _var_resume("d2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g)));
const $setup__script$2 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));
const $clicks_seed = _update_signal("d2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $update2$2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $clicks_seed, _patch["g"]);
	$_holes(_patch, _live);
};
const _merge$2 = _resume("d0", $update2$2);
_update_content("d", _merge$2);

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
const $Dashboard_content__setup__script = _script_shared(($scope) => _on($scope.d, "click", function() {
	_var_change($scope.b, $scope.l + 1);
}));
const $Dashboard_content__tally = _var_resume("a6", /*@__PURE__*/ _const_persisted(11, ($scope) => _text($scope.e, $scope.l)));
const $count = _var_resume("a10", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $Dashboard_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(6, ($p, $l) => $for_content_holes($p, $l));
const $count_seed = _update_signal("a10");
const $Dashboard_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	$Dashboard_content_holes(_patch, _live);
	if ("b" in _patch) _merge$3(_patch["b"], _live["b"]);
	if ("f" in _patch) _merge$2(_patch["f"], _live["f"]);
	if ("Ag" in _patch) $for_update(_live, [_patch["Ag"], "M"]);
	if ("Dh" in _patch) _update_if(_patch, _live, "Dh", "Ah");
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
_update_content("a2", $Dashboard_content__update);
const _merge = _resume("a5", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
