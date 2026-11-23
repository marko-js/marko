// template.marko
const $Label_content__textChange__script = _script("a10", ($scope) => _on($scope.a, "click", function() {
	$scope.f($scope.g + "!");
}));
const $Label_content__text = /*@__PURE__*/ _const(6, ($scope) => _text($scope.b, $scope.g));
const $Pair_content__$sideChange__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$scope.g(+$scope.f - 1);
}));
const $Pair_content__$sideChange = /*@__PURE__*/ _const(6, $Pair_content__$sideChange__script);
const $Pair_content__side = /*@__PURE__*/ _const(5, ($scope) => _text($scope.b, $scope.f));
const $Pair_content__tag_input_pair = ($scope, $pair) => {
	$Pair_content__side($scope, $pair.side);
	$Pair_content__$sideChange($scope, $pair.sideChange);
};
const $for_content__$amountChange__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$scope.f($scope.e + 5);
}));
const $for_content__$amountChange = /*@__PURE__*/ _const(5, $for_content__$amountChange__script);
const $for_content__amount = /*@__PURE__*/ _const(4, ($scope) => _text($scope.b, $scope.e));
const $for_content__$params = ($scope, $temp2) => {
	$for_content__amount($scope, $temp2.amount);
	$for_content__$amountChange($scope, $temp2.amountChange);
};
const $Counter_content__$valueChange__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$scope.f(+$scope.e + 1);
}));
const $Counter_content__value = /*@__PURE__*/ _const(4, ($scope) => _text($scope.b, $scope.e));
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	$Counter_content__value($scope.a, $scope.i);
	_text($scope.e, $scope.i);
});
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<button class=amount> </button>", " D ", 0, $for_content__$params);
const $total = /*@__PURE__*/ _let(9, ($scope) => {
	_text($scope.f, $scope.j);
	$for($scope, [[{
		amount: $scope.j,
		amountChange: $of($scope)
	}]]);
});
const $left = /*@__PURE__*/ _let(10, ($scope) => {
	$Pair_content__tag_input_pair($scope.c, {
		side: $scope.k,
		sideChange: $pair2($scope)
	});
	_text($scope.g, $scope.k);
});
const $label = /*@__PURE__*/ _let(11, ($scope) => {
	$Label_content__text($scope.d, $scope.l);
	_text($scope.h, $scope.l);
});
const $of = ($scope) => function(next) {
	$total($scope, next);
};
const $pair2 = ($scope) => function(next) {
	$left($scope, next);
};
const $textChange = ($scope) => (_new_label) => $label($scope, _new_label);
const $valueChange2 = ($scope) => (_new_count) => $count($scope, _new_count);
_resumed.a1 = $of;
_resumed.a2 = $pair2;
_resumed.a3 = $textChange;
_resumed.a0 = $valueChange2;
