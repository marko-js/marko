// tags/handlers.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
function shout(message) {
	return message.toUpperCase() + "!";
}
const $input_message = ($scope, input_message) => _text($scope, "#text/0", input_message);
const $input = ($scope, input) => $input_message($scope, input.message);
var handlers_default = /*@__PURE__*/ _template("__tests__/tags/handlers.marko", $template$1, "D l", $setup$1, $input);

// tags/v:handlers.marko.register-shout.js
_resume("__tests__/tags/handlers.marko_0/export/shout", shout);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $loud = /*@__PURE__*/ _let("loud/3");
const $quiet = /*@__PURE__*/ _let("quiet/4");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $message = /*@__PURE__*/ _let("message/5", ($scope) => $dynamicTag($scope, handlers_default, () => ({ message: $scope.message })));
const $label = ($scope, label) => _text($scope, "#text/1", label);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message($scope, $scope.loud($scope.quiet($scope.message)));
}));
function $setup($scope) {
	$loud($scope, shout);
	$quiet($scope, shout);
	$message($scope, "Hello");
	$label($scope, "static");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
