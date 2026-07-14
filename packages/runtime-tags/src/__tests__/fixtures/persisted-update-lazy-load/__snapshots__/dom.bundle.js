// template.marko
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("k" in patch) _update_seed(live, $count_seed, patch["k"]);
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	_update_scope(patch, live);
	if ("Dd" in patch || "Ad" in patch) _update_dynamic(patch, live, "Dd", "Ad");
};
const _merge = _resume("a3", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// tags/panel.marko.update.mjs
const $hits_seed = _update_signal("b1");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $hits_seed, patch["g"]);
	_update_scope(patch, live);
};
const _merge = _resume("b2", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// tags/panel.marko
const $template = "<button class=panel><!> hit <!></button>";
const $walks = " D%c%l";
const $hits = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script_update("b0", ($scope) => _on($scope.a, "click", function() {
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
