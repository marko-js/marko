// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_to("#text/0", "<li> </li>", "D l", $for_content__setup);
const $input_to = ($scope, input_to) => $for($scope, [
	input_to,
	0,
	1
]);
const $input = ($scope, input) => $input_to($scope, input.to);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
