// tags/note.marko
const $template = "<span> </span>";
const $input_label__script = _script("b0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("mounted", $scope.d);
	},
	onDestroy: function() {
		console.log("destroyed", $scope.d);
	}
}));
const $input_label = /*@__PURE__*/ _const(3, ($scope) => {
	_text($scope.a, $scope.d);
	$input_label__script($scope);
});

// template.marko
const $placeholder_content2__setup = ($scope) => $input_label($scope.a, "inner placeholder");
const $placeholder_content2 = _content_resume("a1", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $placeholder_content2__setup);
const $placeholder_content__setup = ($scope) => $input_label($scope.a, "outer placeholder");
const $placeholder_content = _content_resume("a4", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $placeholder_content__setup);
const $await_content2__clicks__OR__inner = /*@__PURE__*/ _or(3, ($scope) => $input_label($scope.a, `${$scope.c} ${$scope._._._._.d}`));
const $await_content2__clicks = /*@__PURE__*/ _closure_get(4, $await_content2__clicks__OR__inner, ($scope) => $scope._._._._, "a0");
const $await_content__clicks = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.b, $scope._._.d), ($scope) => $scope._._, "a3");
const $clicks__closure = /*@__PURE__*/ _closure($await_content__clicks, $await_content2__clicks);
const $clicks = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$clicks__closure($scope);
});
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, +$scope.d + 1);
}));
