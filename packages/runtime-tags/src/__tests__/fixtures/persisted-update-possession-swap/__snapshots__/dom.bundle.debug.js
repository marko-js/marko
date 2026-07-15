// tags/layout.marko.update.mjs
const $update$1 = (_patch, _live) => {
	if ("ConditionalRenderer:#text/0" in _patch || "BranchScopes:#text/0" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const _merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update$1);
_update_content("__tests__/tags/layout.marko", _merge$1);
function _createPatch$1() {
	return createPatch(_merge$1);
}

// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("#childScope/2" in _patch) _merge$1(_patch["#childScope/2"], _live["#childScope/2"]);
};
_update_content("__tests__/template.marko_2_content", _update_scope);
_update_content("__tests__/template.marko_1_content", _update_scope);
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
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
enableBranchesPersisted();
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)("D%l");
const $PanelB_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelB_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<section class=b>Panel B: <!></section><span class=b2>beta detail</span>", "Db%lb", $PanelB_content__setup);
const $PanelA_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelA_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=a>Panel A: <!></p><span class=a2>alpha detail</span>", "Db%lb", $PanelA_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $PanelA__OR__PanelB = /*@__PURE__*/ _or(6, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "b" ? $scope.PanelB : $scope.PanelA));
const $PanelA = /*@__PURE__*/ _const_persisted("PanelA", $PanelA__OR__PanelB);
const $PanelB = /*@__PURE__*/ _const_persisted("PanelB", $PanelA__OR__PanelB);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $PanelA($scope, { content: $PanelA_content($scope) });
	if (!updating) $PanelB($scope, { content: $PanelB_content($scope) });
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
