// total: 287 (min) 176 (brotli)
// template.marko: 239 (min) 144 (brotli)
let $load_ChildA_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child-a.marko.input_value.mjs"));
let $load_ChildB_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child-b.marko.input_value.mjs"));
const $value__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.f + 1);
}));
const $value = /* @__PURE__ */ _let(5, ($scope) => {
	$load_ChildA_tag_input_value($scope.c, $scope.f);
	$load_ChildB_tag_input_value($scope.e, $scope.f);
	$value__script($scope);
});

// total: 80 (min) 82 (brotli)
// child-a.marko: 0 (min) 1 (brotli)
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// total: 82 (min) 86 (brotli)
// child-b.marko: 0 (min) 1 (brotli)
const $input_value = ($scope, input_value) => _text($scope.a, input_value * 2);
