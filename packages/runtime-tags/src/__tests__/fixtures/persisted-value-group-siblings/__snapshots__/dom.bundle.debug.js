// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!><!>";
const $walks = " Db%l%b%c";
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $Comp = _var_resume("__tests__/template.marko_0_Comp/var", /*@__PURE__*/ _let_persisted("Comp/5", ($scope) => {
	$dynamicTag($scope, $scope.Comp, () => ({ label: $scope.$global.a }));
	$dynamicTag2($scope, $scope.Comp, () => ({ label: $scope.$global.b }));
}));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$Comp($scope, sheet_default);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Comp_seed = _update_signal("__tests__/template.marko_0_Comp/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("Comp" in $patch) _update_seed($live, $Comp_seed, $patch["Comp"]);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
	if ("ConditionalRenderer:#text/3" in $patch || "BranchScopes:#text/3" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3");
};
_construct("__tests__/template.marko_0_update", $construct);
_update_loader("__tests__/components/sheet.marko", () => import("./sheet.marko.persisted.mjs"));
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// components/sheet.marko.persisted.mjs
const $template = "<section><button class=tap>tap <!></button><p class=value> </p></section>";
const $walks = " D Db%lD m";
const $n = _var_resume("__tests__/components/sheet.marko_0_n/var", /*@__PURE__*/ _let_persisted("n/7", ($scope) => _text($scope["#text/2"], $scope.n)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	_attr_class($scope["#section/0"], SHEET_CLASSES);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/3"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var sheet_marko_persisted_default = /*@__PURE__*/ _template("__tests__/components/sheet.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/components/sheet.marko_0_update": [$template, $walks],
	"__tests__/components/sheet.marko": [$template, $walks]
});
const $n_seed = _update_signal("__tests__/components/sheet.marko_0_n/var");
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:class:#section/0": /*@__PURE__*/ _update_attr("#section/0", _attr_class),
	"PatchHole:#text/3": /*@__PURE__*/ _update_text("#text/3")
});
const $construct = ($scope) => {
	_text($scope["#text/2"], $scope.n);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	$_holes($patch, $live);
};
_construct("__tests__/components/sheet.marko_0_update", $construct);
const $merge = _resume("__tests__/components/sheet.marko_0_update", $update2);
_update_content("__tests__/components/sheet.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// components/classes.js
const SHEET_CLASSES = [
	"sheet",
	"sheet--wide",
	"sheet--persisted"
];

// components/sheet.marko
const $template = "<section><button class=tap>tap <!></button><p class=value> </p></section>";
const $walks = " D Db%lD m";
const $n = /*@__PURE__*/ _let_persisted("n/7", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script_update("__tests__/components/sheet.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	_attr_class($scope["#section/0"], SHEET_CLASSES);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/3"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var sheet_default = /*@__PURE__*/ _template("__tests__/components/sheet.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=count>clicked <!></button><!><!><!>";
const $walks = " Db%l%b%c";
const $count = /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $Comp = /*@__PURE__*/ _let_persisted("Comp/5", ($scope) => {
	$dynamicTag($scope, $scope.Comp, () => ({ label: $scope.$global.a }));
	$dynamicTag2($scope, $scope.Comp, () => ({ label: $scope.$global.b }));
});
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$Comp($scope, sheet_default);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
