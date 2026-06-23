// tags/child.marko
const $template$1 = "<span>Hello</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "b", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<section>${_w0}</section><div> </div>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `D/${_w0}&lD l`)("b");
const $count = /* @__PURE__ */ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$count($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
