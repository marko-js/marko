// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content3__fmt__OR__label = /*@__PURE__*/ _fill_if("b5", 5, /*@__PURE__*/ _fill_if("b4", 4, /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.e($scope._.f))), 0, 0), 0, 0);
const $if_content3__fmt = /*@__PURE__*/ _if_closure(0, 0, $if_content3__fmt__OR__label);
const $if_content3__setup = ($scope) => {
	$if_content3__fmt._($scope);
	$if_content3__label._($scope);
};
const $if_content3__label = /*@__PURE__*/ _if_closure(0, 0, $if_content3__fmt__OR__label);
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content3__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_fmt = /*@__PURE__*/ _const(4, $if_content3__fmt);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(5, $if_content3__label);
const $if_content2__input_label = /*@__PURE__*/ _fill("b10 b11", 7, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.h)));
const $if_content2__setup = $if_content2__input_label;
const $if_content__input_open = /*@__PURE__*/ _init_resume("b6", /*@__PURE__*/ _fill("b9", 6, /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$Panel_content__tag_input_fmt($scope.a, lib.format);
	$Panel_content__isOpen($scope.a, $scope._.g);
})));
const $if_content__setup = ($scope) => {
	$if_content__input_open._($scope);
	$if_content__input_label._($scope);
	$Panel_content__tag_input_fmt($scope.a, lib.format);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("b7", /*@__PURE__*/ _fill("b11", 7, /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$Panel_content__tag_input_fmt($scope.a, lib.format);
	$Panel_content__tag_input_label($scope.a, $scope._.h);
})));
const $if2 = /*@__PURE__*/ _if(1, "<b> </b>", "D ", $if_content2__setup);
const $open = /*@__PURE__*/ _fill_let("b12", 8, ($scope) => $if2($scope, $scope.i ? 0 : 1));
const $setup__script$1 = _script("b8", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);

// template.marko
const $shown = _let(6, ($scope) => $input_show($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$shown($scope, !$scope.g);
}));
