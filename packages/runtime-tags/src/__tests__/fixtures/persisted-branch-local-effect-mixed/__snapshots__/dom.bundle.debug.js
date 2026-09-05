// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content2__input_suffix__OR__label__script = _script("__tests__/template.marko_2_input_suffix#6_label#2", ($scope) => document.querySelector("main").dataset.label = $scope._.label + $scope._._.input_suffix);
const $if_content2__input_suffix__OR__label = /*@__PURE__*/ _or(0, $if_content2__input_suffix__OR__label__script);
const $if_content2__input_suffix = /*@__PURE__*/ _closure_get("input_suffix", $if_content2__input_suffix__OR__label, ($scope) => $scope._._);
const $if_content2__setup = ($scope) => {
	$if_content2__input_suffix($scope);
	$if_content2__label._($scope);
};
const $if_content2__label = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content2__input_suffix__OR__label);
const $if_content__label = /*@__PURE__*/ _const("label", ($scope) => {
	$if_content2__label($scope);
	_text($scope["#text/0"], $scope.label);
});
const $if_content__input_title = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__label($scope, $scope._.input_title + "!"));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__input_inner._($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/1", "<span>inner</span>", 0, $if_content2__setup);
const $if_content__input_inner = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__if($scope, $scope._.input_inner ? 0 : 1));
const $if = /*@__PURE__*/ _if("#main/0", "<p> </p><!><!>", "D l%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
	$input_inner($scope, input.inner);
	$input_suffix($scope, input.suffix);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
const $input_inner = /*@__PURE__*/ _const("input_inner", $if_content__input_inner);
const $input_suffix__closure = /*@__PURE__*/ _closure($if_content2__input_suffix);
const $input_suffix = /*@__PURE__*/ _const("input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
