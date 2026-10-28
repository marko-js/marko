// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content3__fmt__OR__label = /*@__PURE__*/ _fill_join_if("b5", 5, /*@__PURE__*/ _fill_join_if("b4", 4, /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.e($scope._.f))), 0, 0), 0, 0);
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
const $if_content2__input_label = /*@__PURE__*/ _fill_join("b12 b13", 7, /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.h)));
const $if_content2__setup = $if_content2__input_label;
const $if_content__input_fmt = /*@__PURE__*/ _init_resume("b6", /*@__PURE__*/ _fill_join("b11", 6, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $Panel_content__tag_input_fmt($scope.a, $scope._.g))));
const $if_content__setup = ($scope) => {
	$if_content__input_fmt._($scope);
	$if_content__input_label._($scope);
	$if_content__input_open._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("b7", /*@__PURE__*/ _fill_join("b13", 7, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $Panel_content__tag_input_label($scope.a, $scope._.h))));
const $if_content__input_open = /*@__PURE__*/ _init_resume("b8", /*@__PURE__*/ _fill_join("b14", 9, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $Panel_content__isOpen($scope.a, $scope._.j))));
const $if2 = /*@__PURE__*/ _if(2, "<b> </b>", "D ", $if_content2__setup);
const $open = /*@__PURE__*/ _fill_let("b15", 10, ($scope) => $if2($scope, $scope.k ? 0 : 1));
const $setup__script$1 = _script("b9", ($scope) => _on($scope.d, "click", function() {
	$open($scope, !$scope.k);
}));
const $input_label__script = _script("b10", ($scope) => console.log("label", $scope.h));
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);

// template.marko
const $shown = _let(6, ($scope) => $input_show($scope.a, $scope.g));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$shown($scope, !$scope.g);
}));
function $fmt(s) {
	return s + "!";
}
_resumed.a0 = $fmt;
