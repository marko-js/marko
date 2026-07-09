// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
_load_ready("ready:__tests__/tags/panel.marko", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:panel.marko.setup.mjs")));
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	_update_scope(patch, live);
	if ("#childScope/4" in patch) _update_load(patch["#childScope/4"], live["#childScope/4"], "__tests__/tags/panel.marko_0_update");
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// tags/panel.marko.update.mjs
const $hits_seed = _update_signal("__tests__/tags/panel.marko_0_hits/var");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("hits" in patch) _update_seed(live, $hits_seed, patch["hits"]);
	_update_scope(patch, live);
};
var panel_marko_update_default = _resume("__tests__/tags/panel.marko_0_update", $update);

// tags/panel.marko
const $template = "<button class=panel><!> hit <!></button>";
const $walks = " D%c%l";
const $hits = /*@__PURE__*/ _let("hits/6", ($scope) => _text($scope["#text/2"], $scope.hits));
const $setup__script = _script_update("__tests__/tags/panel.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$hits($scope, $scope.hits + 1);
}));
function $setup($scope) {
	$hits($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
enableBranches();
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<h1> </h1><button class=count>clicked <!></button><!><!><!>";
const $walks = "D l Db%l%/&c";
const $load_Panel_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Panel_setup = /*@__PURE__*/ _load_setup("#text/3", "#childScope/4", /*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.setup.mjs")));
let $load_Panel_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.input_label.mjs")));
const $count = /*@__PURE__*/ _let("count/9", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$load_Panel_setup($scope);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_label = ($scope, input_label) => $load_Panel_tag_input_label($scope["#childScope/4"], input_label);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_label($scope, input.label);
};
enableBranches();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/v:panel.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
