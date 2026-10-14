// template.marko
const $else_content__input_label = /*@__PURE__*/ _fill_join_closure("a10", 3, _shell_subscribe_closure_get("a5", 5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a6"), 1);
const $else_content__setup = $else_content__input_label;
const $if_content__input_label = /*@__PURE__*/ _fill_join_closure("a10", 3, _shell_subscribe_closure_get("a3", 5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a4"), 0);
const $catch_content__if = /*@__PURE__*/ _if(0, "<b> </b>", "D ", $if_content__input_label, "<i> </i>", "D ", $else_content__setup);
const $catch_content__err_status = ($scope, err_status) => $catch_content__if($scope, err_status === 404 ? 0 : 1);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_status($scope, $params2[0]?.status);
const $catch_content = _content$1("a9", "<!><!><!>", "b%", 0, $catch_content__$params);
