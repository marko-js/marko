// template.marko
const $row_content__walks = "D%c%l", $row_content__template = "<li><!>: <!></li>";
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$row_content__setup._($scope["#childScope/0"], $scope._);
	$row_content__label($scope["#childScope/0"], "a");
	$row_content__setup._($scope["#childScope/1"], $scope._);
	$row_content__label($scope["#childScope/1"], "b");
};
const $row_content__input_suffix = /*@__PURE__*/ _closure_get("input_suffix", ($scope) => _text($scope["#text/1"], $scope._.input_suffix));
const $row_content__setup = /*@__PURE__*/ _child_setup($row_content__input_suffix);
const $row_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $row_content__$params = ($scope, $params2) => $row_content__label($scope, $params2[0]);
const $if = /*@__PURE__*/ _if("#ul/0", /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($row_content__template, $row_content__template), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($row_content__walks, $row_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_suffix($scope, input.suffix);
	$input_show($scope, input.show);
};
const $input_suffix__closure = /*@__PURE__*/ _closure($row_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _const("input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
