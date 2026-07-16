// template.marko
const $Child_content = _content_resume("a3", "<button class=child>child</button>", " b", _script_update("a5", ($scope) => _on($scope.a, "click", function() {})));
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
const $inputouter_content = _content_resume("a2", "<!><!><!>", "b%c", $inputouter_content__setup);
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));

// template.marko.persisted.mjs
const $Child_content = /*@__PURE__*/ _content("a3", "<button class=child>child</button>", " b", _script_shared(($scope) => _on($scope.a, "click", function() {})));
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $count_seed = _update_signal("a7");
const $inputouter_content__update = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("h" in _patch) _update_seed(_live, $count_seed, _patch["h"]);
	if ("g" in _patch) _live["g"] = _patch["g"];
	if ("i" in _patch) _live["i"] = _patch["i"];
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
};
_update_content("a3", _update_pair);
_update_content("a2", $inputouter_content__update);
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
