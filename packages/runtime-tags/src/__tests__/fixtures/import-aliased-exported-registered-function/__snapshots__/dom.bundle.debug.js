// tags/greeting.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const whisper = (message) => message.toLowerCase();
function shout(message) {
	return message.toUpperCase() + "!";
}
const $input_message = ($scope, input_message) => _text($scope, "#text/0", input_message);
const $input = ($scope, input) => $input_message($scope, input.message);
var greeting_default = /*@__PURE__*/ _template("__tests__/tags/greeting.marko", $template$1, "D l", $setup$1, $input);

// tags/v:greeting.marko.register-shout.js
_resume("__tests__/tags/greeting.marko_0/export/shout", shout);

// tags/v:greeting.marko.register-whisper.js
_resume("__tests__/tags/greeting.marko_0/export/whisper", whisper);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>shout</button><button>whisper</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)("D l");
const $loud = /*@__PURE__*/ _let("loud/3");
const $quiet = /*@__PURE__*/ _let("quiet/4");
const $message = /*@__PURE__*/ _let("message/5", ($scope) => $input_message($scope["#childScope/2"], $scope.message));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$message($scope, $scope.loud($scope.message));
	});
	_on($scope["#button/1"], "click", function() {
		$message($scope, $scope.quiet($scope.message));
	});
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$loud($scope, shout);
	$quiet($scope, whisper);
	$message($scope, "Hello");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
