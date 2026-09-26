// template.marko
const $await_content2__v = ($scope, v) => _text($scope.a, v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	console.log($scope.d);
}));
const $placeholder_content = _content("a1", "loading");
const $await_content2 = /*@__PURE__*/ _await_content(2, " ", " ");
const $for_content__await_promise = /*@__PURE__*/ _await_promise(2, $await_content2__$params);
const $for_content__setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$items($scope._, $scope._.c.filter((i) => i !== $scope.M));
}));
const $for_content__setup = ($scope) => {
	_text($scope.b, $scope.M);
	$await_content2($scope);
	$for_content__await_promise($scope, resolveAfter($scope.M, $scope.M));
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of(1, "<button><!>:<!></button>", " D%c%", $for_content__setup);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c, (x) => x]));
