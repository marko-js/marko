// template.marko
const $badge_content__walks = "D%b%l", $badge_content__template = "<em><!><!></em>";
const $badge_content__a = ($scope, a) => _text($scope.a, a);
const $badge_content__b = ($scope, b) => _text($scope.b, b);
const $badge_content__tag_params = ($scope, $params2) => {
	$badge_content__a($scope, $params2[0]);
	$badge_content__b($scope, $params2[1]);
};
const $if_content__input_parts = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $badge_content__tag_params($scope.a, [...$scope._.e])));
const $if_content__setup = $if_content__input_parts;
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($badge_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($badge_content__walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
