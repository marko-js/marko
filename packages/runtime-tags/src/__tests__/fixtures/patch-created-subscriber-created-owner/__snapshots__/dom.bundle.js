// tags/box.marko
const $template = "<div><!></div>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// tags/child.marko
const $box_content__input_label = /*@__PURE__*/ _closure_get_patch("c0", 5, ($scope) => _text($scope.b, $scope._._.d), ($scope) => $scope._._, "c7", 0);
const $box_content__setup = ($scope) => {
	$box_content__input_label($scope);
	$box_content__err_message($scope);
};
const $box_content__err_message = /*@__PURE__*/ _closure_get_patch("c1", 7, ($scope) => _text($scope.a, $scope._.d));
const $box_content = /*@__PURE__*/ _content$1("c2", "<span><!> <!></span>", "D%c%", $box_content__setup);
const $catch_content__setup = ($scope) => $input_content_direct($scope.a, $box_content($scope));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content__err_message = /*@__PURE__*/ _const(3, /* @__PURE__ */ _closure($box_content__err_message));
const $catch_content = _content$1("c4", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $catch_content__setup, $catch_content__$params);
const $setup__script = _script("c6", ($scope) => document.body.dataset.ready = "1");
