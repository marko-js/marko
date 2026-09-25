// template.marko
const $box2__script = _script("a4", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.d.reveal = (n) => {
		$out($scope, `revealed ${n}`);
	};
} }));
const $out = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $setup__script = _script("a3", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.f(1);
	});
	_on($scope.b, "click", function() {
		$scope.g(2);
	});
});
const $show = ($scope) => (n) => {
	$scope.d.reveal(n);
};
const $call = ($scope) => (n) => {
	const reveal = $scope.d.reveal;
	reveal(n);
};
function $box(_n) {}
_resumed.a1 = $show;
_resumed.a2 = $call;
_resumed.a0 = $box;
