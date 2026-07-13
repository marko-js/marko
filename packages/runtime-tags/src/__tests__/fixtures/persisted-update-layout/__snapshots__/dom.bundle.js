// tags/layout/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "Close" : "Menu"));
const $setup__script = _script_update("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
enableBranchesPersisted();

// template.marko
const $layout_content__setup__script = _script_update("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.e + 1);
}));
const $layout_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.c, $scope._.e));
const $count = /*@__PURE__*/ _let_persisted(4, /* @__PURE__ */ _closure($layout_content__count));
enableBranchesPersisted();

// tags/layout/layout.marko.update.mjs
const $open_seed = _update_signal("b2");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $open_seed, patch["g"]);
	if ("Dc" in patch) _update_dynamic(patch, live, "Dc", "Ac");
};
const _merge$1 = _resume("b3", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a0");
const $layout_content__update = (patch, live) => {
	_update_pair(patch, live);
	_update_scope(patch, live);
};
const $update = (patch, live) => {
	if ("e" in patch) _update_seed(live, $count_seed, patch["e"]);
	if ("a" in patch) _merge$1(patch["a"], live["a"]);
};
_update_content("a2", $layout_content__update);
const _merge = _resume("a3", $update);
function createPatch() {
	return createPatch$1(_merge);
}
