// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content("a1", "<p>loading</p>");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_promise = _resumed.a5 = withBranches(/*@__PURE__*/ _fill_join_closure("a3", 5, /*@__PURE__*/ _closure_get(7, ($scope) => $try_content__await_promise($scope, $scope._._.f), ($scope) => $scope._._, "a0"), 0));
