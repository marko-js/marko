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
const $if_content__fmt__OR__label = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.e($scope._.f)));
const $if_content__label = /*@__PURE__*/ _if_closure(0, 0, $if_content__fmt__OR__label);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(5, $if_content__label);
const $input_label = ($scope, input_label) => $Panel_content__tag_input_label($scope.a, input_label + "1");
function $fmt(v) {
	return lib.format(v);
}
_resumed.b0 = $fmt;

// template.marko
const $if_content__l = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label($scope.a, $scope._.g));
const $l = /*@__PURE__*/ _let(6, $if_content__l);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$l($scope, $scope.g + "!");
}));
