// tags/a.marko
const $template$1 = "<div>A <!> <!></div>";
const $walks$1 = "Db%c%l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(1);
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => {
	$input_label$1($scope, input.label);
	$input_content($scope, input.content);
};
var a_default = /*@__PURE__*/ _template("b", $template$1, $walks$1, 0, $input$1);

// tags/b.marko
const $template = "<div>B <!></div>";
const $walks = "Db%l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var b_default = /*@__PURE__*/ _template("c", $template, $walks, 0, $input);

// tags/v:a.marko.register-default.js
_resumed.b = a_default;

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2, /* @__PURE__ */ _content("a0", "Hello"));
const $Tag__OR__x = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.e ? b_default : $scope.d, ($_) => ({ label: "second" })));
const $x = /*@__PURE__*/ _let(4, $Tag__OR__x);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$x($scope, !$scope.e);
}));
