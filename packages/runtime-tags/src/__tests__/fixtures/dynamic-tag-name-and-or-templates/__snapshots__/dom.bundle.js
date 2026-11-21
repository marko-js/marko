// tags/compact.marko
const $template$1 = "<div>compact <!> <!></div>";
const $walks$1 = "Db%c%l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(1);
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => {
	$input_label$1($scope, input.label);
	$input_content($scope, input.content);
};
var compact_default = /*@__PURE__*/ _template("b", $template$1, $walks$1, 0, $input$1);

// tags/full.marko
const $template = "<div>full <!></div>";
const $walks = "Db%l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var full_default = /*@__PURE__*/ _template("c", $template, $walks, 0, $input);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1, /* @__PURE__ */ _content("a0", "Hello"));
const $compact = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, $scope.c && compact_default || full_default, ($_) => ({ label: "row" })));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$compact($scope, !$scope.c);
}));
