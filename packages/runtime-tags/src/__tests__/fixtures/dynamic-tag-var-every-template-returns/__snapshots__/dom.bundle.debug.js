// tags/a.marko
const $template$2 = "<span>a</span>";
const $walks$2 = "b";
function $setup$2($scope) {
	_return($scope, "a");
}
var a_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("__tests__/tags/a.marko", $template$2, "b", $setup$2));

// tags/b.marko
const $template$1 = "<span>b</span>";
const $walks$1 = "b";
function $setup$1($scope) {
	_return($scope, "b");
}
var b_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("__tests__/tags/b.marko", $template$1, "b", $setup$1));

// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b1b D l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $value);
const $isA = /*@__PURE__*/ _let("isA/4", ($scope) => $dynamicTag($scope, $scope.isA ? a_default : b_default));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$isA($scope, !$scope.isA);
}));
function $setup($scope) {
	$isA($scope, true);
	$setup__script($scope);
}
const $value = _var_resume("__tests__/template.marko_0_value#5/var", ($scope, value) => _text($scope["#text/3"], value));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
