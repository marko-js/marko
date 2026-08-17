// tags/badge.marko
const $template = "<b class=badge>[<!>]</b>";
const $walks = "Db%l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);

// tags/card.marko
const $if_content__input_title = /*@__PURE__*/ _fill_join("c0", 5, /*@__PURE__*/ _if_closure(2, 0, ($scope) => $input_label($scope.a, $scope._.f)));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if(2, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("c1", 6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
