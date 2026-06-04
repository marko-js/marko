// total: 5809 (min) 2672 (brotli)
// template.marko: 191 (min) 145 (brotli)
const $if_content__message = /* @__PURE__ */ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.d));
const $if = /* @__PURE__ */ _if(1, "<span> </span>", "D l", $if_content__message);
const $show__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$message($scope, "bye");
	$show($scope, !$scope.c);
}));
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$show__script($scope);
});
const $message = /* @__PURE__ */ _let(3, $if_content__message);
