// template.marko
const $load_Child_trigger = /*@__PURE__*/ _load_idle_trigger({ timeout: 100 });
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
const $value__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.d + 1);
}));
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	$load_Child_tag_input_value($scope.c, $scope.d);
	$value__script($scope);
});

// child.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
