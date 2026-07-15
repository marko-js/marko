// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("input_show" in _patch) _live["input_show"] = _patch["input_show"];
	if ("input_label" in _patch) _live["input_label"] = _patch["input_label"];
	_update_scope(_patch, _live);
	if ("ConditionalRenderer:#text/3" in _patch || "BranchScopes:#text/3" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3");
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// tags/panel.marko.update.mjs
const $hits_seed = _update_signal("__tests__/tags/panel.marko_0_hits/var");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("hits" in _patch) _update_seed(_live, $hits_seed, _patch["hits"]);
	_update_scope(_patch, _live);
};
const _merge = _resume("__tests__/tags/panel.marko_0_update", $update);
_update_content("__tests__/tags/panel.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// tags/panel.marko
const $template = "<button class=panel><!> hit <!></button>";
const $walks = " D%c%l";
const $hits = /*@__PURE__*/ _let_persisted("hits/6", ($scope) => _text($scope["#text/2"], $scope.hits));
const $setup__script = _script_update("__tests__/tags/panel.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$hits($scope, $scope.hits + 1);
}));
function $setup($scope) {
	$hits($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
enableBranchesPersisted();
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<h1> </h1><button class=count>clicked <!></button><!><!>";
const $walks = "D l Db%l%c";
const Panel = /*@__PURE__*/ _load_template("__tests__/tags/panel.marko", () => import("./panel.mjs").then((mod) => mod.default));
const $count = /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_show__OR__input_label = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.input_show ? Panel : null, () => ({ label: $scope.input_label })));
const $input_show = /*@__PURE__*/ _const_persisted("input_show", $input_show__OR__input_label);
const $input_label = /*@__PURE__*/ _const_persisted("input_label", $input_show__OR__input_label);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
