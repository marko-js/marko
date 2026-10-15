// tags/box.marko
const $template = "<div><!></div>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $box_content__input_label = /*@__PURE__*/ _fill_join_closure("a7", 5, _shell_subscribe_closure_get("a2", 8, ($scope) => _text($scope.c, $scope._._.f), ($scope) => $scope._._, "a13"), 0);
const $box_content__setup = ($scope) => {
	$box_content__input_label($scope);
	$box_content__count($scope);
	$box_content__err_message($scope);
};
const $box_content__count = _resumed.a11 = _closure_get(10, ($scope) => _text($scope.b, $scope._._.h), ($scope) => $scope._._, "a14");
const $box_content__err_message = /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.a, $scope._.d), 0, "a15");
const $box_content = /*@__PURE__*/ _content$1("a1", "<span><!> <!> <!></span>", "D%c%c%", $box_content__setup);
const $catch_content__setup = ($scope) => $input_content_direct($scope.a, $box_content($scope));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content__err_message = /*@__PURE__*/ _const(3, /* @__PURE__ */ _closure($box_content__err_message));
const $catch_content = _content$1("a5", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($box_content__count);
const $count = /*@__PURE__*/ _fill_let("a8", 7, ($scope) => {
	_text($scope.b, $scope.h);
	$count__closure($scope);
});
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
