// template.marko
const $Child_content = _content_resume("a6", "<button class=child>child</button>", " b", _script_update("a5", ($scope) => _on($scope.a, "click", function() {})));
const $inputouter_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $inputouter_content__input_child__OR__Child = /*@__PURE__*/ _or(1, ($scope) => $inputouter_content__dynamicTag($scope, $scope._.g === "component" ? $scope._.i : $scope._.g === "native" ? "span" : void 0));
const $inputouter_content__input_child = /*@__PURE__*/ _closure_get(9, ($scope) => {
	if (!updating) $inputouter_content__input_child__OR__Child($scope);
});
const $inputouter_content__setup = ($scope) => {
	if (!updating) $inputouter_content__input_child($scope);
	if (!updating) $inputouter_content__Child($scope);
};
const $inputouter_content__Child = /*@__PURE__*/ _closure_get(10, ($scope) => {
	if (!updating) $inputouter_content__input_child__OR__Child($scope);
});
const $inputouter_content = _content_resume("a4", "<!><!><!>", "b%c", $inputouter_content__setup);
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $Child_content__update = (patch, live) => {
	_update_pair(patch, live);
};
const $inputouter_content__update = (patch, live) => {
	if ("Da" in patch || "Aa" in patch) _update_dynamic(patch, live, "Da", "Aa");
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("h" in patch) _update_seed(live, $count_seed, patch["h"]);
	if ("g" in patch) live["g"] = patch["g"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("Dc" in patch || "Ac" in patch) _update_dynamic(patch, live, "Dc", "Ac");
};
_update_content("a6", $Child_content__update);
_update_content("a4", $inputouter_content__update);
const _merge = _resume("a7", $update);
function createPatch() {
	return createPatch$1(_merge);
}
