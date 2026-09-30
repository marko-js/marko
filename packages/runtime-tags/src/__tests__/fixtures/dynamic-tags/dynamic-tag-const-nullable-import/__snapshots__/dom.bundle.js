// tags/custom-tag.marko
const $template = "<div class=custom>custom <!> body</div>";
const $walks = "Db%l";
const $input_content = ($scope, input_content) => _text($scope.a, input_content ? "with" : "without");
const $input = ($scope, input) => $input_content($scope, input.content);
var custom_tag_default = /*@__PURE__*/ _template("b", $template, $walks, 0, $input);

// template.marko
const $x = /* @__PURE__ */ _dynamic_tag(0, /* @__PURE__ */ _content("a0", "Fallback Body"));
const $show = /*@__PURE__*/ _let(2, ($scope) => $x($scope, $scope.c ? custom_tag_default : null));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
