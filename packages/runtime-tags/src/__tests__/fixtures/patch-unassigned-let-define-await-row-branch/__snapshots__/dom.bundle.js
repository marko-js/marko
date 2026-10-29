// template.marko
const $Body_content__walks = "b%c";
const $Body_content__template = "<!><!><!>";
const $if_content__setup = ($scope) => {
	$scope.a._ = $scope._._;
	$Body_content__setup($scope.a);
};
const $for_content__if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks), $if_content__setup);
const $for_content__show = _resumed.a11 = /*@__PURE__*/ _init_resume("a10", /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.g ? 0 : 1)));
const $await_content__input_w__OR__r = _resumed.a12 = withBranches(/*@__PURE__*/ _fill_join_subscribers("a7", 5, /*@__PURE__*/ _or_resume("a1", 3, ($scope) => _text($scope.a, $scope.c + $scope._._.f)), 8, 0));
const $await_content__input_w = /*@__PURE__*/ _closure_get(8, $await_content__input_w__OR__r, ($scope) => $scope._._, "a0");
const $await_content__setup = $await_content__input_w;
const $await_content__r = /*@__PURE__*/ _const(2, $await_content__input_w__OR__r);
const $await_content__$params = ($scope, $params2) => $await_content__r($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<p> </p>", "D ", $await_content__setup);
const $Body_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $Body_content__input_v = _resumed.a13 = withBranches(/*@__PURE__*/ _fill_join_closure("a6", 4, /*@__PURE__*/ _closure_get(7, ($scope) => $Body_content__await_promise($scope, Promise.resolve($scope._.e)), 0, "a5"), 0));
const $Body_content__setup = ($scope) => {
	$Body_content__input_v($scope);
	$await_content($scope);
};
