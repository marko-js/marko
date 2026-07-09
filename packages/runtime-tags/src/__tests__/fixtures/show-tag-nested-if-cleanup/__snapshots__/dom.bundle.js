// template.marko
const $show_content__if = /*@__PURE__*/ _if(0, 0, 0, _script("a0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("nestedRef").textContent = "inner mount";
	},
	onDestroy: function() {
		document.getElementById("nestedRef").textContent = "inner destroy";
	}
})));
const $show_content__inner = /*@__PURE__*/ _show_closure(0, ($scope) => $show_content__if($scope, $scope._.e ? 0 : 1));
const $show_content__setup__script = _script("a1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "outer mount";
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = "outer destroy";
	}
}));
const $show_content__setup = ($scope) => {
	$show_content__inner._($scope);
	$show_content__setup__script($scope);
};
const $show2 = /*@__PURE__*/ _show_branch(0, "<!><!><!>", "b%c", $show_content__setup);
const $show = /*@__PURE__*/ _let(3, ($scope) => $show2($scope, $scope.d));
const $inner = /*@__PURE__*/ _let(4, $show_content__inner);
const $setup__script = _script("a2", ($scope) => {
	_on($scope.b, "click", function() {
		$inner($scope, !$scope.e);
	});
	_on($scope.c, "click", function() {
		$show($scope, !$scope.d);
	});
});
