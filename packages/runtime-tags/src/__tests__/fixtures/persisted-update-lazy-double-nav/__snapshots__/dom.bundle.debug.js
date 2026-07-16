// template.marko.persisted.mjs
const $template = "<h1> </h1><button class=count>clicked <!></button><!><!><!>";
const $walks = "D l Db%l%/&c";
const $load_Panel_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Panel_setup = /*@__PURE__*/ _load_setup("#text/3", "#childScope/4", /*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.setup.mjs")));
let $load_Panel_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.input_label.mjs")));
let $load_Panel_tag_input_warn = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.input_warn.mjs")));
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/2"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$load_Panel_setup($scope);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_label = ($scope, input_label) => $load_Panel_tag_input_label($scope["#childScope/4"], input_label);
const $input_warn = ($scope, input_warn) => $load_Panel_tag_input_warn($scope["#childScope/4"], input_warn);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_label($scope, input.label);
	$input_warn($scope, input.warn);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
_load_ready("ready:__tests__/tags/panel.marko", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:panel.marko.setup.mjs")));
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	$_holes(_patch, _live);
	if ("#childScope/4" in _patch) _update_load(_patch["#childScope/4"], _live["#childScope/4"], "__tests__/tags/panel.marko_0_update");
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/panel.marko.persisted.mjs
const $template = "<button class=panel><!> hit <!></button><!><!>";
const $walks = " D%c%l%c";
const $hits = _var_resume("__tests__/tags/panel.marko_0_hits/var", /*@__PURE__*/ _let_persisted("hits/8", ($scope) => _text($scope["#text/2"], $scope.hits)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$hits($scope, $scope.hits + 1);
}));
function $setup($scope) {
	$hits($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $if = /*@__PURE__*/ _if("#text/3", "<p class=warn>heads up</p>", "b");
const $input_warn = ($scope, input_warn) => {
	if (!updating) $if($scope, input_warn ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_warn($scope, input.warn);
};
var panel_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template, $walks, $setup, $input);
const $hits_seed = _update_signal("__tests__/tags/panel.marko_0_hits/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("hits" in _patch) _update_seed(_live, $hits_seed, _patch["hits"]);
	$_holes(_patch, _live);
	if ("ConditionalRenderer:#text/3" in _patch) _update_if(_patch, _live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3");
};
const _merge = _resume("__tests__/tags/panel.marko_0_update", $update2);
_update_content("__tests__/tags/panel.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/panel.marko
const $template = "<button class=panel><!> hit <!></button><!><!>";
const $walks = " D%c%l%c";
const $hits = /*@__PURE__*/ _let_persisted("hits/8", ($scope) => _text($scope["#text/2"], $scope.hits));
const $setup__script = _script_update("__tests__/tags/panel.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$hits($scope, $scope.hits + 1);
}));
function $setup($scope) {
	$hits($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $if = /*@__PURE__*/ _if("#text/3", "<p class=warn>heads up</p>", "b");
const $input_warn = ($scope, input_warn) => {
	if (!updating) $if($scope, input_warn ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_warn($scope, input.warn);
};
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<h1> </h1><button class=count>clicked <!></button><!><!><!>";
const $walks = "D l Db%l%/&c";
const $load_Panel_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Panel_setup = /*@__PURE__*/ _load_setup("#text/3", "#childScope/4", /*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.setup.mjs")));
let $load_Panel_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.input_label.mjs")));
let $load_Panel_tag_input_warn = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Panel_trigger(() => import("./v:panel.marko.input_warn.mjs")));
const $count = /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/2"], $scope.count));
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
const $input_warn = ($scope, input_warn) => $load_Panel_tag_input_warn($scope["#childScope/4"], input_warn);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_label($scope, input.label);
	$input_warn($scope, input.warn);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/v:panel.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
