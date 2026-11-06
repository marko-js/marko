// tags/c2.marko
const $template = "<!><!><button class=inc></button>";
const $walks = "b%b b";
const $for_content__n__script = _script("b0", ($scope) => _lifecycle($scope, { onDestroy: function() {
	console.log("destroy", $scope._.c);
} }));
const $for_content__n = /*@__PURE__*/ _for_closure(0, $for_content__n__script, 3);
const $for_content__setup$1 = $for_content__n;
const $n = /*@__PURE__*/ _let(2, $for_content__n);
const $for$1 = /*@__PURE__*/ _for_of(0, 0, 0, $for_content__setup$1);
const $setup__script$1 = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$for$1($scope, [[{ id: 1 }], (item) => item.id]);
	$setup__script$1($scope);
}

// template.marko
const $for_content__setup = ($scope) => $setup($scope.a);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks), $for_content__setup);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, []);
}));
