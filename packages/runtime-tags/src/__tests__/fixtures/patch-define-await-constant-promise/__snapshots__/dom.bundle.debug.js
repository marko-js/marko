// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($D_content__walks);
const p = Promise.resolve("x");
const $await_content__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
const $if_content__setup = ($scope) => {
	$D_content__setup($scope["#childScope/0"]);
	$D_content__promise($scope["#childScope/0"], p);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ");
const $D_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $D_content__setup = $await_content;
const $D_content__promise = $D_content__await_promise;
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__promise($scope, $temp.promise);
function $setup($scope) {
	$D_content__setup($scope["#childScope/0"]);
	$D_content__promise($scope["#childScope/0"], p);
}
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
