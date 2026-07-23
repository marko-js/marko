// tags/layout.marko.persisted.mjs
const $template$1 = "<section class=shell><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);
const $update2$1 = ($patch, $live) => {
	if ("ConditionalRenderer:#text/0" in $patch || "BranchScopes:#text/0" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $Widget_content__walks = "b%c", $Widget_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $Dashboard_content__setup = ($scope) => {
	$Widget_content__setup._($scope["#childScope/0"], $scope._);
};
const $Dashboard_content = /*@__PURE__*/ _content("__tests__/template.marko_5_content", /*@__PURE__*/ ((_w0) => `<h2 class=dash>Dashboard</h2>${_w0}<!>`)($Widget_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Widget_content__walks), $Dashboard_content__setup);
const $Home_content__setup = ($scope) => {
	$Widget_content__setup._($scope["#childScope/0"], $scope._);
};
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", /*@__PURE__*/ ((_w0) => `<p class=home>welcome home</p>${_w0}<!>`)($Widget_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Widget_content__walks), $Home_content__setup);
const $WidgetY_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $WidgetY_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<section class=y>Widget Y: <!></section>", "Db%l", $WidgetY_content__setup);
const $Widget_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Widget_content__WidgetX__OR__WidgetY = /*@__PURE__*/ _or(1, ($scope) => $Widget_content__dynamicTag($scope, $scope.$global.widget === "y" ? $scope._.WidgetY : $scope._.WidgetX));
const $Widget_content__WidgetX = /*@__PURE__*/ _closure_get("WidgetX", ($scope) => {
	if (!updating) $Widget_content__WidgetX__OR__WidgetY($scope);
});
const $Widget_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	if (!updating) $Widget_content__WidgetX($scope);
	if (!updating) $Widget_content__WidgetY($scope);
});
const $Widget_content__WidgetY = /*@__PURE__*/ _closure_get("WidgetY", ($scope) => {
	if (!updating) $Widget_content__WidgetX__OR__WidgetY($scope);
});
const $WidgetX_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $WidgetX_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<span class=x>Widget X: <!></span>", "Db%l", $WidgetX_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count)));
const $WidgetX = /*@__PURE__*/ _const_persisted("WidgetX");
const $WidgetY = /*@__PURE__*/ _const_persisted("WidgetY");
const $Home__OR__Dashboard = /*@__PURE__*/ _or(9, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "dashboard" ? $scope.Dashboard : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Dashboard);
const $Dashboard = /*@__PURE__*/ _const_persisted("Dashboard", $Home__OR__Dashboard);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $WidgetX($scope, { content: $WidgetX_content($scope) });
	if (!updating) $WidgetY($scope, { content: $WidgetY_content($scope) });
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Dashboard($scope, { content: $Dashboard_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Widget_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#text/0" in $patch || "BranchScopes:#text/0" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_child($scope, "#childScope/2", "__tests__/tags/layout.marko_0_update");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/2" in $patch) $merge$1($patch["#childScope/2"], $live["#childScope/2"]);
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_5_content", $noop_update);
_update_content("__tests__/template.marko_4_content", $noop_update);
_update_content("__tests__/template.marko_3_content", $noop_update);
_update_content("__tests__/template.marko_2_content", $Widget_content__update);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic} report` : undefined;

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
const $Widget_content__walks = "b%c", $Widget_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $Dashboard_content__setup = ($scope) => {
	$Widget_content__setup._($scope["#childScope/0"], $scope._);
};
const $Dashboard_content = /*@__PURE__*/ _content("__tests__/template.marko_5_content", /*@__PURE__*/ ((_w0) => `<h2 class=dash>Dashboard</h2>${_w0}<!>`)($Widget_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Widget_content__walks), $Dashboard_content__setup);
const $Home_content__setup = ($scope) => {
	$Widget_content__setup._($scope["#childScope/0"], $scope._);
};
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", /*@__PURE__*/ ((_w0) => `<p class=home>welcome home</p>${_w0}<!>`)($Widget_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Widget_content__walks), $Home_content__setup);
const $WidgetY_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $WidgetY_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<section class=y>Widget Y: <!></section>", "Db%l", $WidgetY_content__setup);
const $Widget_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Widget_content__WidgetX__OR__WidgetY = /*@__PURE__*/ _or(1, ($scope) => $Widget_content__dynamicTag($scope, $scope.$global.widget === "y" ? $scope._.WidgetY : $scope._.WidgetX));
const $Widget_content__WidgetX = /*@__PURE__*/ _closure_get("WidgetX", ($scope) => {
	if (!updating) $Widget_content__WidgetX__OR__WidgetY($scope);
});
const $Widget_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	if (!updating) $Widget_content__WidgetX($scope);
	if (!updating) $Widget_content__WidgetY($scope);
});
const $Widget_content__WidgetY = /*@__PURE__*/ _closure_get("WidgetY", ($scope) => {
	if (!updating) $Widget_content__WidgetX__OR__WidgetY($scope);
});
const $WidgetX_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $WidgetX_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<span class=x>Widget X: <!></span>", "Db%l", $WidgetX_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $WidgetX = /*@__PURE__*/ _const_persisted("WidgetX");
const $WidgetY = /*@__PURE__*/ _const_persisted("WidgetY");
const $Home__OR__Dashboard = /*@__PURE__*/ _or(9, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "dashboard" ? $scope.Dashboard : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Dashboard);
const $Dashboard = /*@__PURE__*/ _const_persisted("Dashboard", $Home__OR__Dashboard);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $WidgetX($scope, { content: $WidgetX_content($scope) });
	if (!updating) $WidgetY($scope, { content: $WidgetY_content($scope) });
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Dashboard($scope, { content: $Dashboard_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
