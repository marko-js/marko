// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $T = /*@__PURE__*/ _let("T/4", ($scope) => $dynamicTag($scope, $scope.T));
const $input_fmt = $T;
const $input$1 = ($scope, input) => $input_fmt($scope, input.fmt);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $Body_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"] + $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe");
const $Body_content__setup = $Body_content__input_label;
const $Body_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<p> </p>", "D ", $Body_content__setup);
const $for_content__Body = ($scope, Body) => $input_fmt($scope["#childScope/0"], Body);
const $for_content__setup = ($scope) => $for_content__Body($scope, { content: $Body_content($scope) });
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (v) => v]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($Body_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
