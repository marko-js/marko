// tags/c2.marko
const $template = "<!><!><!><button class=inc></button>";
const $walks = "b%b%b b";
const $if_content2__setup = _script("b0", ($scope) => _lifecycle($scope, { onDestroy: function() {
	console.log("destroy static");
} }));
const $if_content__n__script = _script("b1", ($scope) => _lifecycle($scope, { onDestroy: function() {
	console.log("destroy reading state", $scope._.g);
} }));
const $if_content__n = /*@__PURE__*/ _if_closure(1, 0, $if_content__n__script);
const $if_content__setup = $if_content__n;
const $n = /*@__PURE__*/ _let(6, $if_content__n);
const $setup__script$1 = _script("b2", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
const $if = /*@__PURE__*/ _if(0, 0, 0, $if_content2__setup);
const $if2 = /*@__PURE__*/ _if(1, 0, 0, $if_content__setup);
const $input_on = ($scope, input_on) => {
	$if($scope, input_on ? 0 : 1);
	$if2($scope, input_on ? 0 : 1);
};

// template.marko
const $for_content__setup = ($scope) => {
	$setup($scope.a);
	$input_on($scope.a, true);
};
const $for = /*@__PURE__*/ _for_of_unkeyed(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks), $for_content__setup);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, []);
}));
