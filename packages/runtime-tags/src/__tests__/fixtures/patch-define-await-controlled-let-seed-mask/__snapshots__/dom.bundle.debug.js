// template.marko
const $S_content__walks = "b%c";
const $S_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__c = _fill_let_change_resume("__tests__/template.marko_3_c#4/fill", "c/4", ($scope) => _text($scope["#text/0"], $scope.c));
const $await_content__s = _let("s/3", ($scope) => $await_content__c($scope, $scope.s, $valueChange($scope)));
const $await_content__$params = ($scope, $params3) => $await_content__s($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ");
const $S_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $S_content__setup = $await_content;
const $S_content__promise = $S_content__await_promise;
const $S_content__$params = ($scope, $params2) => $S_content__$temp($scope, $params2[0]);
const $S_content__$temp = ($scope, $temp) => $S_content__promise($scope, $temp.promise);
const $if_content__p = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_p#0:4/setup", "#text/0", 0, ($scope) => $S_content__promise($scope["#childScope/0"], $scope._.p));
const $if_content__setup = ($scope) => {
	$if_content__p._($scope);
	$S_content__setup($scope["#childScope/0"]);
};
const $p = _let("p/4", $if_content__p);
function $setup($scope) {
	$p($scope, resolveAfter("x", 1));
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($S_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($S_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
const $valueChange = ($scope) => function(v) {
	$await_content__s($scope, v);
};
_resumed["__tests__/template.marko_3/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
