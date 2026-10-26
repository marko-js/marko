// tags/my-child/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__input_msg = /*@__PURE__*/ _init_resume("__tests__/tags/my-child/index.marko_1_input_msg#0:4/init", /*@__PURE__*/ _closure_get("input_msg/5", ($scope) => _text($scope["#text/0"], $scope._.input_msg), 0, "__tests__/tags/my-child/index.marko_1_input_msg#0:4/subscribe"));
const $await_content__setup = $await_content__input_msg;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=done><!> done</div>", "D%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise$1($scope, input.promise);
	$input_msg$1($scope, input.msg);
};
const $input_msg__closure$1 = /*@__PURE__*/ _closure($await_content__input_msg);
const $input_msg$1 = /*@__PURE__*/ _fill_const("__tests__/tags/my-child/index.marko_fill0", "input_msg", $input_msg__closure$1);
var my_child_default = /*@__PURE__*/ _template("__tests__/tags/my-child/index.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $placeholder_content = _content("__tests__/template.marko_2*content", "<em>loading</em>");
const $try_content__input_msg = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_msg#0:5/init", /*@__PURE__*/ _closure_get("input_msg/8", ($scope) => $input_msg$1($scope["#childScope/0"], $scope._.input_msg), 0, "__tests__/template.marko_1_input_msg#0:5/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_msg($scope);
	$try_content__input_promise($scope);
	$setup$1($scope["#childScope/0"]);
};
const $try_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_promise#0:6/init", /*@__PURE__*/ _closure_get("input_promise/9", ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#0:6/subscribe"));
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/2", /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$1), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_msg($scope, input.msg);
	$input_promise($scope, input.promise);
};
const $input_msg__closure = /*@__PURE__*/ _closure($try_content__input_msg);
const $input_msg = /*@__PURE__*/ _const("input_msg", $input_msg__closure);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
