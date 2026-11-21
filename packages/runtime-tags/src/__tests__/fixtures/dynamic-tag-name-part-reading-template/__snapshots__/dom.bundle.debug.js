// tags/a.marko
const $template$2 = "<div>A <!></div>";
const $walks$2 = "Db%l";
const $setup$2 = ($_) => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$1($scope, input.label);
var a_default = /*@__PURE__*/ _template("__tests__/tags/a.marko", $template$2, $walks$2, 0, $input$2);

// tags/b.marko
const $template$1 = "<div>B <!> <!></div>";
const $walks$1 = "Db%c%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_content($scope, input.content);
};
var b_default = /*@__PURE__*/ _template("__tests__/tags/b.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<div><!></div><!><!>";
const $walks = "D%l%c";
const $setup = ($_) => {};
const $inputtagBA_content__input_name = /*@__PURE__*/ _closure_get("input_name/7", ($scope) => _text($scope["#text/0"], $scope._.input_name), 0, "__tests__/template.marko_1_input_name#0:5/subscribe");
const $inputtagBA_content__setup = $inputtagBA_content__input_name;
const $inputtagBA_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $inputtagBA_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtagBA_content);
const $input_tag = ($scope, input_tag) => $dynamicTag($scope, input_tag !== b_default && a_default, ($_) => ({ label: "left" }));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_a = ($scope, input_a) => $dynamicTag2($scope, input_a ? a_default : b_default ? 1 : 2, ($_) => ({ label: "alternate" }));
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_name($scope, input.name);
	$input_a($scope, input.a);
};
const $input_name__closure = /*@__PURE__*/ _closure($inputtagBA_content__input_name);
const $input_name = /*@__PURE__*/ _const("input_name", $input_name__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
