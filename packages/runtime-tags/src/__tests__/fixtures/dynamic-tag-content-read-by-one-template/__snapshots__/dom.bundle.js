// tags/a.marko
const $template$1 = "<div>A <!></div>";
const $walks$1 = "Db%l";
const $input_x = ($scope, input_x) => _text($scope.a, input_x);
const $input$1 = ($scope, input) => $input_x($scope, input.x);
var a_default = /*@__PURE__*/ _template("b", $template$1, $walks$1, 0, $input$1);

// tags/b.marko
const $template = "<span>B <!></span>";
const $walks = "Db%l";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => $input_content($scope, input.content);
var b_default = /*@__PURE__*/ _template("c", $template, $walks, 0, $input);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content("a0", "Hello"));
const $useB = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, $scope.c ? b_default : a_default, () => ({ x: 1 })));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$useB($scope, !$scope.c);
}));
