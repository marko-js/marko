// template.marko
const $settings = /*@__PURE__*/ _let(14, ($scope) => {
	$settings_theme($scope, $scope.o?.theme);
	$settings_count($scope, $scope.o?.count);
	$settings_removed($scope, $scope.o?.removed);
	$settings_kind($scope, $scope.o?.kind);
	$settings_first($scope, $scope.o?.first);
	$settings_width($scope, $scope.o?.width);
	$settings_picked($scope, $scope.o?.picked);
	$settings_rest($scope, $scope.o?.rest);
	$settings_fallback($scope, $scope.o?.fallback);
	$settings_lastKey($scope, $scope.o?.lastKey);
	$settings_lastTag($scope, $scope.o?.lastTag);
	$settings_copy($scope, $scope.o?.copy);
});
const $settings_theme = /*@__PURE__*/ _const(15, ($scope) => _text($scope.a, $scope.p));
const $settings_count = /*@__PURE__*/ _const(16, ($scope) => _text($scope.b, $scope.q));
const $settings_removed = /*@__PURE__*/ _const(17, ($scope) => _text($scope.c, $scope.r ?? "deleted"));
const $settings_kind = /*@__PURE__*/ _const(18, ($scope) => _text($scope.d, $scope.s));
const $settings_first = /*@__PURE__*/ _const(19, ($scope) => _text($scope.e, $scope.t));
const $settings_width = /*@__PURE__*/ _const(20, ($scope) => _text($scope.f, $scope.u));
const $settings_picked = /*@__PURE__*/ _const(21, ($scope) => _text($scope.g, $scope.v));
const $settings_rest = /*@__PURE__*/ _const(22, ($scope) => _text($scope.h, $scope.w));
const $settings_fallback = /*@__PURE__*/ _const(23, ($scope) => _text($scope.i, $scope.x));
const $settings_lastKey = /*@__PURE__*/ _const(24, ($scope) => _text($scope.j, $scope.y));
const $settings_lastTag = /*@__PURE__*/ _const(25, ($scope) => _text($scope.k, $scope.z));
const $settings_copy = /*@__PURE__*/ _const(26, ($scope) => $settings_copy_w($scope, $scope.a0?.w));
const $settings_copy_w = /*@__PURE__*/ _const(27, ($scope) => _text($scope.l, $scope.a1));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.m, "click", function() {
		$scope.o.theme = "light";
		$scope.o.count += $scope.o?.step;
		$scope.o.count++;
		delete $scope.o.removed;
		$scope.o.kind = typeof $scope.o?.step;
		[$scope.o.first] = $scope.o?.tags;
		({w: $scope.o.width} = $scope.o?.size);
		({[$scope.o?.key]: $scope.o.picked} = $scope.o?.size);
		[, ...$scope.o.rest] = $scope.o?.tags;
		[$scope.o.fallback = $scope.o?.step] = [];
		for ($scope.o.lastKey in $scope.o?.size);
		for ($scope.o.lastTag of $scope.o?.tags);
		$scope.o.copy = { w: ($scope.o?.size).w };
	});
	_on($scope.n, "click", function() {
		$settings($scope, { ...$scope.o });
	});
});
