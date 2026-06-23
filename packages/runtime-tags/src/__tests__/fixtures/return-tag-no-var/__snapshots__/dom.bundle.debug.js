// tags/child.marko
const $template$1 = "<span>child</span>";
const $walks$1 = "b";
const $x = /* @__PURE__ */ _let("x/0", ($scope) => _return($scope, $scope.x));
function $setup$1($scope) {
	$x($scope, 1);
}
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "b", $setup$1);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)("b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
