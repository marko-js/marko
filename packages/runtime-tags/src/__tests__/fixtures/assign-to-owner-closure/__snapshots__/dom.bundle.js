// total: 5605 (min) 2606 (brotli)
// template.marko: 125 (min) 99 (brotli)
const $if_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$hide($scope._, true);
}));
const $if = /* @__PURE__ */ _if(0, "<button></button>", " b", $if_content__setup);
const $hide = /* @__PURE__ */ _let(1, ($scope) => $if($scope, !$scope.b ? 0 : 1));
