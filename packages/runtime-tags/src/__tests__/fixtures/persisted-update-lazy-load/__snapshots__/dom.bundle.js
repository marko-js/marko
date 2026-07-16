// template.marko
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
const $count = _var_resume("a3", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
const $count_seed = _update_signal("a3");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("k" in _patch) _update_seed(_live, $count_seed, _patch["k"]);
	if ("h" in _patch) _live["h"] = _patch["h"];
	if ("i" in _patch) _live["i"] = _patch["i"];
	$_holes(_patch, _live);
	if ("Dd" in _patch || "Ad" in _patch) _update_dynamic(_patch, _live, "Dd", "Ad");
};
const _merge = _resume("a1", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}

// tags/panel.marko.persisted.mjs
const $template = "<button class=panel><!> hit <!></button>";
const $walks = " D%c%l";
const $hits = _var_resume("b2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$hits($scope, $scope.g + 1);
}));
function $setup($scope) {
	$hits($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var panel_marko_persisted_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
const $hits_seed = _update_signal("b2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $hits_seed, _patch["g"]);
	$_holes(_patch, _live);
};
const _merge = _resume("b0", $update2);
_update_content("b", _merge);
function _patch2() {
	return patch(_merge);
}

// tags/panel.marko
const $template = "<button class=panel><!> hit <!></button>";
const $walks = " D%c%l";
const $hits = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script_update("b1", ($scope) => _on($scope.a, "click", function() {
	$hits($scope, $scope.g + 1);
}));
function $setup($scope) {
	$hits($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
enableBranchesPersisted();
var panel_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
