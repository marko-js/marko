// tags/custom-tag.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input = ($scope, input) => _text($scope["#text/0"], JSON.stringify(input));
var custom_tag_default = /* @__PURE__ */ _template("__tests__/tags/custom-tag.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = "<button>Count: <!></button><!><!><!><!><!>";
const $walks = " Db%l%b%b%b%c";
const tags = [custom_tag_default];
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/2", 0, 0, 1);
const $x = /* @__PURE__ */ _let("x/6", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$dynamicTag($scope, tags[0], () => [$scope.x, "foo"]);
});
const $dynamicTag2 = /* @__PURE__ */ _dynamic_tag("#text/3", 0, 0, 1);
const $dynamicTag3 = /* @__PURE__ */ _dynamic_tag("#text/4", 0, 0, 1);
const $dynamicTag4 = /* @__PURE__ */ _dynamic_tag("#text/5", 0, 0, 1);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 1);
	$dynamicTag2($scope, tags[0], () => [false]);
	$dynamicTag3($scope, tags[0], () => [true]);
	$dynamicTag4($scope, tags[0], () => [...["spread1", "spread2"]]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
