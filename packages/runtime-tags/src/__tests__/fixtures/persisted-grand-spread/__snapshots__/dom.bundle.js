// tags/mid/tags/leaf/index.marko
const $template$1 = "<em> </em>";
const $input_text$1 = ($scope, input_text) => _text($scope.a, input_text);

// tags/mid/index.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $input_text = ($scope, input_text) => $input_text$1($scope.a, input_text);

// template.marko
const $if_content__input_text = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_text($scope.a, $scope._.e)));
const $if_content__setup = $if_content__input_text;
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
