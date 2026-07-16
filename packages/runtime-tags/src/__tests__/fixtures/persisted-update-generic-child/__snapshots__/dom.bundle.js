// tags/badge.marko
enableBranchesPersisted();

// tags/panel.marko
enableBranchesPersisted();

// tags/toggle.marko
const $on = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "on" : "off"));
const $setup__script$1 = _script_update("d1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));
enableBranchesPersisted();

// template.marko
const $count = /*@__PURE__*/ _let_persisted(14, ($scope) => _text($scope.b, $scope.o));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.o + 1);
}));
enableBranchesPersisted();

// tags/badge.marko.persisted.mjs
const _merge$3 = _resume("b0", /* @__PURE__ */ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Ntitle:a": /*@__PURE__*/ _update_named_attr("a", "title"),
	"Qb": /*@__PURE__*/ _update_text("b")
}));
_update_content("b", _merge$3);

// tags/panel.marko.persisted.mjs
const _merge$2 = _resume("c0", /* @__PURE__ */ _update_scopes({
	"Nopen:a": /*@__PURE__*/ _update_controllable("a", _attr_details_or_dialog_open_default),
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
}));
_update_content("c", _merge$2);

// tags/toggle.marko.persisted.mjs
const $on = _var_resume("d2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "on" : "off")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));
const $on_seed = _update_signal("d2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $update2$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $on_seed, _patch["g"]);
	$_holes(_patch, _live);
};
const _merge$1 = _resume("d0", $update2$1);
_update_content("d", _merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(14, ($scope) => _text($scope.b, $scope.o)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.o + 1);
}));
const $count_seed = _update_signal("a2");
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("o" in _patch) _update_seed(_live, $count_seed, _patch["o"]);
	if ("c" in _patch) _merge$3(_patch["c"], _live["c"]);
	if ("d" in _patch) _merge$2(_patch["d"], _live["d"]);
	if ("e" in _patch) _merge$1(_patch["e"], _live["e"]);
};
const _merge = _resume("a0", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
