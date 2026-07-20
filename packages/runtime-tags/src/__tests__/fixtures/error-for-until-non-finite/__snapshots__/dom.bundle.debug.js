// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_until("#text/0", "<li> </li>", "D l", $for_content__setup);
const $input_until = ($scope, input_until) => $for($scope, [
	input_until,
	0,
	1
]);
const $input = ($scope, input) => $input_until($scope, input.until);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
