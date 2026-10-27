// tags/lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/rowsx.marko
const $if_content2__fmt__OR__label = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.e($scope._.f)));
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, $if_content2__fmt__OR__label);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(5, $if_content2__label);
const $if_content__input_label = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.h));
const $if_content__setup = $if_content__input_label;
const $for_content__input_label__OR__x = /*@__PURE__*/ _or(3, ($scope) => $Panel_content__tag_input_label($scope.a, $scope._.h + $scope.c));
const $for_content__input_label = /*@__PURE__*/ _for_closure(0, $for_content__input_label__OR__x);
const $if = /*@__PURE__*/ _if(1, "<b> </b>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script$1 = _script("b2", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $input_label = /*@__PURE__*/ _const(7, ($scope) => {
	$for_content__input_label($scope);
	$if_content__input_label($scope);
});
function $fmt(v) {
	return lib.format(v);
}
_resumed.b0 = $fmt;

// template.marko
const $if_content__l = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label($scope.a, $scope._.h));
const $l = /*@__PURE__*/ _let(7, $if_content__l);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$l($scope, $scope.h + "!");
}));
