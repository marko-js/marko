// tags/detail-view.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom(error) {
	throw error;
}
const $try_content__input_error = /*@__PURE__*/ _init_resume("__tests__/tags/detail-view.marko_3_input_error#0:4/init", /*@__PURE__*/ _closure_get("input_error/6", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/tags/detail-view.marko_3_input_error#0:4/subscribe"));
const $try_content__setup = $try_content__input_error;
const $if_content__input_detail__script = _script("__tests__/tags/detail-view.marko_2_input_detail#0:3", ($scope) => console.log("detail", $scope._._.input_detail));
const $if_content__input_detail = /*@__PURE__*/ _init_resume("__tests__/tags/detail-view.marko_2_input_detail#0:3/init", _fill_join_closure("__tests__/tags/detail-view.marko_fill0", "input_detail", /*@__PURE__*/ _closure_get("input_detail/5", ($scope) => {
	$if_content__input_detail__script($scope);
	_text($scope["#text/0"], $scope._._.input_detail);
}, ($scope) => $scope._._, "__tests__/tags/detail-view.marko_2_input_detail#0:3/subscribe"), 1));
const $if_content__setup = $if_content__input_detail;
const $catch_content__if = /*@__PURE__*/ _if("#text/1", "<i> </i>", "D ", $if_content__setup);
const $catch_content__input_detail = /*@__PURE__*/ _init_resume("__tests__/tags/detail-view.marko_1_input_detail#0:3/init", _fill_join_closure("__tests__/tags/detail-view.marko_fill0", "input_detail", /*@__PURE__*/ _closure_get("input_detail/5", ($scope) => $catch_content__if($scope, $scope._.input_detail ? 0 : 1), 0, "__tests__/tags/detail-view.marko_1_input_detail#0:3/subscribe"), 0));
const $catch_content__setup = $catch_content__input_detail;
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/tags/detail-view.marko_1*content", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup$1($scope) {
	$try($scope);
}
const $input$1 = ($scope, input) => {
	$input_detail$1($scope, input.detail);
	$input_error$1($scope, input.error);
};
const $input_detail__closure = /*@__PURE__*/ _closure($catch_content__input_detail, $if_content__input_detail);
const $input_detail$1 = /*@__PURE__*/ _fill_const("__tests__/tags/detail-view.marko_fill0", "input_detail", $input_detail__closure);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error$1 = /*@__PURE__*/ _const("input_error", $input_error__closure);
var detail_view_default = /*@__PURE__*/ _template("__tests__/tags/detail-view.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<button> </button></main>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}& D m`)("b%c", "b%c");
const $count = /*@__PURE__*/ _let("count/8", ($scope) => {
	$input_detail$1($scope["#childScope/1"], $scope.count ? "n" + $scope.count : "");
	_text($scope["#text/3"], $scope.count);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_error = ($scope, input_error) => {
	$input_error$1($scope["#childScope/0"], input_error);
	$input_error$1($scope["#childScope/1"], input_error);
};
const $input_detail = ($scope, input_detail) => $input_detail$1($scope["#childScope/0"], input_detail);
const $input = ($scope, input) => {
	$input_error($scope, input.error);
	$input_detail($scope, input.detail);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
