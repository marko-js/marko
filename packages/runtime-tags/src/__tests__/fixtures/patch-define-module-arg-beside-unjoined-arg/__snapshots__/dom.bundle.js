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
const $Panel_content__walks = "D lD l";
const $Panel_content__template = "<em> </em><b> </b>";
const $Panel_content__fmt__OR__label = /*@__PURE__*/ _or_resume("a1", 6, ($scope) => _text($scope.a, $scope.e($scope.f)));
const $Panel_content__fmt = /*@__PURE__*/ _const(4, $Panel_content__fmt__OR__label);
const $Panel_content__label = /*@__PURE__*/ _const(5, $Panel_content__fmt__OR__label);
const $Panel_content__title = ($scope, title) => _text($scope.b, title);
const $if_content__input_label = /*@__PURE__*/ _fill("a3", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$Panel_content__fmt($scope.a, lib.format);
	$Panel_content__label($scope.a, $scope._.e);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__input_title._($scope);
	$Panel_content__fmt($scope.a, lib.format);
};
const $if_content__input_title = /*@__PURE__*/ _fill("a4", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__title($scope.a, $scope._.f)));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $open = _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
