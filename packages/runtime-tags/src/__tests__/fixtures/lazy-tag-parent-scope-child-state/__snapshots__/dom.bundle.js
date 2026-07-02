// template.marko
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $value = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$load_Child_tag_input_value($scope.d, $scope.e);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.e + 1);
}));

// child.marko
const $count = /* @__PURE__ */ _let(6, ($scope) => _text($scope.c, $scope.g));
const $input_value = ($scope, input_value) => {
	_text($scope.b, input_value);
	$count($scope, input_value);
};
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
