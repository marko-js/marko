// tags/handlers.marko
const $template = "<div> </div>";
const $walks = "D l";
function shout(message) {
	return message.toUpperCase() + "!";
}
const $input_message = ($scope, input_message) => _text($scope, "a", input_message);
const $input = ($scope, input) => $input_message($scope, input.message);
var handlers_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/v:handlers.marko.register-shout.js
_resume("b0", shout);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $message = /*@__PURE__*/ _let(5, ($scope) => $dynamicTag($scope, handlers_default, () => ({ message: $scope.f })));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$message($scope, $scope.d($scope.e($scope.f)));
}));
