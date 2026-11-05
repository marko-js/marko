// tags/c2.marko
const $template = "<!><!><!>";
const $for_content__setup$1 = _script("b0", ($scope) => _lifecycle($scope, { onDestroy: function() {
	console.log("destroy");
} }));
const $for$1 = /*@__PURE__*/ _for_of(0, 0, 0, $for_content__setup$1);
function $setup($scope) {
	$for$1($scope, [[{ id: 1 }], (item) => item.id]);
}

// template.marko
const $for_content__setup = ($scope) => $setup($scope.a);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $for_content__setup);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, []);
}));
