// template.marko
const $template = "<button>up</button><button>down</button><div> </div>";
const $walks = " b bD l";
function shout(message) {
	return message.toUpperCase() + "!";
}
const whisper = (message) => message.toLowerCase();
const $loud = /*@__PURE__*/ _let("loud/3");
const $quiet = /*@__PURE__*/ _let("quiet/4");
const $message = /*@__PURE__*/ _let("message/5", ($scope) => _text($scope, "#text/2", $scope.message));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$message($scope, $scope.loud($scope.message));
	});
	_on($scope["#button/1"], "click", function() {
		$message($scope, $scope.quiet($scope.message));
	});
});
function $setup($scope) {
	$loud($scope, shout);
	$quiet($scope, whisper);
	$message($scope, "Hello");
	$setup__script($scope);
}
_resume("__tests__/template.marko_0/export/shout", shout);
_resume("__tests__/template.marko_0/export/whisper", whisper);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
