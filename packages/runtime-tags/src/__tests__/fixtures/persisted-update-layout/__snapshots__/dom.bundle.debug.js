// tags/layout/layout.marko.update.mjs
const $open_seed = _update_signal("__tests__/tags/layout/layout.marko_0_open/var");
const $dynamic_update = _update_signal("__tests__/tags/layout/layout.marko_0/update_dynamic_#text/2");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("open" in patch) _update_seed(live, $open_seed, patch["open"]);
	if ("ConditionalRenderer:#text/2" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", $dynamic_update);
};
var layout_marko_update_default = _resume("__tests__/tags/layout/layout.marko_0_update", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $layout_content__update = (patch, live) => {
	_update_pair(patch, live);
	_update_scope(patch, live);
};
const $update = (patch, live) => {
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("#childScope/0" in patch) layout_marko_update_default(patch["#childScope/0"], live["#childScope/0"]);
};
_update_content("__tests__/template.marko_1_content", $layout_content__update);
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// tags/layout/layout.marko
const $template$1 = "<header><button> </button></header><main><!></main>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = /*@__PURE__*/ _let("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "Close" : "Menu"));
const $setup__script = _script_update("__tests__/tags/layout/layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
enableBranches();
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout/layout.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $layout_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_title);
	}
});
const $layout_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $layout_content__setup = ($scope) => {
	if (!updating) $layout_content__input_title($scope);
	$layout_content__count($scope);
	$layout_content__setup__script($scope);
};
const $layout_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/2"], $scope._.count));
const $layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<h1> </h1><button class=inc> </button>", "D l D l", $layout_content__setup);
const $count__closure = /*@__PURE__*/ _closure($layout_content__count);
const $count = /*@__PURE__*/ _let("count/4", $count__closure);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $layout_content($scope));
	$count($scope, 0);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title__closure = /*@__PURE__*/ _closure($layout_content__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_title__closure);
enableBranches();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
