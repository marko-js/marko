// tags/card.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $for_content__$params = ($scope, $params2) => $input_content($scope["#childScope/0"], $params2[0]);
const $Field_content__input_label = /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/2"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:4/subscribe");
const $Field_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $Field_content__setup = ($scope) => {
	$Field_content__input_label($scope);
	$Field_content__uid($scope, _id($scope));
};
const $Field_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<input><label> </label>", " b D ", $Field_content__setup);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let("rows/6", ($scope) => $for($scope, [$scope.rows]));
const $Field = ($scope, Field) => $rows($scope, [Field, Field]);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$rows($scope, []);
}));
function $setup($scope) {
	$Field($scope, { content: $Field_content($scope) });
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($Field_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
