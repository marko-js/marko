// tags/spread-attr-tag.marko
const $input_button__script = _script("c0", ($scope) => _attrs_script($scope, "a"));

// tags/spread-input.marko
const $input__script = _script("d0", ($scope) => _attrs_script($scope, "a"));

// tags/run-menu.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.d.item.run();
}));

// template.marko
const $spreadinput_content__count = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a5");
const $button_content__count = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a3");
const $count = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($button_content__count, $spreadinput_content__count));
const $run = ($scope) => function() {
	$count($scope, $scope.d + 10);
};
const $onClick2 = ($scope) => function() {
	$count($scope, +$scope.d - 1);
};
const $onClick = ($scope) => function() {
	$count($scope, +$scope.d + 1);
};
_resumed.a2 = $run;
_resumed.a1 = $onClick2;
_resumed.a0 = $onClick;
