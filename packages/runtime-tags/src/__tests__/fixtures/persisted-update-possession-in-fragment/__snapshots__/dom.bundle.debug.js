// tags/layout.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("ConditionalRenderer:#text/0" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
var layout_marko_update_default = _resume("__tests__/tags/layout.marko_0_update", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Widget_content__update = (patch, live) => {
	if ("ConditionalRenderer:#text/0" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("#childScope/2" in patch) layout_marko_update_default(patch["#childScope/2"], live["#childScope/2"]);
};
_update_content("__tests__/template.marko_3_content", _update_scope);
_update_content("__tests__/template.marko_2_content", $Widget_content__update);
_update_content("__tests__/template.marko_1_content", _update_scope);
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

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
enableBranchesPersisted();
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $Widget_content__walks = "b%c", $Widget_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)("D%l");
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
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $WidgetX = /*@__PURE__*/ _const_persisted("WidgetX");
const $WidgetY = /*@__PURE__*/ _const_persisted("WidgetY");
const $Home__OR__Dashboard = /*@__PURE__*/ _or(8, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "dashboard" ? $scope.Dashboard : $scope.Home));
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
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
