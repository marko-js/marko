// tags/child.marko
const $if_content__input_obj__OR__input_count__OR__item__script = _script("b0", ($scope) => document.body.dataset.seen = JSON.stringify([
	$scope._._.d,
	$scope._._.g,
	$scope._.c
]));
const $if_content__input_obj__OR__input_count__OR__item = /*@__PURE__*/ _or(1, $if_content__input_obj__OR__input_count__OR__item__script, 2);
const $if_content__input_obj = /*@__PURE__*/ _closure_get(7, $if_content__input_obj__OR__input_count__OR__item, ($scope) => $scope._._, "b1");
const $if_content__setup = ($scope) => {
	$if_content__input_obj($scope);
	$if_content__input_count($scope);
	$if_content__item._($scope);
};
const $if_content__input_count = /*@__PURE__*/ _closure_get(9, $if_content__input_obj__OR__input_count__OR__item, ($scope) => $scope._._, "b2");
const $if_content__item = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_text($scope.a, $scope._.c);
	$if_content__input_obj__OR__input_count__OR__item($scope);
});
const $for_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D ", $if_content__setup);
const $for_content__input_obj_show = /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.f ? 0 : 1), 8);
const $for_content__setup = $for_content__input_obj_show;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = /*@__PURE__*/ _const(2, $if_content__item);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_obj__closure = /*@__PURE__*/ _closure($if_content__input_obj);
const $input_obj = /*@__PURE__*/ _const(3, ($scope) => {
	$for($scope, [$scope.d?.list]);
	$input_obj_show($scope, $scope.d?.show);
	$input_obj__closure($scope);
});
const $input_obj_show = /*@__PURE__*/ _const(5, $for_content__input_obj_show);
const $input_count__closure = /*@__PURE__*/ _closure($if_content__input_count);
const $input_count = /*@__PURE__*/ _const(6, $input_count__closure);

// template.marko
const $obj = /*@__PURE__*/ _let(2, ($scope) => $input_obj($scope.b, $scope.c));
const $count = /*@__PURE__*/ _let(3, ($scope) => $input_count($scope.b, $scope.d));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$obj($scope, {
		list: ["a"],
		show: true,
		name: "second"
	});
	$count($scope, +$scope.d + 1);
}));
