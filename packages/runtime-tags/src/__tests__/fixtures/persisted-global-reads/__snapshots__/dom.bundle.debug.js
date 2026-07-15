// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $globals_update = _update_signal("__tests__/template.marko_0/update_globals");
const $if_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	_update_scope(_patch, _live);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	_update_scope(_patch, _live);
	if ("ConditionalRenderer:#section/4" in _patch) _update_if(_patch, _live, "ConditionalRenderer:#section/4", "BranchScopes:#section/4", [$if_content__update]);
	$globals_update(_live);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// template.marko
const $template = "<h1> </h1><a>link</a><button> </button><section></section>";
const $walks = "D l b D l b";
const $if_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._, $scope._.count + 10);
}));
const $if_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope.$global.params.sale);
	$if_content__setup__script($scope);
};
const $count = /*@__PURE__*/ _let_persisted("count/5", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	_attr_class($scope["#section/4"], $scope.count && $scope.$global.params.tag && "hot");
});
const $if = /*@__PURE__*/ _if("#section/4", "<em>Sale <!>% off</em><button class=buy>buy</button>", "Db%l b", $if_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text($scope["#text/0"], $scope.$global.title);
	_attr($scope["#a/1"], "href", `/items/${$scope.$global.params.id}`);
	$count($scope, 0);
	if (!updating) $if($scope, $scope.$global.params.sale ? 0 : 1);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
