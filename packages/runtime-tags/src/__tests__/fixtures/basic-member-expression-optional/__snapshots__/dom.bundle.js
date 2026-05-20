// total: 2717 (min) 1417 (brotli)
// template.marko: 268 (min) 197 (brotli)
const names = [
	"Dylan",
	"Michael",
	"Ryan",
	"Luke"
];
const $index = /* @__PURE__ */ _let(3, _script("a0", ($scope) => _on($scope.c, "click", function() {
	$index($scope, $scope.d === names.length - 1 ? -1 : $scope.d + 1);
	$user($scope, $scope.d !== -1 && {
		id: $scope.d,
		name: names[$scope.d]
	});
})));
const $user = /* @__PURE__ */ _let(4, ($scope) => {
	$user_id($scope, $scope.e?.id);
	$user_name($scope, $scope.e?.name);
});
const $user_id = /* @__PURE__ */ _const(5, ($scope) => _text($scope.a, $scope.f));
const $user_name = /* @__PURE__ */ _const(6, ($scope) => _text($scope.b, $scope.g));
