// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!><!>";
const $walks = " Db%l%/&c";
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a2");
_load_ready("_b", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:panel.marko.setup.mjs")));
const $construct = ($scope) => {
	_text($scope.b, $scope.e);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $count_seed, $patch["e"]);
	if ("d" in $patch) _update_load($patch["d"], $live["d"], "b0", $live, 2, "b");
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));

// components/panel.marko.persisted.mjs
const $template = "<section class=panel><button class=tap>tap <!></button><p class=value> </p></section>";
const $walks = "D Db%lD m";
const $n = _var_resume("b2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.g + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.c, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var panel_marko_persisted_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
_static_shells({
	"b0": [$template, $walks],
	"b": [$template, $walks]
});
const $n_seed = _update_signal("b2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $n_seed, $patch["g"]);
	$_holes($patch, $live);
};
_construct("b0", $construct);
const $merge = _resume("b0", $update2);
_update_content("b", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// components/panel.marko
const $template = "<section class=panel><button class=tap>tap <!></button><p class=value> </p></section>";
const $walks = "D Db%lD m";
const $n = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("b1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.g + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.c, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var panel_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// components/v:panel.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
