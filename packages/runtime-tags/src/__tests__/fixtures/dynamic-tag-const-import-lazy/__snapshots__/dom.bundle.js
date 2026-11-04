// template.marko
let $load_type_tag_input_value = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_value.mjs"));
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	$load_type_tag_input_value($scope.b, $scope.d);
	_text($scope.c, $scope.d);
});
const $valueChange = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
_resumed.b0 = $valueChange;

// child.marko
var child_exports = /* @__PURE__ */ __exportAll({
	$input_value: () => $input_value,
	$template: () => $template,
	$walks: () => $walks
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$scope.e($scope.f + 1);
}));
const $input_value = /*@__PURE__*/ _const(5, ($scope) => _text($scope.b, $scope.f));
