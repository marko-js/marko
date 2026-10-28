// template.marko
const $template = "<div>shown</div><!><!>";
const $walks = " b%c";
const $try_content__input_id = /*@__PURE__*/ _closure_get("input_id/7", ($scope) => _text($scope["#text/0"], $scope._.input_id), 0, "__tests__/template.marko_2_input_id#0:5/subscribe");
const $try_content__setup = $try_content__input_id;
const $placeholder_content__input_id = /*@__PURE__*/ _closure_get("input_id/7", ($scope) => _text($scope["#text/0"], $scope._.input_id), 0, "__tests__/template.marko_1_input_id#0:5/subscribe");
const $placeholder_content__setup = $placeholder_content__input_id;
const $placeholder_content = _content("__tests__/template.marko_1*content", "loading <!>", "b%", $placeholder_content__setup);
const $show = /*@__PURE__*/ _show("#div/0");
const $input_which__OR__input_id = /*@__PURE__*/ _or(6, ($scope) => $show($scope, $scope.input_which ? $scope.input_id : ""));
const $input_which = /*@__PURE__*/ _const("input_which", $input_which__OR__input_id);
const $input_id__closure = /*@__PURE__*/ _closure($placeholder_content__input_id, $try_content__input_id);
const $input_id = /*@__PURE__*/ _const("input_id", ($scope) => {
	$input_which__OR__input_id($scope);
	$input_id__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/1", "<p> </p>", "D ", $try_content__setup, $placeholder_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_id($scope, input.id);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
