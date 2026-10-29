// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Box_content__show__OR__label__OR__n = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/1"], $scope.show ? $scope.label + $scope.n : "-"), 2);
const $Box_content__n = _let("n/6", $Box_content__show__OR__label__OR__n);
const $Box_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Box_content__n($scope, +$scope.n + 1);
}));
const $Box_content__setup = ($scope) => {
	$Box_content__n($scope, 0);
	$Box_content__setup__script($scope);
};
const $Box_content__show = /*@__PURE__*/ _const("show", $Box_content__show__OR__label__OR__n);
const $Box_content__label = /*@__PURE__*/ _const("label", $Box_content__show__OR__label__OR__n);
const $Box_content__$params = ($scope, $params2) => {
	$Box_content__show($scope, $params2[0].show);
	$Box_content__label($scope, $params2[0].label);
};
const $Box_content = _content("__tests__/template.marko_1*content", "<button> </button>", " D ", $Box_content__setup, $Box_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_show__OR__input_label__OR__Tag = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_show", /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.Box, ($_) => ({
	show: $scope.input_show,
	label: $scope.input_label
})), 2)));
const $Box = /*@__PURE__*/ _const("Box", $input_show__OR__input_label__OR__Tag);
function $setup($scope) {
	$Box($scope, { content: $Box_content($scope) });
}
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_label__OR__Tag);
const $input_label = /*@__PURE__*/ _const("input_label", $input_show__OR__input_label__OR__Tag);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
