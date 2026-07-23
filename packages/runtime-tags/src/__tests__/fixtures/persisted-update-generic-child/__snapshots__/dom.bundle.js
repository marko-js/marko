// tags/badge.marko.persisted.mjs
const $update2$2 = () => {};
const $merge$3 = _resume("b0", $update2$2);
_update_content("b", $merge$3);

// tags/panel.marko.persisted.mjs
const $merge$2 = _resume("c0", /* @__PURE__ */ _update_scopes({
	"Nopen:a": /*@__PURE__*/ _update_controllable("a", _update_details_or_dialog_open),
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
}));
_update_content("c", $merge$2);

// tags/toggle.marko.persisted.mjs
const $on = _var_resume("d2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "on" : "off")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));
const $on_seed = _update_signal("d2");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qb": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("b")),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $on_seed, $patch["g"]);
	$_holes($patch, $live);
};
const $merge$1 = _resume("d0", $update2$1);
_update_content("d", $merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(17, ($scope) => _text($scope.b, $scope.r)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.r + 1);
}));
const $count_seed = _update_signal("a2");
const $construct = ($scope) => {
	_text($scope.b, $scope.r);
	_construct_child($scope, "e", "c0");
	_construct_child($scope, "g", "d0");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("r" in $patch) _update_seed($live, $count_seed, $patch["r"]);
	if ("Dd" in $patch) _update_region("d")($patch, $live);
	if ("e" in $patch) $merge$2($patch["e"], $live["e"]);
	if ("g" in $patch) $merge$1($patch["g"], $live["g"]);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/toggle.marko
const $on = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "on" : "off"));
const $setup__script$1 = _script_update("d1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));

// template.marko
const $count = /*@__PURE__*/ _let_persisted(17, ($scope) => _text($scope.b, $scope.r));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.r + 1);
}));
