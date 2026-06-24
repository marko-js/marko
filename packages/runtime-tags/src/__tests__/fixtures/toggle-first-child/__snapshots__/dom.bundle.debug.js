// template.marko
const $template = "<div><!><span></span><span></span></div>";
const $walks = "D%l";
const $setup = () => {};
const $if_content__input_value = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.value));
const $if_content__setup = $if_content__input_value;
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D l", $if_content__setup);
const $value = /*@__PURE__*/ _const("value", ($scope) => {
	$if($scope, $scope.value ? 0 : 1);
	$if_content__input_value($scope);
});
const $input = ($scope, input) => $value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
