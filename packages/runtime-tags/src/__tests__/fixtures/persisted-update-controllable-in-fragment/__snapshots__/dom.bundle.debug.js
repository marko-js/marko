// template.marko.update.mjs
const $text_seed = _update_signal("__tests__/template.marko_2_text/var");
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Editor_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("text" in _patch) _update_seed(_live, $text_seed, _patch["text"]);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("ConditionalRenderer:#text/2" in _patch || "BranchScopes:#text/2" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
_update_content("__tests__/template.marko_2_content", $Editor_content__update);
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $Editor_content__text = /*@__PURE__*/ _let_persisted("text/2", ($scope) => {
	_attr_input_value($scope, "#input/0", $scope.text, $valueChange($scope));
	_text($scope["#text/1"], $scope.text);
});
const $Editor_content__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $Editor_content__setup = ($scope) => {
	$Editor_content__text($scope, "draft");
	$Editor_content__setup__script($scope);
};
const $Editor_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<input class=field><output class=echo> </output>", " bD l", $Editor_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Editor = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "editor" ? $scope.Editor : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Editor);
const $Editor = /*@__PURE__*/ _const_persisted("Editor", $Home__OR__Editor);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Editor($scope, { content: $Editor_content($scope) });
	$setup__script($scope);
}
function $valueChange($scope) {
	return (_new_text) => {
		$Editor_content__text($scope, _new_text);
	};
}
_resume("__tests__/template.marko_2/valueChange", $valueChange);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
