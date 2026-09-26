// tags/child.marko
const $template$1 = "<span>child</span>";
const $walks$1 = "b";
var child_default = /*@__PURE__*/ _template("b", $template$1, "b");

// tags/returns.marko
const $template = "";
const $walks = "";
function $setup($scope) {
	_return($scope, "some");
}
var returns_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("c", "", "", $setup));

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(4, 0, () => $w);
const $returns = /*@__PURE__*/ _let(10, ($scope) => $dynamicTag($scope, $scope.k ? returns_default : child_default));
const $setup__script = _script("a2", ($scope) => _on($scope.j, "click", function() {
	$returns($scope, !$scope.k);
}));
const $w = _var_resume("a1", ($scope, w) => _text($scope.i, w === void 0 ? "none" : w));
