// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// template.marko
const $Panel_content__walks = "D%c%l";
const $Panel_content__template = "<em><!> <!></em>";
const $Panel_content__fmt__OR__a = /*@__PURE__*/ _or_resume("a1", 6, ($scope) => _text($scope.a, $scope.e($scope.f)));
const $Panel_content__fmt__OR__b = /*@__PURE__*/ _or_resume("a2", 8, ($scope) => _text($scope.b, $scope.e($scope.h)));
const $Panel_content__fmt = /*@__PURE__*/ _const(4, ($scope) => {
	$Panel_content__fmt__OR__a($scope);
	$Panel_content__fmt__OR__b($scope);
});
const $Panel_content__a = /*@__PURE__*/ _const(5, $Panel_content__fmt__OR__a);
const $Panel_content__b = /*@__PURE__*/ _const(7, $Panel_content__fmt__OR__b);
const $if_content__input_label = /*@__PURE__*/ _fill_signal("4 a4", /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$Panel_content__fmt($scope.a, lib.format);
	$Panel_content__a($scope.a, $scope._.e);
	$Panel_content__b($scope.a, $scope._.e + "!");
}));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$Panel_content__fmt($scope.a, lib.format);
};
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
