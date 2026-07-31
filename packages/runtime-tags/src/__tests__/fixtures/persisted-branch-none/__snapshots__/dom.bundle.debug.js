// template.marko
const $template = "<div><!><p> </p></div>";
const $walks = "D%bD m";
const $setup = () => {};
const $if_content__input_text = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_text));
const $if_content__setup = $if_content__input_text;
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_after = ($scope, input_after) => _text($scope["#text/1"], input_after);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_text($scope, input.text);
	$input_after($scope, input.after);
};
const $input_text = /*@__PURE__*/ _const("input_text", $if_content__input_text);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
