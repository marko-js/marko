// template.marko.persisted.mjs
const $Child_content = /*@__PURE__*/ _content("a3", "<button class=child>child</button>", " b", _script_shared(($scope) => _on($scope.a, "click", function() {})));
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $count_seed = _update_signal("a9");
const $inputouter_content__update = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $count_seed, $patch["h"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_update_content("a3", _update_pair);
_update_content("a5", $inputouter_content__update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $Child_content = _content_resume("a3", "<button class=child>child</button>", " b", _script_update("a4", ($scope) => _on($scope.a, "click", function() {})));
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
const $inputouter_content = _content_resume("a5", "<!><!><!>", "b%c", $inputouter_content__setup);
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
