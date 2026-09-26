// tags/child.marko
const $template$2 = "<span>child</span>";
const $walks$2 = "b";
const $setup$2 = () => {};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "b");

// tags/returns.marko
const $template$1 = "";
const $walks$1 = "";
function $setup$1($scope) {
	_return($scope, "some");
}
var returns_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("__tests__/tags/returns.marko", "", "", $setup$1));

// template.marko
const $Foo_content__walks = "b", $Foo_content__template = "<b>foo</b>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!><div class=x> </div><div class=z> </div><div class=w> </div><button>toggle</button>`)($template$2, $Foo_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&0${_w1}&1bD lD lD l b`)("b", $Foo_content__walks);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/4", 0, () => $w);
const $returns = /*@__PURE__*/ _let("returns/10", ($scope) => $dynamicTag($scope, $scope.returns ? returns_default : child_default));
const $x = ($scope, x) => _text($scope["#text/6"], x === undefined ? "none" : x);
const $z = ($scope, z) => _text($scope["#text/7"], z === undefined ? "none" : z);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/9"], "click", function() {
	$returns($scope, !$scope.returns);
}));
function $setup($scope) {
	$returns($scope, false);
	$x($scope, void 0);
	$z($scope, void 0);
	$setup__script($scope);
}
const $w = _var_resume("__tests__/template.marko_0_w#13/var", ($scope, w) => _text($scope["#text/8"], w === undefined ? "none" : w));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
