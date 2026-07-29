// template.marko.persisted.mjs
const $inputouter_content__walks = "b%c", $inputouter_content__template = "<!><!><!>", $Child_content__walks = " b", $Child_content__template = "<button class=child>child</button>";
const $template = "<button class=count>count <!></button><!><!>";
const $walks = " Db%l%c";
const $Child_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {}));
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
_static_shells({
	"a7": [$Child_content__template, $Child_content__walks],
	"a3": [$Child_content__template, $Child_content__walks],
	"a8": [$inputouter_content__template, $inputouter_content__walks],
	"a5": [$inputouter_content__template, $inputouter_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a9");
const $Child_content__construct = ($scope) => {
	_construct_effect($scope, $Child_content__setup__script);
};
const $inputouter_content__update = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.h);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $count_seed, $patch["h"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("a7", $Child_content__construct);
_construct("a2", $construct);
_update_content("a3", _update_pair, $Child_content__construct);
_update_content("a5", $inputouter_content__update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $Child_content = _content_resume("a3", "<button class=child>child</button>", " ", _script_update("a4", ($scope) => _on($scope.a, "click", function() {})));
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
const $inputouter_content = _content_resume("a5", "<!><!><!>", "b%", $inputouter_content__setup);
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
