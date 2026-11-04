// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
const $setup = ($_) => {};
const $for_content__label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_label#1:4/subscribe", "label/5", ($scope) => _text($scope["#text/0"], $scope._._.label), ($scope) => $scope._._, "__tests__/template.marko_1_label#4/subscribers", 0);
const $for_content__setup = $for_content__label;
const $for_content__$params = ($scope, $params3) => _text($scope["#text/1"], $params3[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<em><!><!></em>", "D%b%", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [[1, 2]]);
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label__closure = /*@__PURE__*/ _closure($for_content__label);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $Panel_content__tag_input_label__closure);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $input_open = ($scope, input_open) => $Panel_content__isOpen($scope["#childScope/0"], input_open);
const $input_label = ($scope, input_label) => $Panel_content__tag_input_label($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_open($scope, input.open);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
