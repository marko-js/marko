// template.marko
const $for_content__count__OR__i = /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope._._._.c * $scope.c));
const $for_content__count = /*@__PURE__*/ _closure_get(4, $for_content__count__OR__i, ($scope) => $scope._._._, "a0");
const $for_content__setup = $for_content__count;
const $for_content__i = /*@__PURE__*/ _const(2, $for_content__count__OR__i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<span class=inner> </span>", "D ", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [[1, 2]]);
const $tag_content__count = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.b, $scope._.c), 0, "a3");
const $tag_content__setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope._, +$scope._.c + 1);
	});
	_on($scope.d, "click", function() {
		$show($scope._, !$scope._.d);
	});
});
const $tag_content__if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__setup);
const $tag_content__show = /*@__PURE__*/ _closure_get(5, ($scope) => $tag_content__if($scope, $scope._.d ? 0 : 1), 0, "a4");
const $count = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($tag_content__count, $for_content__count));
const $show = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($tag_content__show));
