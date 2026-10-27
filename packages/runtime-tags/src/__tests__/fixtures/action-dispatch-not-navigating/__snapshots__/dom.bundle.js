// template.marko
const $prevented2__script = _script("a12", ($scope) => _on($scope.a, "submit", $scope.m));
const $prevented2 = _action(12, "a1", ($scope) => {
	$prevented_pending($scope, $scope.m?.pending);
	$prevented2__script($scope);
});
const $prevented_pending = /*@__PURE__*/ _const(14, ($scope) => _text($scope.b, $scope.o));
const $modified__script = _script("a11", ($scope) => _on($scope.c, "click", $scope.p));
const $modified = _action(15, "a2", ($scope) => {
	$modified_pending($scope, $scope.p?.pending);
	$modified__script($scope);
});
const $blank__script = _script("a10", ($scope) => _on($scope.e, "click", $scope.s));
const $blank = _action(18, "a3", ($scope) => {
	$blank_pending($scope, $scope.s?.pending);
	$blank__script($scope);
});
const $download__script = _script("a9", ($scope) => _on($scope.g, "click", $scope.v));
const $download = _action(21, "a4", ($scope) => {
	$download_pending($scope, $scope.v?.pending);
	$download__script($scope);
});
const $fragment__script = _script("a8", ($scope) => _on($scope.i, "click", $scope.y));
const $fragment = _action(24, "a5", ($scope) => {
	$fragment_pending($scope, $scope.y?.pending);
	$fragment__script($scope);
});
const $button__script = _script("a7", ($scope) => _on($scope.k, "click", $scope.a1));
const $button = _action(27, "a6", ($scope) => {
	$button_pending($scope, $scope.a1?.pending);
	$button__script($scope);
});
const $modified_pending = /*@__PURE__*/ _const(17, ($scope) => _text($scope.d, $scope.r));
const $blank_pending = /*@__PURE__*/ _const(20, ($scope) => _text($scope.f, $scope.u));
const $download_pending = /*@__PURE__*/ _const(23, ($scope) => _text($scope.h, $scope.x));
const $fragment_pending = /*@__PURE__*/ _const(26, ($scope) => _text($scope.j, $scope.a0));
const $button_pending = /*@__PURE__*/ _const(29, ($scope) => _text($scope.l, $scope.a3));
function $prevented(ev) {
	ev.preventDefault();
}
_resumed.a0 = $prevented;
