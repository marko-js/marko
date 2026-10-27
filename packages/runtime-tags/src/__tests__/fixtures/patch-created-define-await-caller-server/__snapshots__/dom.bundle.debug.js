// template.marko
const $Card_content__walks = "b%c";
const $Card_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $await_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $Card_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $Card_content__setup = $await_content;
const $Card_content__promise = $Card_content__await_promise;
const $Card_content__$params = ($scope, $params2) => $Card_content__$temp($scope, $params2[0]);
const $Card_content__$temp = ($scope, $temp) => $Card_content__promise($scope, $temp.promise);
const $if_content__input_p = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_p#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_p", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Card_content__promise($scope["#childScope/0"], $scope._.input_p))));
const $if_content__setup = ($scope) => {
	$if_content__input_p._($scope);
	$Card_content__setup($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_p($scope, input.p);
};
const $input_p = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_p", $if_content__input_p);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
