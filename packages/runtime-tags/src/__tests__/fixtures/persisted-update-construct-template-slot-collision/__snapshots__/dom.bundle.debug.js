// tags/child.marko.persisted.mjs
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $for_content__item_id$1 = ($scope, item_id) => {
	_attr($scope["#p/0"], "data-child", item_id);
	_text($scope["#text/1"], item_id);
};
const $for_content__$params$1 = ($scope, $params2) => $for_content__item_id$1($scope, $params2[0]?.id);
const $for$1 = /*@__PURE__*/ _for_of("#text/0", "<p>child <!></p>", " Db%", 0, $for_content__$params$1);
function $setup$1($scope) {
	$for$1($scope, [$scope.$global.childItems, "id"]);
}
var child_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1);
_static_shells({ "__tests__/tags/child.marko_0_update": [$template$1, "b%c"] });
const $update2$1 = () => {};
const $noop_update$1 = () => {};
_update_content("__tests__/tags/child.marko_1_update", $noop_update$1);
const $merge$1 = _resume("__tests__/tags/child.marko_0_update", $update2$1);
_update_content("__tests__/tags/child.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!><!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&%b%c`)("b%c");
const $globalnativeTag_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "dynamic");
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/0"], item_id);
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $for = 0;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/5", $globalnativeTag_content);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/3"]);
	$count($scope, 0);
	if (!updating) $for($scope, [$scope.$global.parentItems, "id"]);
	$dynamicTag($scope, $scope.$global.nativeTag);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/2" in $patch) _update_region("#text/2")($patch, $live);
	if ("ConditionalRenderer:#text/4" in $patch) _update_region("#text/4")($patch, $live);
	if ("ConditionalRenderer:#text/5" in $patch || "BranchScopes:#text/5" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/5", "BranchScopes:#text/5");
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
_update_content("__tests__/template.marko_1_update", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $for_content__item_id$1 = ($scope, item_id) => {
	_attr($scope["#p/0"], "data-child", item_id);
	_text($scope["#text/1"], item_id);
};
const $for_content__$params$1 = ($scope, $params2) => $for_content__item_id$1($scope, $params2[0]?.id);
const $for$1 = /*@__PURE__*/ _for_of("#text/0", "<p>child <!></p>", " Db%", 0, $for_content__$params$1);
function $setup$1($scope) {
	$for$1($scope, [$scope.$global.childItems, "id"]);
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!><!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&%b%c`)("b%c");
const $globalnativeTag_content = _content_resume("__tests__/template.marko_2_content", "dynamic");
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/0"], item_id);
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $for = /*@__PURE__*/ _for_of("#text/2", "<p>parent <!></p>", "Db%", 0, $for_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/5", $globalnativeTag_content);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/3"]);
	$count($scope, 0);
	if (!updating) $for($scope, [$scope.$global.parentItems, "id"]);
	$dynamicTag($scope, $scope.$global.nativeTag);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
