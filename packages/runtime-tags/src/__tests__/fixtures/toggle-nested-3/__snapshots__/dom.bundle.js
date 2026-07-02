// template.marko
const $if_content2__count = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._);
const $if_content2__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope._._, $scope._._.e + 1);
}));
const $if_content2__setup = ($scope) => {
	$if_content2__count($scope);
	$if_content2__setup__script($scope);
};
const $if_content__if = /* @__PURE__ */ _if(1, "<button id=count> </button>", " D l", $if_content2__setup);
const $if_content__inner = /* @__PURE__ */ _if_closure(1, 0, ($scope) => $if_content__if($scope, $scope._.d ? 0 : 1));
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$inner($scope._, !$scope._.d);
}));
const $if_content__setup = ($scope) => {
	$if_content__inner._($scope);
	$if_content__setup__script($scope);
};
const $if = /* @__PURE__ */ _if(1, "<button id=inner></button><!><!>", " b%c", $if_content__setup);
const $outer = /* @__PURE__ */ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $inner = /* @__PURE__ */ _let(3, $if_content__inner);
const $count = /* @__PURE__ */ _let(4, /* @__PURE__ */ _closure($if_content2__count));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$outer($scope, !$scope.c);
}));
