// tags/counter.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// template.marko
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("b0", " ", " ", 0, $catch_content__err);

// child.marko
const $promise__script = _script("a0", ($scope) => (async () => {
	document.getElementById("ref").textContent = await $scope.a;
})());
