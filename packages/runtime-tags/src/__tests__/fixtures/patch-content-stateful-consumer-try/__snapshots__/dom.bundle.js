// tags/wrap.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill("b1", 5, /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f)));
const $if = /*@__PURE__*/ _if(2, "<section><!></section>", "D%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
function check(fail, x) {
	if (fail) throw new Error("boom " + x);
	return x;
}
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a3", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__input_fail__OR__input_x = /*@__PURE__*/ _fill_subscribers("a7", 4, /*@__PURE__*/ _fill_subscribers("a6", 3, /*@__PURE__*/ _or_resume("a2", 1, ($scope) => _text($scope.a, check($scope._._.d, $scope._._.e))), 5, 0), 6, 0);
const $try_content__input_fail = /*@__PURE__*/ _closure_get(5, $try_content__input_fail__OR__input_x, ($scope) => $scope._._, "a0");
const $try_content__setup = ($scope) => {
	$try_content__input_fail($scope);
	$try_content__input_x($scope);
};
const $try_content__input_x = /*@__PURE__*/ _closure_get(6, $try_content__input_fail__OR__input_x, ($scope) => $scope._._, "a1");
const $wrap_content = _content$1("a5", "<!><!><!>", "b%", /* @__PURE__ */ _try(0, "<p> </p>", "D ", $try_content__setup, 0, $catch_content));
