// tags/child.marko
const $template$1 = "<div>Id is <!></div>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $id = ($scope, id) => _text($scope["#text/0"], id);
const $input = ($scope, input) => $id($scope, input.id);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<button></button><!><!>";
const $walks = " b%c";
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $tagName = /* @__PURE__ */ _let("tagName/2", ($scope) => $dynamicTag($scope, $scope.tagName, () => ({ id: "dynamic" })));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$tagName($scope, $scope.tagName === child_default ? "div" : child_default);
}));
function $setup($scope) {
	$tagName($scope, child_default);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
