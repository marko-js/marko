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
const $Panel_content__walks = " Db%lD l", $Panel_content__template = "<div class=box>panel <!></div><span class=note> </span>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $About_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=about>about</p>");
const $Panel_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/1"], $scope._.count));
const $Panel_content__setup__script = _script_shared(($scope) => _el_read($scope["#div/0"]).dataset.runs = String(+(_el_read($scope["#div/0"]).dataset.runs || 0) + 1));
const $Panel_content__setup = ($scope) => {
	$Panel_content__count($scope);
	_text($scope["#text/2"], getNote?.());
	$Panel_content__setup__script($scope);
};
const $Panel_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", $Panel_content__template, $Panel_content__walks, $Panel_content__setup);
const $count__closure = /*@__PURE__*/ _closure($Panel_content__count);
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
	"__tests__/template.marko_1_update": [$Panel_content__template, $Panel_content__walks],
	"__tests__/template.marko_1_content": [$Panel_content__template, $Panel_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $Panel_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Panel_content__construct = ($scope) => {
	_text($scope["#text/1"], $scope._.count);
	_construct_closure($scope, $scope._, $Panel_content__count);
	_construct_effect($scope, $Panel_content__setup__script);
};
const $Panel_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$Panel_content_holes($patch, $live);
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
_construct("__tests__/template.marko_1_update", $Panel_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
_update_content("__tests__/template.marko_1_content", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const getNote = typeof window === "undefined" ? () => "fresh" : undefined;

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
const $About_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=about>about</p>");
const $Panel_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/1"], $scope._.count));
const $Panel_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _el_read($scope["#div/0"]).dataset.runs = String(+(_el_read($scope["#div/0"]).dataset.runs || 0) + 1));
const $Panel_content__setup = ($scope) => {
	$Panel_content__count($scope);
	_text($scope["#text/2"], getNote?.());
	$Panel_content__setup__script($scope);
};
const $Panel_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<div class=box>panel <!></div><span class=note> </span>", " Db%lD ", $Panel_content__setup);
const $count__closure = /*@__PURE__*/ _closure($Panel_content__count);
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
