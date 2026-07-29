// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!><!>";
const $walks = " Db%l%b%c";
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(3);
const $Comp = _var_resume("a5", /*@__PURE__*/ _let_persisted(5, ($scope) => {
	$dynamicTag($scope, $scope.f, () => ({ label: $scope.$.a }));
	$dynamicTag2($scope, $scope.f, () => ({ label: $scope.$.b }));
}));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a4");
const $Comp_seed = _update_signal("a5");
const $construct = ($scope) => {
	_text($scope.b, $scope.e);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $count_seed, $patch["e"]);
	if ("f" in $patch) _update_seed($live, $Comp_seed, $patch["f"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
	if ("Dd" in $patch || "Ad" in $patch) _update_dynamic($patch, $live, "Dd", "Ad");
};
_construct("a2", $construct);
_update_loader("b", () => import("./sheet.marko.persisted.mjs"));
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));

// components/sheet.marko.persisted.mjs
const $template = "<section><button class=tap>tap <!></button><p class=value> </p></section>";
const $walks = " D Db%lD m";
const $n = _var_resume("b2", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.c, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$n($scope, $scope.h + 1);
}));
function $setup($scope) {
	_attr_class($scope.a, SHEET_CLASSES);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.d, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var sheet_marko_persisted_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
_static_shells({
	"b0": [$template, $walks],
	"b": [$template, $walks]
});
const $n_seed = _update_signal("b2");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Qd": /*@__PURE__*/ _update_text("d")
});
const $construct = ($scope) => {
	_text($scope.c, $scope.h);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $n_seed, $patch["h"]);
	$_holes($patch, $live);
};
_construct("b0", $construct);
const $merge = _resume("b0", $update2);
_update_content("b", $merge, $construct);
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
const $n = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script_update("b1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, $scope.h + 1);
}));
