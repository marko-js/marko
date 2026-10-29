// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
function boom(error) {
	throw error;
}
const $try_content__input_error = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_error#0:6/init", /*@__PURE__*/ _closure_get("input_error/9", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_3_input_error#0:6/subscribe"));
const $try_content__setup = $try_content__input_error;
const $if_content__input_detail__script = _script("__tests__/template.marko_2_input_detail#0:5", ($scope) => console.log("detail", $scope._._.input_detail));
const $if_content__input_detail = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_detail#0:5/init", _closure_resume("__tests__/template.marko_2_input_detail#0:5/subscribe", /*@__PURE__*/ _closure_get("input_detail/8", ($scope) => {
	$if_content__input_detail__script($scope);
	_text($scope["#text/0"], $scope._._.input_detail);
}, ($scope) => $scope._._)));
const $if_content__setup = $if_content__input_detail;
const $catch_content__if = /*@__PURE__*/ _if("#text/1", "<i> </i>", "D ", $if_content__setup);
const $catch_content__input_detail = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_detail#0:5/init", _closure_resume("__tests__/template.marko_1_input_detail#0:5/subscribe", /*@__PURE__*/ _closure_get("input_detail/8", ($scope) => $catch_content__if($scope, $scope._.input_detail ? 0 : 1))));
const $catch_content__setup = $catch_content__input_detail;
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/2"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_detail($scope, input.detail);
	$input_error($scope, input.error);
};
const $input_detail__closure = /*@__PURE__*/ _closure($catch_content__input_detail, $if_content__input_detail);
const $input_detail = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_detail", $input_detail__closure));
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
