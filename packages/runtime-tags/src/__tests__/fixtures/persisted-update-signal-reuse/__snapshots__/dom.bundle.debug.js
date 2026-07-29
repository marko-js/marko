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
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $highlight_seed = _update_signal("__tests__/template.marko_0_highlight/var");
const $input_label_update = _update_signal("__tests__/template.marko_0_input_label/var");
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:class:#div/1": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_attr("#div/1", _attr_class)),
	"PatchHole:#text/3": /*@__PURE__*/ _update_text("#text/3")
});
const $construct = ($scope) => {
	_text($scope["#text/2"], $scope.input_label);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("highlight" in $patch) _update_seed($live, $highlight_seed, $patch["highlight"]);
	if ("input_label" in $patch) $input_label_update($live, $patch["input_label"]);
	$_holes($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
