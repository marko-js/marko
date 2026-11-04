// tags/child.marko
const $fn__script = _script("b0", ($scope) => $scope.d());

// template.marko
const $flag = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $fa = ($scope) => function() {
	$flag($scope, 1);
	const m = document.querySelector("main");
	m.dataset.a = String(+(m.dataset.a || 0) + 1);
};
const $fb = ($scope) => function() {
	$flag($scope, 2);
	const m = document.querySelector("main");
	m.dataset.b = String(+(m.dataset.b || 0) + 1);
};
_resumed.a0 = $fa;
_resumed.a1 = $fb;
