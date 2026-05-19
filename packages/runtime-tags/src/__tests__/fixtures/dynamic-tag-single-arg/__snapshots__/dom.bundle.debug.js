// tags/custom-tag.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $input = ($scope, input) => _text($scope["#text/0"], input);
function $setup$1($scope) {
	_return($scope, "hello from other");
}
var custom_tag_default = /* @__PURE__ */ _template("__tests__/tags/custom-tag.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = "<button>Count: <!></button><!><!>";
const $walks = " Db%l%c";
const tags = [custom_tag_default];
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/2", 0, 0, 1);
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */ _let("x/3", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$dynamicTag($scope, tags[0], () => [$scope.x]);
	$x__script($scope);
});
function $setup($scope) {
	$x($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
