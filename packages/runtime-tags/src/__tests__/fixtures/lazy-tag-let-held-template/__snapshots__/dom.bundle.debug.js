// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// template.marko
const $template = "<button>Inc</button><!><!>";
const $walks = " b%c";
const Child = _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $count__OR__Tag = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.Tag, () => ({ value: $scope.count })));
const $count = /*@__PURE__*/ _let("count/2", $count__OR__Tag);
const $Tag = /*@__PURE__*/ _let("Tag/3", $count__OR__Tag);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$Tag($scope, Child);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
