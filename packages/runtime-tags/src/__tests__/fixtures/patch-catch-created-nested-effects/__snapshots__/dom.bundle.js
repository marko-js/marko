// tags/wrap.marko
const $template = "<div><!></div>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $wrap_content__input_v__script = _script("a12", ($scope) => console.log("content", $scope._._.d));
const $wrap_content__input_v = /*@__PURE__*/ _init_resume("a13", _closure_resume("a32", /*@__PURE__*/ _fill_closure("a26 a27", 3, /*@__PURE__*/ _closure_get(8, $wrap_content__input_v__script, ($scope) => $scope._._), 3)));
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_v($scope);
	$wrap_content__w($scope);
};
const $wrap_content__w = /*@__PURE__*/ _init_resume("a14", /*@__PURE__*/ _closure_get(13, ($scope) => _text($scope.a, $scope._.h), 0, "a15"));
const $wrap_content = /*@__PURE__*/ _content$1("a6", "<s> </s>", "D ", $wrap_content__setup);
const $for_content__input_v__OR__x__script = _script("a9", ($scope) => console.log("for", $scope.c, $scope._._.d));
const $for_content__input_v__OR__x = /*@__PURE__*/ _fill_subscribers("a27 | a26", 3, /*@__PURE__*/ _or_resume("a10", 3, $for_content__input_v__OR__x__script), 8, 2);
const $for_content__input_v = _closure_resume("a11", /*@__PURE__*/ _closure_index(2, /*@__PURE__*/ _closure_get(8, $for_content__input_v__OR__x, ($scope) => $scope._._)));
const $for_content__setup = $for_content__input_v;
const $for_content__x = /*@__PURE__*/ _const(2, ($scope) => {
	_text($scope.a, $scope.c);
	$for_content__input_v__OR__x($scope);
});
const $for_content__$params = ($scope, $params3) => $for_content__x($scope, $params3[0]);
const $if_content__input_v__script = _script("a0", ($scope) => console.log("if", $scope._._.d));
const $if_content__input_v = /*@__PURE__*/ _init_resume("a1", _closure_resume("a3", /*@__PURE__*/ _fill_closure("a26 a27", 3, /*@__PURE__*/ _closure_get(8, $if_content__input_v__script, ($scope) => $scope._._), 1)));
const $if_content__setup = ($scope) => {
	$if_content__input_v($scope);
	$if_content__w._($scope);
};
const $if_content__w = /*@__PURE__*/ _init_resume("a2", /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.h)));
const $catch_content__w__closure = /*@__PURE__*/ _closure($wrap_content__w);
const $catch_content__w = /*@__PURE__*/ _const(7, ($scope) => {
	$catch_content__w__closure($scope);
	$if_content__w($scope);
});
const $catch_content__input_v__script = _script("a16", ($scope) => console.log("catch", $scope._.d));
const $catch_content__input_v = /*@__PURE__*/ _init_resume("a17", _closure_resume("a20", /*@__PURE__*/ _fill_closure("a26 a27", 3, /*@__PURE__*/ _closure_get(8, ($scope) => {
	$catch_content__w($scope, $scope._.d * 10);
	$catch_content__input_v__script($scope);
}), 0)));
const $catch_content__setup = ($scope) => {
	$catch_content__input_v($scope);
	$catch_content__input_show($scope);
	$catch_content__input_items($scope);
	$input_content_direct($scope.d, $wrap_content($scope));
};
const $catch_content__if = /*@__PURE__*/ _if(1, "<i> </i>", "D ", $if_content__setup);
const $catch_content__input_show = /*@__PURE__*/ _init_resume("a18", _closure_resume("a21", /*@__PURE__*/ _fill_closure("a28", 4, /*@__PURE__*/ _closure_get(9, ($scope) => $catch_content__if($scope, $scope._.e ? 0 : 1)), 0)));
const $catch_content__for = /*@__PURE__*/ _for_of_unkeyed(2, "<u> </u>", "D ", $for_content__setup, $for_content__$params);
const $catch_content__input_items = /*@__PURE__*/ _init_resume("a19", _closure_resume("a22", /*@__PURE__*/ _fill_closure("a29", 5, /*@__PURE__*/ _closure_get(10, ($scope) => $catch_content__for($scope, [$scope._.f])), 0)));
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a7", /*@__PURE__*/ ((_w0) => `<b> </b><!><!>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `D l%b%b/${_w0}&`)("D%l"), $catch_content__setup, $catch_content__$params);
