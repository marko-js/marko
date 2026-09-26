// tags/counter.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("b0", " ", " ", 0, $catch_content__$params);

// child.marko
const $promise = /*@__PURE__*/ _const(0, _script("a0", ($scope) => (async () => {
	document.getElementById("ref").textContent = await $scope.a;
})()));
