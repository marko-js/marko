// template.marko
const $Card_content__walks = "D l";
const $Card_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Card_content__walks);
const $setup = ($_) => {};
const $Card_content__o = /*@__PURE__*/ _let("o/4", ($scope) => _text($scope["#text/0"], $scope.o.fn()));
const $Card_content__opts = $Card_content__o;
const $Card_content__$params = ($scope, $params2) => $Card_content__$temp($scope, $params2[0]);
const $Card_content__$temp = ($scope, $temp) => $Card_content__opts($scope, $temp.opts);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $Card_content__opts($scope["#childScope/0"], { fn() {
	return "if:" + $scope._.input_label;
} }));
const $if_content__setup = $if_content__input_label;
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$Card_content__opts($scope["#childScope/0"], { fn() {
		return "root:" + $scope.input_label;
	} });
	$if_content__input_label($scope);
});
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
