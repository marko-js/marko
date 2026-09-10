// template.marko
const $Wrapper_content__if = /*@__PURE__*/ _if(0, "<b>on</b>", 0, 0, "<i>off</i>");
const $Wrapper_content__on = /*@__PURE__*/ _closure_get(3, ($scope) => $Wrapper_content__if($scope, $scope._.c ? 0 : 1));
const $on = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($Wrapper_content__on));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));
