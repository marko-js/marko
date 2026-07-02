// template.marko
let $load_ChildA_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child-a.marko.input_value.mjs"));
let $load_ChildB_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child-b.marko.input_value.mjs"));
const $value = /* @__PURE__ */ _let(5, ($scope) => {
	$load_ChildA_tag_input_value($scope.c, $scope.f);
	$load_ChildB_tag_input_value($scope.e, $scope.f);
});
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.f + 1);
}));

// child-a.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $setup__script = _script("a0", ($scope) => console.log("loaded a"));

// child-b.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value * 2);
const $setup__script = _script("b0", ($scope) => console.log("loaded b"));
