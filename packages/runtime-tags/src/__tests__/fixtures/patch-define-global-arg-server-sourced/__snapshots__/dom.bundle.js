// template.marko
const $if_content__text = /*@__PURE__*/ _if_closure_patch("a2", 1, 0, ($scope) => _text($scope.a, $scope._.e));
const $Label_content__if = /*@__PURE__*/ _if(1, "<span> </span>", "D ", $if_content__text);
const $Label_content__open = /*@__PURE__*/ _closure_get(3, ($scope) => $Label_content__if($scope, $scope._.c ? 0 : 1), 0, "a3");
const $Label_content__text__script = _script("a1", ($scope) => document.getElementById("log").textContent = $scope.e);
const $open = _let(2, /* @__PURE__ */ _closure($Label_content__open));
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.c);
}));
