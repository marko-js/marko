// template.marko
const $template = "<main><!><!><button> </button></main>";
const $walks = "D%b%b D m";
function boom(error) {
	throw error;
}
const $catch_content2__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_message($scope, $params3[0]?.message);
const $catch_content2 = _content("__tests__/template.marko_4*content", "<i> </i>", "D ", 0, $catch_content2__$params);
const $catch_content__err = ($scope, err) => _text($scope["#text/0"], err);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content = _content("__tests__/template.marko_3*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content2__input_error = /*@__PURE__*/ _closure_get("input_error/8", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_2_input_error#0:6/subscribe");
const $try_content2__setup = $try_content2__input_error;
const $try_content__input_error = /*@__PURE__*/ _closure_get("input_error/8", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_1_input_error#0:6/subscribe");
const $try_content__setup = $try_content__input_error;
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/7", ($scope) => _text($scope["#text/3"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $try2 = /*@__PURE__*/ _try("#text/1", "<p> </p>", "D ", $try_content2__setup, 0, $catch_content2);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$try($scope);
	$try2($scope);
	$setup__script($scope);
	$count($scope, 0);
}
const $input = ($scope, input) => $input_error($scope, input.error);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error, $try_content2__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
