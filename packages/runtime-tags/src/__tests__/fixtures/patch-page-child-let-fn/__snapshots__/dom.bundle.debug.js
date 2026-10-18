// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_user_name = ($scope, input_user_name) => $input_fn($scope["#childScope/0"], function() {
	return "f:" + input_user_name;
});
const $input = ($scope, input) => $input_user($scope, input.user);
const $input_user = ($scope, input_user) => $input_user_name($scope, input_user?.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
const $f = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "f/5", ($scope) => _text($scope["#text/1"], $scope.f()));
const $input_fn = $f;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, () => "x");
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_fn($scope, input.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
