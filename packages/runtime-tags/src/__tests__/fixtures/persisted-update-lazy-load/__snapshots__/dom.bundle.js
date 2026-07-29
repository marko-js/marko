// template.marko.persisted.mjs
const $template = "<h1> </h1><button class=count>clicked <!></button><!><!>";
const $walks = "D l Db%l%c";
const $count = _var_resume("a3", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
_static_shells({
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a3");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
_update_loader("b", () => import("./v:panel.marko.setup.mjs").then(() => readyPersisted("_b")));
const $construct = ($scope) => {
	_text($scope.c, $scope.k);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("k" in $patch) _update_seed($live, $count_seed, $patch["k"]);
	if ("h" in $patch) $live["h"] = $patch["h"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	$_holes($patch, $live);
	if ("Dd" in $patch || "Ad" in $patch) _update_dynamic($patch, $live, "Dd", "Ad");
};
_construct("a1", $construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));

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
_static_shells({
	"b0": [$template, $walks],
	"b": [$template, $walks]
});
const $hits_seed = _update_signal("b2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $construct = ($scope) => {
	_text($scope.c, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $hits_seed, $patch["g"]);
	$_holes($patch, $live);
};
_construct("b0", $construct);
const $merge = _resume("b0", $update2);
_update_content("b", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
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
var panel_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
