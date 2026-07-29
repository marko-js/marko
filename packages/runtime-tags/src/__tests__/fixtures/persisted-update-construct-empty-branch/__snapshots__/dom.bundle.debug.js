// tags/layout.marko.persisted.mjs
const $template$1 = "<section class=shell><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);
_static_shells({
	"__tests__/tags/layout.marko_0_update": [$template$1, "D%l"],
	"__tests__/tags/layout.marko": [$template$1, "D%l"]
});
const $update2$1 = ($patch, $live) => {
	if ("ConditionalRenderer:#text/0" in $patch || "BranchScopes:#text/0" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $Panel_content__walks = " b%bD l", $Panel_content__template = "<button class=flip>flip</button><!><span class=badge> </span>", $if_content__walks = "Db%l", $if_content__template = "<p class=msg>msg <!></p>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $About_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", "<p class=about>about</p>");
const $if_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._._.count), ($scope) => $scope._._);
const $if_content__setup = $if_content__count;
const $Panel_content__if = /*@__PURE__*/ _if("#text/1", $if_content__template, $if_content__walks, $if_content__setup);
const $Panel_content__on = _var_resume("__tests__/template.marko_1_on/var", /*@__PURE__*/ _let_persisted("on/3", ($scope) => $Panel_content__if($scope, $scope.on ? 0 : 1)));
const $Panel_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$Panel_content__on($scope, !$scope.on);
}));
const $Panel_content__setup = ($scope) => {
	_text($scope["#text/2"], getBadge?.());
	$Panel_content__on($scope, $scope.$global.on);
	$Panel_content__setup__script($scope);
};
const $Panel_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", $Panel_content__template, $Panel_content__walks, $Panel_content__setup);
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
}));
const $Panel__OR__About = /*@__PURE__*/ _or(7, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "panel" ? $scope.Panel : $scope.About));
const $Panel = /*@__PURE__*/ _const_persisted("Panel", $Panel__OR__About);
const $About = /*@__PURE__*/ _const_persisted("About", $Panel__OR__About);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Panel($scope, { content: $Panel_content($scope) });
	if (!updating) $About($scope, { content: $About_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_3_update": ["", ""],
	"__tests__/template.marko_3_content": ["", ""],
	"__tests__/template.marko_2_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_2_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_update": [$Panel_content__template, $Panel_content__walks],
	"__tests__/template.marko_1_content": [$Panel_content__template, $Panel_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $on_seed = _update_signal("__tests__/template.marko_1_on/var");
const $Panel_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_content__construct = ($scope) => {
	_text($scope["#text/0"], $scope._._.count);
	_construct_closure($scope, $scope._._, $if_content__count);
};
const $Panel_content__construct = ($scope) => {
	_construct_effect($scope, $Panel_content__setup__script);
	if ("ConditionalRenderer:#text/1" in $scope) _update_if($scope, $scope, "ConditionalRenderer:#text/1", "BranchScopes:#text/1", 0, ["__tests__/template.marko_2_update", "__tests__/template.marko_3_update"]);
};
const $Panel_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("on" in $patch) _update_seed($live, $on_seed, $patch["on"]);
	$Panel_content_holes($patch, $live);
	if ("BranchScopes:#text/1" in $patch) _update_if_state($patch, $live, "ConditionalRenderer:#text/1", "BranchScopes:#text/1", [0, 0]);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_child($scope, "#childScope/2", "__tests__/tags/layout.marko_0_update");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/2" in $patch) $merge$1($patch["#childScope/2"], $live["#childScope/2"]);
};
_construct("__tests__/template.marko_2_update", $if_content__construct);
_construct("__tests__/template.marko_1_update", $Panel_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_4_content", $noop_update);
_update_content("__tests__/template.marko_3_update", $noop_update);
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_content", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const getBadge = typeof window === "undefined" ? () => "beta" : undefined;

// tags/layout.marko
const $template$1 = "<section class=shell><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $About_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", "<p class=about>about</p>");
const $if_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._._.count), ($scope) => $scope._._);
const $if_content__setup = $if_content__count;
const $Panel_content__if = /*@__PURE__*/ _if("#text/1", "<p class=msg>msg <!></p>", "Db%", $if_content__setup);
const $Panel_content__on = /*@__PURE__*/ _let_persisted("on/3", ($scope) => $Panel_content__if($scope, $scope.on ? 0 : 1));
const $Panel_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Panel_content__on($scope, !$scope.on);
}));
const $Panel_content__setup = ($scope) => {
	_text($scope["#text/2"], getBadge?.());
	$Panel_content__on($scope, $scope.$global.on);
	$Panel_content__setup__script($scope);
};
const $Panel_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<button class=flip>flip</button><!><span class=badge> </span>", " b%bD ", $Panel_content__setup);
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = /*@__PURE__*/ _let_persisted("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $Panel__OR__About = /*@__PURE__*/ _or(7, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "panel" ? $scope.Panel : $scope.About));
const $Panel = /*@__PURE__*/ _const_persisted("Panel", $Panel__OR__About);
const $About = /*@__PURE__*/ _const_persisted("About", $Panel__OR__About);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Panel($scope, { content: $Panel_content($scope) });
	if (!updating) $About($scope, { content: $About_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
