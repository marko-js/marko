// tags/loader.marko
const $template$1 = "<div class=ld><!></div>";
const $walks$1 = "D%l";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
var loader_default = /*@__PURE__*/ _template("__tests__/tags/loader.marko", $template$1, "D%l", $setup$1, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__input_promise = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.input_promise));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup, "<em>closed</em>");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_promise($scope, input.promise);
};
const $input_promise = /*@__PURE__*/ _const("input_promise", $if_content__input_promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
