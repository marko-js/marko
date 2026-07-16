// tags/layout.marko.persisted.mjs
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = _var_resume("__tests__/tags/layout.marko_0_open/var", /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input);
const $open_seed = _update_signal("__tests__/tags/layout.marko_0_open/var");
const $update2$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("open" in _patch) _update_seed(_live, $open_seed, _patch["open"]);
	if ("ConditionalRenderer:#text/2" in _patch || "BranchScopes:#text/2" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
const _merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", _merge$1);
function _patch2$1(_fail) {
	return patch(_merge$1, _fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $load_Gadget_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Gadget_setup = /*@__PURE__*/ _load_setup("#text/1", "#childScope/2", /*@__PURE__*/ $load_Gadget_trigger(() => import("./v:gadget.marko.setup.mjs")));
let $load_Gadget_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Gadget_trigger(() => import("./v:gadget.marko.input_label.mjs")));
const $Detail_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope.$global.title);
	$load_Gadget_setup($scope);
	$load_Gadget_tag_input_label($scope["#childScope/2"], $scope.$global.label);
};
const $Detail_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<h2 class=title> </h2><!><!><!>", "D l%/&c", $Detail_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $Home__OR__Detail = /*@__PURE__*/ _or(6, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "detail" ? $scope.Detail : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Detail);
const $Detail = /*@__PURE__*/ _const_persisted("Detail", $Home__OR__Detail);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Detail($scope, { content: $Detail_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $Detail_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
_load_ready("ready:__tests__/tags/gadget.marko", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:gadget.marko.setup.mjs")));
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Detail_content__update = (_patch, _live) => {
	$Detail_content_holes(_patch, _live);
	if ("#childScope/2" in _patch) _update_load(_patch["#childScope/2"], _live["#childScope/2"], "__tests__/tags/gadget.marko_0_update");
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("#childScope/2" in _patch) _merge$1(_patch["#childScope/2"], _live["#childScope/2"]);
};
_update_content("__tests__/template.marko_2_content", $Detail_content__update);
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/gadget.marko.persisted.mjs
const $template = "<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>";
const $walks = "E l Db%m";
const $taps = _var_resume("__tests__/tags/gadget.marko_0_taps/var", /*@__PURE__*/ _let_persisted("taps/6", ($scope) => _text($scope["#text/2"], $scope.taps)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$taps($scope, $scope.taps + 1);
}));
function $setup($scope) {
	$taps($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var gadget_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/gadget.marko", $template, $walks, $setup, $input);
const $taps_seed = _update_signal("__tests__/tags/gadget.marko_0_taps/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("taps" in _patch) _update_seed(_live, $taps_seed, _patch["taps"]);
	$_holes(_patch, _live);
};
const _merge = _resume("__tests__/tags/gadget.marko_0_update", $update2);
_update_content("__tests__/tags/gadget.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/gadget.marko
const $template = "<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>";
const $walks = "E l Db%m";
const $taps = /*@__PURE__*/ _let_persisted("taps/6", ($scope) => _text($scope["#text/2"], $scope.taps));
const $setup__script = _script_update("__tests__/tags/gadget.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$taps($scope, $scope.taps + 1);
}));
function $setup($scope) {
	$taps($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var gadget_default = /*@__PURE__*/ _template("__tests__/tags/gadget.marko", $template, $walks, $setup, $input);

// tags/layout.marko
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand"));
const $setup__script$1 = _script_update("__tests__/tags/layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $load_Gadget_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Gadget_setup = /*@__PURE__*/ _load_setup("#text/1", "#childScope/2", /*@__PURE__*/ $load_Gadget_trigger(() => import("./v:gadget.marko.setup.mjs")));
let $load_Gadget_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Gadget_trigger(() => import("./v:gadget.marko.input_label.mjs")));
const $Detail_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope.$global.title);
	$load_Gadget_setup($scope);
	$load_Gadget_tag_input_label($scope["#childScope/2"], $scope.$global.label);
};
const $Detail_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<h2 class=title> </h2><!><!><!>", "D l%/&c", $Detail_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $Home__OR__Detail = /*@__PURE__*/ _or(6, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "detail" ? $scope.Detail : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Detail);
const $Detail = /*@__PURE__*/ _const_persisted("Detail", $Home__OR__Detail);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Detail($scope, { content: $Detail_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/v:gadget.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
