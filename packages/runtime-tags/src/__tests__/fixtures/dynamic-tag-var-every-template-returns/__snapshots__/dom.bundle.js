// tags/a.marko
const $template$1 = "<span>a</span>";
const $walks$1 = "b";
function $setup$1($scope) {
	_return($scope, "a");
}
var a_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("b", $template$1, "b", $setup$1));

// tags/b.marko
const $template = "<span>b</span>";
const $walks = "b";
function $setup($scope) {
	_return($scope, "b");
}
var b_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("c", $template, "b", $setup));

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, 0, () => $value);
const $isA = /*@__PURE__*/ _let(4, ($scope) => $dynamicTag($scope, $scope.e ? a_default : b_default));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$isA($scope, !$scope.e);
}));
const $value = _var_resume("a0", ($scope, value) => _text($scope.d, value));
