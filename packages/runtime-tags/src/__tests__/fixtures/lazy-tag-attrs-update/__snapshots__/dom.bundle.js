// total: 221 (min) 163 (brotli)
// template.marko: 162 (min) 131 (brotli)
let $lazy_Child_tag_input_value = /* @__PURE__ */ _lazy_signal(() => import("./v:child.marko.input_value.mjs"));
const $value__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.d + 1);
}));
const $value = /* @__PURE__ */ _let(3, ($scope) => {
	$lazy_Child_tag_input_value($scope.c, $scope.d);
	$value__script($scope);
});

// total: 64 (min) 68 (brotli)
// child.marko: 0 (min) 1 (brotli)
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
