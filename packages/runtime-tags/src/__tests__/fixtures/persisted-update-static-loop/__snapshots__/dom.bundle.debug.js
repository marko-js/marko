// template.marko.update.mjs
const $globals_update = _update_signal("__tests__/template.marko_1/update_globals");
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for("#text/2", "__tests__/template.marko_2_content/update", (branch, args) => _update_scope(args[0], branch));
const $if_content__update = (patch, live) => {
	_update_scope(patch, live);
	$globals_update(live);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("BranchScopes:#text/2" in patch) $for_update(live, [patch["BranchScopes:#text/2"], "#LoopKey"]);
	if ("ConditionalRenderer:#text/3" in patch) _update_if(patch, live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3", [$if_content__update]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// data.ts
function getCategories() {
	return [
		"home",
		"tools",
		"toys"
	];
}

// template.marko
const $template = "<button class=bump> </button><!><!><!>";
const $walks = " D l%b%c";
const $for_content__cat = ($scope, cat) => {
	_attr_class($scope["#span/0"], cat === $scope.$global.params.pick && "active");
	_text($scope["#text/1"], cat);
};
const $for_content__$params = ($scope, $params2) => $for_content__cat($scope, $params2[0]);
const $if_content__count = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => _attr_class($scope["#em/0"], $scope._.count && $scope.$global.params.tag && "hot"));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	_text($scope["#text/1"], $scope.$global.params.pick);
};
const $for = /*@__PURE__*/ _for_of("#text/2", "<span> </span>", " D l", 0, $for_content__$params);
const $categories = ($scope, categories) => {
	$categories_length($scope, categories?.length);
	if (!updating) $for($scope, [categories]);
};
const $if = /*@__PURE__*/ _if("#text/3", "<em>pick:<!></em>", " Db%l", $if_content__setup);
const $categories_length = ($scope, categories_length) => {
	if (!updating) $if($scope, categories_length ? 0 : 1);
};
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $categories($scope, getCategories());
	$count($scope, 0);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
