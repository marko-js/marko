// tags/child.marko
const $template$3 = "";
const $walks$3 = "";
const $setup$3 = () => {};
const $input_x$1 = /*@__PURE__*/ _const("input_x", ($scope) => _return($scope, $scope.input_x));
const $input$2 = ($scope, input) => $input_x$1($scope, input.x);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, $input$2);

// tags/row.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `${_w0}<p class=row> </p>`)("");
const $walks$2 = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("");
const $v = _var_resume("__tests__/tags/row.marko_0_v#6/var", ($scope, v) => _text($scope["#text/2"], v));
function $setup$2($scope) {
	_var($scope, "#childScope/0", $v);
}
const $input_x = ($scope, input_x) => $input_x$1($scope["#childScope/0"], input_x);
const $input$1 = ($scope, input) => $input_x($scope, input.x);
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content, () => ({ value: "w" }));
const $input = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "b%c", 0, $input);

// template.marko
const $Count_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(""), $Count_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<p class=define> </p>`)("");
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button></button><!>${_w0}${_w1}<!><!><!>`)($Count_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b%b/${_w0}&/${_w1}&%b%c`)($Count_content__walks, "b%c");
const $await_content2__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content2__$params = ($scope, $params7) => $await_content2__value($scope, $params7[0]);
const $catch_content__v = _var_resume("__tests__/template.marko_6_v#6/var", ($scope, v) => _text($scope["#text/2"], v));
const $catch_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $catch_content__v);
};
const $catch_content__err_message = ($scope, err_message) => $input_x$1($scope["#childScope/0"], err_message);
const $catch_content__$params = ($scope, $params6) => $catch_content__err_message($scope, $params6[0]?.message);
const $catch_content = _content("__tests__/template.marko_6*content", /*@__PURE__*/ ((_w0) => `${_w0}<p class=catch> </p>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(""), $catch_content__setup, $catch_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("e"), 2));
};
const $await_content__v = ($scope, v) => _text($scope["#text/2"], v);
const $await_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $await_content__v);
};
const $await_content__value = ($scope, value) => $input_x$1($scope["#childScope/0"], value);
const $await_content__$params = ($scope, $params5) => $await_content__value($scope, $params5[0]);
const $wrap_content__v = _var_resume("__tests__/template.marko_3_v#6/var", ($scope, v) => _text($scope["#text/2"], v));
const $wrap_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $wrap_content__v);
};
const $wrap_content__value = ($scope, value) => $input_x$1($scope["#childScope/0"], value);
const $wrap_content__$params = ($scope, $params4) => $wrap_content__value($scope, ($params4?.[0]).value);
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", /*@__PURE__*/ ((_w0) => `${_w0}<p class=wrap> </p>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(""), $wrap_content__setup, $wrap_content__$params);
const $Count_content__v = _var_resume("__tests__/template.marko_2_v#6/var", ($scope, v) => _text($scope["#text/2"], v));
const $Count_content__setup = /*@__PURE__*/ _child_setup(($scope) => _var($scope, "#childScope/0", $Count_content__v));
const $Count_content__x = ($scope, x) => $input_x$1($scope["#childScope/0"], x);
const $Count_content__$params = ($scope, $params3) => $Count_content__$temp($scope, $params3?.[0]);
const $Count_content__$temp = ($scope, $temp) => $Count_content__x($scope, $temp.x);
const $for_content__v = _var_resume("__tests__/template.marko_1_v#6/var", ($scope, v) => _text($scope["#text/2"], v));
const $for_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $for_content__v);
	$setup$2($scope["#childScope/3"]);
};
const $for_content__item = ($scope, item) => {
	$input_x$1($scope["#childScope/0"], item);
	$input_x($scope["#childScope/3"], item);
};
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", /*@__PURE__*/ ((_w0, _w1) => `${_w0}<p> </p>${_w1}`)("", $template$2), /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&D l/${_w1}&`)("", $walks$2), $for_content__setup, $for_content__$params);
const $list = /*@__PURE__*/ _let("list/6", ($scope) => {
	$list_length($scope, $scope.list?.length);
	$for($scope, [$scope.list]);
});
const $list_length = /*@__PURE__*/ _const("list_length", ($scope) => $Count_content__x($scope["#childScope/2"], $scope.list_length));
const $await_content = /*@__PURE__*/ _await_content("#text/4", /*@__PURE__*/ ((_w0) => `${_w0}<p class=await> </p>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(""), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/4", $await_content__$params);
const $try = /*@__PURE__*/ _try("#text/5", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$list($scope, [...$scope.list, "c"]);
}));
function $setup($scope) {
	$Count_content__setup._($scope["#childScope/2"], $scope);
	$input_content($scope["#childScope/3"], $wrap_content($scope));
	$await_content($scope);
	$list($scope, ["a", "b"]);
	$await_promise($scope, resolveAfter("a", 1));
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
