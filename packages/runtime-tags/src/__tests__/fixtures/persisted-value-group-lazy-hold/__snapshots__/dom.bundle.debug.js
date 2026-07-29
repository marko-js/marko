// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!><!>";
const $walks = " Db%l%/&c";
const $load_Panel_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Panel_setup = /*@__PURE__*/ _load_setup("#text/2", "#childScope/3", /*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.setup.mjs")));
let $load_Panel_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.input_label.mjs")));
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$load_Panel_setup($scope);
	$load_Panel_tag_input_label($scope["#childScope/3"], $scope.$global.label);
	$count($scope, 0);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
_load_ready("ready:__tests__/components/panel.marko", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:panel.marko.setup.mjs")));
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/3" in $patch) _update_load($patch["#childScope/3"], $live["#childScope/3"], "__tests__/components/panel.marko_0_update", $live, "#text/2", "__tests__/components/panel.marko");
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// components/panel.marko.persisted.mjs
const $template = "<section class=panel><button class=tap>tap <!></button><p class=value> </p></section>";
const $walks = "D Db%lD m";
const $n = _var_resume("__tests__/components/panel.marko_0_n/var", /*@__PURE__*/ _let_persisted("n/6", ($scope) => _text($scope["#text/1"], $scope.n)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/2"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var panel_marko_persisted_default = /*@__PURE__*/ _template("__tests__/components/panel.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/components/panel.marko_0_update": [$template, $walks],
	"__tests__/components/panel.marko": [$template, $walks]
});
const $n_seed = _update_signal("__tests__/components/panel.marko_0_n/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	$_holes($patch, $live);
};
_construct("__tests__/components/panel.marko_0_update", $construct);
const $merge = _resume("__tests__/components/panel.marko_0_update", $update2);
_update_content("__tests__/components/panel.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// components/panel.marko
const $template = "<section class=panel><button class=tap>tap <!></button><p class=value> </p></section>";
const $walks = "D Db%lD m";
const $n = /*@__PURE__*/ _let_persisted("n/6", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script_update("__tests__/components/panel.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/2"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var panel_default = /*@__PURE__*/ _template("__tests__/components/panel.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=count>clicked <!></button><!><!><!>";
const $walks = " Db%l%/&c";
const $load_Panel_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Panel_setup = /*@__PURE__*/ _load_setup("#text/2", "#childScope/3", /*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.setup.mjs")));
let $load_Panel_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.input_label.mjs")));
const $count = /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$load_Panel_setup($scope);
	$load_Panel_tag_input_label($scope["#childScope/3"], $scope.$global.label);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// components/v:panel.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
