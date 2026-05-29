// total: 8506 (min) 3819 (brotli)
// template.marko: 610 (min) 339 (brotli)
const $else_content__count = /* @__PURE__ */ _if_closure(0, 1, ($scope) => _text($scope.b, $scope._.c));
const $else_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$for_content__editing($scope._, true);
}));
const $else_content__setup = ($scope) => {
	$else_content__count._($scope);
	$else_content__setup__script($scope);
};
const $if_content__counts__OR__count = /* @__PURE__ */ _or(2, _script("a0", ($scope) => _on($scope.a, "click", function() {
	$counts($scope._._, [
		...$scope._._.b.slice(0, $scope._.M),
		$scope._.c + 1,
		...$scope._._.b.slice($scope._.M + 1)
	]);
	$for_content__editing($scope._, false);
})));
const $if_content__counts = /* @__PURE__ */ _closure_get(1, $if_content__counts__OR__count, ($scope) => $scope._._);
const $if_content__setup = ($scope) => {
	$if_content__counts($scope);
	$if_content__count._($scope);
};
const $if_content__count = /* @__PURE__ */ _if_closure(0, 0, ($scope) => {
	_text($scope.b, $scope._.c + 1);
	$if_content__counts__OR__count($scope);
});
const $for_content__if = /* @__PURE__ */ _if(0, "<button>Confirm <!></button>", " Db%l", $if_content__setup, "<button>Increment <!></button>", " Db%l", $else_content__setup);
const $for_content__editing = /* @__PURE__ */ _let(4, ($scope) => $for_content__if($scope, $scope.e ? 0 : 1));
const $for_content__setup = ($scope) => $for_content__editing($scope, false);
const $for_content__$params = ($scope, $params2) => $for_content__count($scope, $params2[0]);
const $for_content__count = /* @__PURE__ */ _const(2, ($scope) => {
	$if_content__count($scope);
	$else_content__count($scope);
});
const $for = /* @__PURE__ */ _for_of(0, "<!><!><!>", "b%c", $for_content__setup, $for_content__$params);
const $counts__closure = /* @__PURE__ */ _closure($if_content__counts);
const $counts = /* @__PURE__ */ _let(1, ($scope) => {
	$for($scope, [$scope.b]);
	$counts__closure($scope);
});
