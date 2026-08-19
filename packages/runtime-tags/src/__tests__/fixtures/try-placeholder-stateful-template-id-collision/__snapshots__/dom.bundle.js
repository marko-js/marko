// tags/n2.marko
const $template$2 = "<div class=n2> </div>";
const $walks$2 = "D l";
const $input_label$2 = ($scope, input_label) => _text($scope.a, input_label);
const $input$1 = ($scope, input) => $input_label$2($scope, input.label);
var n2_default = /*@__PURE__*/ _template("c", $template$2, "D l", 0, $input$1);

// tags/n5.marko
const $template$1 = "<button class=n5><!> <!></button>";
const $walks$1 = " D%c%l";
const $n$1 = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$2 = _script("f0", ($scope) => _on($scope.a, "click", function() {
	$n$1($scope, +$scope.g + 1);
}));
function $setup$1($scope) {
	$n$1($scope, 0);
	$setup__script$2($scope);
}
const $input_label$1 = ($scope, input_label) => _text($scope.b, input_label);
const $input = ($scope, input) => $input_label$1($scope, input.label);
var n5_default = /*@__PURE__*/ _template("f", $template$1, $walks$1, $setup$1, $input);

// tags/n1.marko
const $template = "<button class=n1><!> <!></button>";
const $walks = " D%c%l";
const $n = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// template.marko
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $await_content__clicks__OR__tag__OR__body = /*@__PURE__*/ _or(3, ($scope) => $await_content__dynamicTag($scope, $scope._._.f, () => ({ label: `${$scope.c} ${$scope._._.e}` })), 2);
const $await_content__clicks = /*@__PURE__*/ _closure_get(6, $await_content__clicks__OR__tag__OR__body, ($scope) => $scope._._, "a0");
const $await_content__tag = /*@__PURE__*/ _closure_get(7, $await_content__clicks__OR__tag__OR__body, ($scope) => $scope._._, "a1");
const $placeholder_content__clicks = /*@__PURE__*/ _closure_get(6, ($scope) => $input_label($scope.a, `placeholder ${$scope._.e}`));
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__clicks($scope);
	$setup($scope.a);
};
const $placeholder_content = _content_resume("a2", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $placeholder_content__setup);
const $clicks__closure = /*@__PURE__*/ _closure($placeholder_content__clicks, $await_content__clicks);
const $clicks = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$clicks__closure($scope);
});
const $tag = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($await_content__tag));
const $setup__script = _script("a4", ($scope) => {
	_on($scope.a, "click", function() {
		$clicks($scope, +$scope.e + 1);
	});
	_on($scope.c, "click", function() {
		$tag($scope, $scope.f === n5_default ? n2_default : n5_default);
	});
});
