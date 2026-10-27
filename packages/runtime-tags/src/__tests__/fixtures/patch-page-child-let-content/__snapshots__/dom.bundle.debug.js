// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em>static</em>");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_user = ($scope, input_user) => $input_user$1($scope["#childScope/0"], input_user);
const $input = ($scope, input) => $input_user($scope, input.user);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template = "<section><button>clear</button><!><p> </p></section>";
const $walks = "D b%bD m";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/8", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup = $setup__script;
const $input_user_name = ($scope, input_user_name) => _text($scope["#text/2"], input_user_name);
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_user($scope, input.user);
};
const $input_user = ($scope, input_user) => $input_user_name($scope, input_user?.name);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
