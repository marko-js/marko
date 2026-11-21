// tags/compact.marko
const $template$2 = "<div>compact <!> <!></div>";
const $walks$2 = "Db%c%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => {
	$input_label$1($scope, input.label);
	$input_content($scope, input.content);
};
var compact_default = /*@__PURE__*/ _template("__tests__/tags/compact.marko", $template$2, $walks$2, 0, $input$1);

// tags/full.marko
const $template$1 = "<div>full <!></div>";
const $walks$1 = "Db%l";
const $setup$1 = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var full_default = /*@__PURE__*/ _template("__tests__/tags/full.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $compactCompactFull_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "Hello");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $compactCompactFull_content);
const $compact = /*@__PURE__*/ _let("compact/2", ($scope) => $dynamicTag($scope, $scope.compact && compact_default || full_default, ($_) => ({ label: "row" })));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$compact($scope, !$scope.compact);
}));
function $setup($scope) {
	$compact($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
