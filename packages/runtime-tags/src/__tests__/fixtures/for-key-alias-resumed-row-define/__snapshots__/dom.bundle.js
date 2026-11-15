// template.marko
const $Key_content__walks = "%b";
const $Key_content__template = "<!>";
const $if_content__setup = ($scope) => {
	$scope.a._ = $scope._;
	$Key_content__setup($scope.a);
};
const $Key_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $for_content__if = /*@__PURE__*/ _if(0, $Key_content__template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Key_content__walks), $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.c ? 0 : 1), 3);
const $show = /*@__PURE__*/ _let(2, $for_content__show);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
