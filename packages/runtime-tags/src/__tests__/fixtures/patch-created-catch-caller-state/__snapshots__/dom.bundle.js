// tags/detail-view.marko
const $if_content__input_detail__script = _script("b0", ($scope) => console.log("detail", $scope._._.d));
const $if_content__input_detail = /*@__PURE__*/ _init_resume("b1", _closure_resume("b2", /*@__PURE__*/ _fill_closure("b10", 3, /*@__PURE__*/ _closure_get(5, ($scope) => {
	$if_content__input_detail__script($scope);
	_text($scope.a, $scope._._.d);
}, ($scope) => $scope._._), 1)));
const $catch_content__if = /*@__PURE__*/ _if(1, "<i> </i>", "D ", $if_content__input_detail);
const $catch_content__input_detail = /*@__PURE__*/ _init_resume("b6", _closure_resume("b7", /*@__PURE__*/ _fill_closure("b10", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $catch_content__if($scope, $scope._.d ? 0 : 1)), 0)));
const $catch_content__setup = $catch_content__input_detail;
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("b5", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $input_detail__closure = /*@__PURE__*/ _closure($catch_content__input_detail, $if_content__input_detail);
const $input_detail = /*@__PURE__*/ _fill_const("b10", 3, $input_detail__closure);

// template.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	$input_detail($scope.b, $scope.i ? "n" + $scope.i : "");
	_text($scope.d, $scope.i);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
