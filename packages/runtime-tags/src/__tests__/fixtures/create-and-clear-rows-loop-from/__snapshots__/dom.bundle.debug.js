// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_to("#div/0", "<!>, ", "%c", $for_content__setup);
const $input_from__OR__input_to__OR__input_step = /*@__PURE__*/ _or(6, ($scope) => $for($scope, [
	$scope.input_to,
	$scope.input_from,
	$scope.input_step
]), 2);
const $input_from = /*@__PURE__*/ _const("input_from", $input_from__OR__input_to__OR__input_step);
const $input_to = /*@__PURE__*/ _const("input_to", $input_from__OR__input_to__OR__input_step);
const $input_step = /*@__PURE__*/ _const("input_step", $input_from__OR__input_to__OR__input_step);
const $input = ($scope, input) => {
	$input_from($scope, input.from);
	$input_to($scope, input.to);
	$input_step($scope, input.step);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
