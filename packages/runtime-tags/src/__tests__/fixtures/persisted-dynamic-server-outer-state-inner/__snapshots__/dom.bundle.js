// box.marko
const $template = "<article><b> </b><!></article>";
const $walks = "E l%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(1);
const $input_k = ($scope, input_k) => _text($scope.a, input_k);

// template.marko
const $Box_content__input_label = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._);
const $Box_content = /*@__PURE__*/ _content$1("c0", " ", " ", $Box_content__input_label);
const $inputonCardnull_content__count = /*@__PURE__*/ _init_closure_get("c6", 8, ($scope) => $input_k($scope.a, $scope._.g));
const $inputonCardnull_content__setup = ($scope) => {
	$inputonCardnull_content__count($scope);
	$input_content_direct($scope.a, $Box_content($scope));
};
const $inputonCardnull_content = _content_resume("c1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks), $inputonCardnull_content__setup);
const $count = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($inputonCardnull_content__count));
const $setup__script = _script("c2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
