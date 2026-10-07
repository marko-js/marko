// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input);

// tags/v:child.marko.register-default.js
_resumed["__tests__/tags/child.marko"] = child_default;

// template.marko
const $template = "<!><!><button>inc</button>";
const $walks = "b%b b";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $count__OR__Tag = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.Tag, () => ({ value: $scope.count })));
const $count = /*@__PURE__*/ _let("count/2", $count__OR__Tag);
const $Tag = /*@__PURE__*/ _let("Tag/3", $count__OR__Tag);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$Tag($scope, child_default);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
