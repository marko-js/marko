// tags/card.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D l", 0, $input$2);

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content__T__OR__v = /*@__PURE__*/ _or(3, ($scope) => $await_content__dynamicTag($scope, $scope._.T, ($_) => ({ label: $scope.v })));
const $await_content__T = /*@__PURE__*/ _closure_get("T/6", $await_content__T__OR__v);
const $await_content__setup = $await_content__T;
const $await_content__v = /*@__PURE__*/ _const("v", $await_content__T__OR__v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $T = /*@__PURE__*/ _let("T/5");
const $input_fmt = $T;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_label$1 = ($scope, input_label) => $await_promise($scope, Promise.resolve(input_label));
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", $setup$1, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_fmt($scope["#childScope/0"], card_default);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
