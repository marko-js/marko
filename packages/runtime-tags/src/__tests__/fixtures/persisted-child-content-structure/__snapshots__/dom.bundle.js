// tags/box/index.marko
const $template = "<div class=box><!></div>";
const $setup = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("a1", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, "t:" + $scope._._._.f), ($scope) => $scope._._._), 0);
const $box_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__input_title);
const $box_content__input_show = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(7, ($scope) => $box_content__if($scope, $scope._._.e ? 0 : 1), ($scope) => $scope._._), 0);
const $box_content = /*@__PURE__*/ _content("a0", "<!><!><!>", "b%", $box_content__input_show);
const $if_content__setup = ($scope) => {
	/* @__PURE__ */ $setup($scope.a);
	$input_content_direct($scope.a, $box_content($scope));
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
