// tags/leaf.marko
const $template = "<!><!><!>";
const $if_content__input_label$1 = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $if$1 = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__input_label$1);
const $input_flag = ($scope, input_flag) => $if$1($scope, input_flag ? 0 : 1);
const $input_label$2 = /*@__PURE__*/ _fill_const("b0", 4, $if_content__input_label$1);

// tags/mid.marko
const $if_content__input_flag = /*@__PURE__*/ _fill_join("c0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_flag($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_flag._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _fill_join("c1", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label$2($scope.a, $scope._.f)));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_label$1 = /*@__PURE__*/ _fill_const("c1", 5, $if_content__input_label);

// template.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => $input_show($scope.a, $scope.g % 2 === 0));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $input_label = _fill_const("a0", 5, ($scope) => $input_label$1($scope.a, $scope.f));
