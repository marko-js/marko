// template.marko
const $template = "<button>reveal</button><!><!><!><!><!>";
const $walks = " b%b%b%b%c";
const $show = /*@__PURE__*/ _show("#text/4", "#text/1", "#text/3");
const $reveal = /*@__PURE__*/ _let("reveal/8", ($scope) => $show($scope, $scope.reveal));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$reveal($scope, !$scope.reveal);
}));
function $setup($scope) {
	$reveal($scope, false);
	$setup__script($scope);
}
const $input_note = ($scope, input_note) => _text($scope["#text/2"], input_note);
const $input = ($scope, input) => $input_note($scope, input.note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
