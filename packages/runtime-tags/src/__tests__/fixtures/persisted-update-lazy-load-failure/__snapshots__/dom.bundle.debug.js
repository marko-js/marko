// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
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
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Detail = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "detail" ? $scope.Detail : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Detail);
const $Detail = /*@__PURE__*/ _const_persisted("Detail", $Home__OR__Detail);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Detail($scope, { content: $Detail_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $Detail_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
_load_ready("ready:__tests__/tags/gadget.marko", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:gadget.marko.setup.mjs")));
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Detail_content__update = ($patch, $live) => {
	$Detail_content_holes($patch, $live);
	if ("#childScope/2" in $patch) _update_load($patch["#childScope/2"], $live["#childScope/2"], "__tests__/tags/gadget.marko_0_update", $live, "#text/1", "__tests__/tags/gadget.marko");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
_update_content("__tests__/template.marko_2_content", $Detail_content__update);
const $noop_update = () => {};
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// chunk-guard.js
const assertChunkLoadable = () => {
	if (typeof window !== "undefined" && window.__MARKO_LAZY_CHUNK_GONE__) {
		throw new Error("lazy chunk unavailable");
	}
};

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
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("taps" in $patch) _update_seed($live, $taps_seed, $patch["taps"]);
	$_holes($patch, $live);
};
const $merge = _resume("__tests__/tags/gadget.marko_0_update", $update2);
_update_content("__tests__/tags/gadget.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/gadget.marko
const $template = "<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>";
const $walks = "E l Db%m";
assertChunkLoadable();
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

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
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
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Detail = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "detail" ? $scope.Detail : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Detail);
const $Detail = /*@__PURE__*/ _const_persisted("Detail", $Home__OR__Detail);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
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
