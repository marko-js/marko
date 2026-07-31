// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__setup = ($scope) => _text($scope, "#text/0", $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_to("#text/0", "<li> </li>", "D ", $for_content__setup);
const $input_from = ($scope, input_from) => $for($scope, [
	5,
	input_from,
	1
]);
const $input = ($scope, input) => $input_from($scope, input.from);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
