// tags/card.marko
const $template$1 = "<section><button>clear</button><!><p> </p></section>";
const $walks$1 = "D b%bD m";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/8", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input_user_name = ($scope, input_user_name) => _text($scope["#text/2"], input_user_name);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_user$1($scope, input.user);
};
const $input_user$1 = ($scope, input_user) => $input_user_name($scope, input_user?.name);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $card_content = _content("__tests__/template.marko_1*content", "<em>static</em>");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_user = ($scope, input_user) => $input_user$1($scope["#childScope/0"], input_user);
const $input = ($scope, input) => $input_user($scope, input.user);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
