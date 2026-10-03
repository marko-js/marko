// template.marko
const initial = $initial;
const $box__script = _script("a3", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.d.reveal = (n) => {
		$out($scope, `revealed ${n}`);
	};
} }));
const $out = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.f(1);
	});
	_on($scope.b, "click", function() {
		$out($scope, `${$scope.e} ${$scope.d.reveal === initial ? "initial" : "replaced"}`);
	});
});
function $initial(_n) {}
const $show = ($scope) => (n) => {
	$scope.d.reveal(n);
};
_resumed.a0 = $initial;
_resumed.a1 = $show;
