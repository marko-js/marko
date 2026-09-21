// tags/plain.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<button id=inc> </button><!><!>";
const $walks = " D l%c";
const $inputdepthSelfPlain_content = _content_resume("__tests__/template.marko_1*content", "self recursive host: registered");
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $inputdepthSelfPlain_content);
const $input_depth = ($scope, input_depth) => $dynamicTag($scope, input_depth ? template_default : plain_default, () => ({ depth: 0 }));
const $input = ($scope, input) => $input_depth($scope, input.depth);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
