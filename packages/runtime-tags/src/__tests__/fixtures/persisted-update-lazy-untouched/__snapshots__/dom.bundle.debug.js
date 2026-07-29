// template.marko.persisted.mjs
const $template = "<h1> </h1><button class=count>clicked <!></button><!><!>";
const $walks = "D l Db%l%c";
const Panel = /*@__PURE__*/ _load_template("__tests__/tags/panel.marko", () => import("./panel.mjs").then((mod) => mod.default));
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/2"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
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
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
_update_loader("__tests__/tags/panel.marko", () => import("./v:panel.marko.setup.mjs").then(() => readyPersisted("ready:__tests__/tags/panel.marko")));
const $construct = ($scope) => {
	_text($scope["#text/2"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_show" in $patch) $live["input_show"] = $patch["input_show"];
	if ("input_label" in $patch) $live["input_label"] = $patch["input_label"];
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/3" in $patch || "BranchScopes:#text/3" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3");
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/panel.marko.persisted.mjs
const $template = "<button class=panel><!> hit <!></button>";
const $walks = " D%c%l";
const $hits = _var_resume("__tests__/tags/panel.marko_0_hits/var", /*@__PURE__*/ _let_persisted("hits/6", ($scope) => _text($scope["#text/2"], $scope.hits)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$hits($scope, $scope.hits + 1);
}));
function $setup($scope) {
	$hits($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var panel_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/tags/panel.marko_0_update": [$template, $walks],
	"__tests__/tags/panel.marko": [$template, $walks]
});
const $hits_seed = _update_signal("__tests__/tags/panel.marko_0_hits/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $construct = ($scope) => {
	_text($scope["#text/2"], $scope.hits);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("hits" in $patch) _update_seed($live, $hits_seed, $patch["hits"]);
	$_holes($patch, $live);
};
_construct("__tests__/tags/panel.marko_0_update", $construct);
const $merge = _resume("__tests__/tags/panel.marko_0_update", $update2);
_update_content("__tests__/tags/panel.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/v:panel.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
