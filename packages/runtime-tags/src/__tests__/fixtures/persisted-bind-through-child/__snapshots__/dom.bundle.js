// tags/store.marko
const $last = /*@__PURE__*/ _fill_let("c0", 0, ($scope) => _return($scope, {
	last: $scope.a,
	set: $_return($scope)
}));
const $_return = ($scope) => function(next) {
	$last($scope, next);
};
_resume("c0", $_return);

// tags/child.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("b1", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__input_on = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__count($scope, 0, $scope._.e)));
const $if_content__setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, +$scope.c + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_on._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if(0, "<span>Seen <!></span><button>+</button>", "Db%l ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_on = /*@__PURE__*/ _fill_const("b0", 4, $if_content__input_on);

// template.marko
const $store = _var_resume("a0", ($scope, store) => {
	$store_last($scope, store?.last);
	$store_set($scope, store?.set);
});
const $store_last = ($scope, store_last) => _text($scope.c, store_last);
const $store_set = ($scope, store_set) => $input_on($scope.d, store_set);
const $input_show = _fill_const("a0", 6, ($scope) => $input_show$1($scope.d, $scope.g));
