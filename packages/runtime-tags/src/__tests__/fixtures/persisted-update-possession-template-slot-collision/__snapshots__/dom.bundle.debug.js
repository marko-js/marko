// tags/child.marko.persisted.mjs
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $for_content__item_id$1 = ($scope, item_id) => {
	_attr($scope["#p/0"], "data-child", item_id);
	_text($scope["#text/1"], item_id);
};
const $for_content__$params$1 = ($scope, $params2) => $for_content__item_id$1($scope, $params2[0]?.id);
const $for$1 = 0;
function $setup$1($scope) {
	if (!updating) $for$1($scope, [$scope.$global.childItems, "id"]);
}
var child_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1);
const $for_content_holes$1 = /*@__PURE__*/ _update_scopes({
	"PatchAttr:data-child:#p/0": /*@__PURE__*/ _update_named_attr("#p/0", "data-child"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1")
});
const $for_update$1 = _update_for_keyed("#text/0", ($p, $l) => $for_content_holes$1($p, $l));
const $update2$1 = (_patch, _live) => {
	if ("BranchScopes:#text/0" in _patch) $for_update$1(_live, [_patch["BranchScopes:#text/0"], "#LoopKey"]);
};
const _merge$1 = _resume("__tests__/tags/child.marko_0_update", $update2$1);
_update_content("__tests__/tags/child.marko", _merge$1);
function _patch2$1(_fail) {
	return patch(_merge$1, _fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&%c`)("b%c");
const $globalnativeTag_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "dynamic", "b");
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/0"], item_id);
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/5", ($scope) => _text($scope["#text/1"], $scope.count)));
const $for = 0;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/4", $globalnativeTag_content);
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
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#text/2", ($p, $l) => $for_content_holes($p, $l));
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("BranchScopes:#text/2" in _patch) $for_update(_live, [_patch["BranchScopes:#text/2"], "#LoopKey"]);
	if ("#childScope/3" in _patch) _merge$1(_patch["#childScope/3"], _live["#childScope/3"]);
	if ("ConditionalRenderer:#text/4" in _patch || "BranchScopes:#text/4" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/4", "BranchScopes:#text/4");
};
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $for_content__item_id$1 = ($scope, item_id) => {
	_attr($scope["#p/0"], "data-child", item_id);
	_text($scope["#text/1"], item_id);
};
const $for_content__$params$1 = ($scope, $params2) => $for_content__item_id$1($scope, $params2[0]?.id);
const $for$1 = /*@__PURE__*/ _for_of("#text/0", "<p>child <!></p>", " Db%l", 0, $for_content__$params$1);
function $setup$1($scope) {
	if (!updating) $for$1($scope, [$scope.$global.childItems, "id"]);
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&%c`)("b%c");
const $globalnativeTag_content = _content_resume("__tests__/template.marko_2_content", "dynamic", "b");
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/0"], item_id);
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $count = /*@__PURE__*/ _let_persisted("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $for = /*@__PURE__*/ _for_of("#text/2", "<p>parent <!></p>", "Db%l", 0, $for_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/4", $globalnativeTag_content);
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
