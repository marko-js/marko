// template.marko
const $else_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a7", 1);
const $else_content__setup = $else_content__input_label;
const $if_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a7", 0);
const $catch_content__if = /*@__PURE__*/ _if(0, "<b> </b>", "D ", $if_content__input_label, "<i> </i>", "D ", $else_content__setup);
const $catch_content__$params = ($scope, $params2) => $catch_content__if($scope, $params2[0]?.status === 404 ? 0 : 1);
const $catch_content = _content$1("a4", "<!><!><!>", "b%", 0, $catch_content__$params);
