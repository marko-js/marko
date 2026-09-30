// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__label__script = _script("__tests__/template.marko_1_label#0", ($scope) => document.querySelector("main").dataset.label = $scope.label);
const $if_content__label = /*@__PURE__*/ _const("label", $if_content__label__script);
const $if_content__input_title = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__label($scope, $scope._.input_title + "!"));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if("#main/0", "<p>shown</p>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
