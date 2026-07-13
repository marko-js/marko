// tags/store.marko
const $value = /*@__PURE__*/ _let_persisted(0, ($scope) => _return($scope, $scope.a));
const $setup__script$3 = _script_refresh("c1", ($scope) => $value($scope, $scope.$.seed));
function $valueChange($scope) {
	return function(next) {
		$value($scope, next + $scope.$.step);
	};
}
_resume("c0", $valueChange);
enableBranchesPersisted();

// tags/widget.marko
const $clicks = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$2 = _script_update("d0", ($scope) => _on($scope.a, "click", function() {
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
const $Dashboard_content__setup__script = _script_update("a4", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.b, $scope.l + 1);
}));
const $Dashboard_content__tally = _var_resume("a3", /*@__PURE__*/ _const_persisted(11, ($scope) => _text($scope.e, $scope.l)));
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/store.marko.update.mjs
const $value_seed = _update_signal("c2");
const $update$3 = (patch, live) => {
	_update_pair(patch, live);
	if ("a" in patch) _update_seed(live, $value_seed, patch["a"]);
};
var store_marko_update_default = _resume("c3", $update$3);

// tags/widget.marko.update.mjs
const $clicks_seed = _update_signal("d1");
const $update$2 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $clicks_seed, patch["g"]);
	_update_scope(patch, live);
};
var widget_marko_update_default = _resume("d2", $update$2);

// tags/layout.marko.update.mjs
const $open_seed = _update_signal("b2");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $open_seed, patch["g"]);
	if ("Dc" in patch) _update_dynamic(patch, live, "Dc", "Ac");
};
var layout_marko_update_default = _resume("b3", $update$1);

// template.marko.update.mjs
const $for_update = _update_for(6, "a5", (branch, args) => _update_scope(args[0], branch));
const $if_update = _update_signal("a6");
const $count_seed = _update_signal("a1");
const $Dashboard_content__update = (patch, live) => {
	_update_pair(patch, live);
	_update_scope(patch, live);
	if ("b" in patch) store_marko_update_default(patch["b"], live["b"]);
	if ("f" in patch) widget_marko_update_default(patch["f"], live["f"]);
	if ("Ag" in patch) $for_update(live, [patch["Ag"], "M"]);
	if ("Dh" in patch) $if_update(live, patch["Dh"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) layout_marko_update_default(patch["c"], live["c"]);
};
_update_content("a7", $Dashboard_content__update);
var template_marko_update_default = _resume("a8", $update);
