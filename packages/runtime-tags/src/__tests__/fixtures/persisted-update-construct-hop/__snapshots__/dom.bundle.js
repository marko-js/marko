// tags/store.marko.persisted.mjs
const $value = _var_resume("c3", /*@__PURE__*/ _let_persisted(0, ($scope) => _return($scope, $scope.a)));
const $setup__script$3 = _script_shared(($scope) => $value($scope, $scope.$.seed));
const $value_seed = _update_signal("c3");
const $update2$3 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("a" in $patch) _update_seed($live, $value_seed, $patch["a"]);
};
const $merge$3 = _resume("c1", $update2$3);
_update_content("c", $merge$3);

// tags/widget.marko.persisted.mjs
const $clicks = _var_resume("d2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g)));
const $setup__script$2 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));
const $clicks_seed = _update_signal("d2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $clicks_seed, $patch["g"]);
	$_holes($patch, $live);
};
const $merge$2 = _resume("d0", $update2$2);
_update_content("d", $merge$2);

// tags/layout.marko.persisted.mjs
const $open = _var_resume("b3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
const $open_seed = _update_signal("b3");
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $open_seed, $patch["g"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $Dashboard_content__setup__script = _script_shared(($scope) => _on($scope.d, "click", function() {
	_var_change($scope.b, $scope.l + 1);
}));
const $Dashboard_content__tally = _var_resume("a3", /*@__PURE__*/ _const_persisted(11, ($scope) => _text($scope.e, $scope.l)));
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $Dashboard_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a8");
const $Dashboard_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$Dashboard_content_holes($patch, $live);
	if ("b" in $patch) $merge$3($patch["b"], $live["b"]);
	if ("f" in $patch) $merge$2($patch["f"], $live["f"]);
	if ("Dg" in $patch) _update_region("g")($patch, $live);
	if ("Dh" in $patch) _update_region("h")($patch, $live);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
_update_content("a4", $Dashboard_content__update);
const $noop_update = () => {};
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/store.marko
const $value = /*@__PURE__*/ _let_persisted(0, ($scope) => _return($scope, $scope.a));
const $setup__script$3 = _script_refresh("c2", ($scope) => $value($scope, $scope.$.seed));
function $valueChange($scope) {
	return function(next) {
		$value($scope, next + $scope.$.step);
	};
}
_resume("c0", $valueChange);

// tags/widget.marko
const $clicks = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$2 = _script_update("d1", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("b2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $Dashboard_content__setup__script = _script_update("a5", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.b, $scope.l + 1);
}));
const $Dashboard_content__tally = _var_resume("a3", /*@__PURE__*/ _const_persisted(11, ($scope) => _text($scope.e, $scope.l)));
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
