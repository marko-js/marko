// template.marko
const $count = /*@__PURE__*/ _let(9, ($scope) => _text($scope.c, $scope.j));
const $setup__script = _script_update("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.j + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
_load_ready("_b", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:panel.marko.setup.mjs")));
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("j" in patch) _update_seed(live, $count_seed, patch["j"]);
	_update_scope(patch, live);
	if ("e" in patch) _update_load(patch["e"], live["e"], "b1");
};
var template_marko_update_default = _resume("a2", $update);

// tags/panel.marko.update.mjs
const $hits_seed = _update_signal("b2");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $hits_seed, patch["g"]);
	_update_scope(patch, live);
};
var panel_marko_update_default = _resume("b1", $update);

// tags/panel.marko
const $template = "<button class=panel><!> hit <!></button>";
const $walks = " D%c%l";
const $hits = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script_update("b0", ($scope) => _on($scope.a, "click", function() {
	$hits($scope, $scope.g + 1);
}));
function $setup($scope) {
	$hits($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
enableBranches();
var panel_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// tags/v:panel.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
