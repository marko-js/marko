// template.marko
const $if = /* @__PURE__ */ _if(0, "<button></button>", " b", _script("a0", ($scope) => _on($scope.a, "click", function() {
	$hide($scope._, true);
})));
const $hide = /* @__PURE__ */ _let(1, ($scope) => $if($scope, !$scope.b ? 0 : 1));
