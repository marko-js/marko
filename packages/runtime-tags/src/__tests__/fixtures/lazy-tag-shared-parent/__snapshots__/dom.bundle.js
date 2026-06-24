// tags/parent-a.marko
let $load_Child_tag_input_value$1 = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $input_value$1 = ($scope, input_value) => $load_Child_tag_input_value$1($scope.b, input_value);

// tags/parent-b.marko
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $input_value = ($scope, input_value) => $load_Child_tag_input_value($scope.b, input_value * 2);

// template.marko
const $value__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.d + 1);
}));
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	$input_value$1($scope.b, $scope.d);
	$input_value($scope.c, $scope.d);
	$value__script($scope);
});

// tags/child.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $setup__script = _script("b0", ($scope) => console.log("loaded"));
