// template.marko.persisted.mjs
const $template = "<button>toggle</button><div> </div><span><!> items</span>";
const $walks = " b D lD%l";
const $input_label__OR__highlight = /*@__PURE__*/ _or(9, ($scope) => _attr_class($scope["#div/1"], $scope.highlight && $scope.input_label));
const $highlight = _var_resume("__tests__/template.marko_0_highlight/var", /*@__PURE__*/ _let_persisted("highlight/8", $input_label__OR__highlight));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$highlight($scope, !$scope.highlight);
}));
function $setup($scope) {
	$highlight($scope, false);
	$setup__script($scope);
}
const $input_label = _var_resume("__tests__/template.marko_0_input_label/var", /*@__PURE__*/ _const_persisted("input_label", ($scope) => {
	_text($scope["#text/2"], $scope.input_label);
	$input_label__OR__highlight($scope);
}));
const $input_count = ($scope, input_count) => _text($scope["#text/3"], input_count);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_count($scope, input.count);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $highlight_seed = _update_signal("__tests__/template.marko_0_highlight/var");
const $input_label_update = _update_signal("__tests__/template.marko_0_input_label/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/3": /*@__PURE__*/ _update_text("#text/3") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("highlight" in _patch) _update_seed(_live, $highlight_seed, _patch["highlight"]);
	if ("input_label" in _patch) $input_label_update(_live, _patch["input_label"]);
	$_holes(_patch, _live);
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2() {
	return patch(_merge);
}

// template.marko
const $template = "<button>toggle</button><div> </div><span><!> items</span>";
const $walks = " b D lD%l";
const $input_label__OR__highlight = /*@__PURE__*/ _or(9, ($scope) => _attr_class($scope["#div/1"], $scope.highlight && $scope.input_label));
const $highlight = /*@__PURE__*/ _let_persisted("highlight/8", $input_label__OR__highlight);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$highlight($scope, !$scope.highlight);
}));
function $setup($scope) {
	$highlight($scope, false);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const_persisted("input_label", ($scope) => {
	_text($scope["#text/2"], $scope.input_label);
	$input_label__OR__highlight($scope);
});
const $input_count = ($scope, input_count) => _text($scope["#text/3"], input_count);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_count($scope, input.count);
};
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
