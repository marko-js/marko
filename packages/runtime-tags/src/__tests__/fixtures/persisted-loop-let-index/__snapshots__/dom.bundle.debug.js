// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $for_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $for_content__picks = /*@__PURE__*/ _fill_let("__tests__/template.marko0", "picks/5", ($scope) => _text($scope["#text/1"], $scope.picks));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$for_content__picks($scope, +$scope.picks + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__picks($scope, 0);
	$for_content__setup__script($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__label($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> <span> </span><button>+</button></li>", "D bD l ", $for_content__setup, $for_content__$params);
const $input_labels = ($scope, input_labels) => $for($scope, [input_labels]);
const $input = ($scope, input) => $input_labels($scope, input.labels);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
