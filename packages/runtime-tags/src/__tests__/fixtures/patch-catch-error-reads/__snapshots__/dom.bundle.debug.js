// template.marko
const $template = "<main><!><!><button> </button></main>";
const $walks = "D%b%b D m";
function boom(error) {
	throw error;
}
const $catch_content2__cause_code = ($scope, cause_code) => _text($scope["#text/0"], cause_code);
const $catch_content2__$params = ($scope, $params4) => $catch_content2__cause_code($scope, $params4[0].cause?.code);
const $catch_content2 = _content("__tests__/template.marko_5*content", "<i> </i>", "D ", 0, $catch_content2__$params);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content2__input_error = /*@__PURE__*/ _closure_get("input_error/10", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_2_input_error#0:7/subscribe");
const $try_content2__setup = $try_content2__input_error;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise/9", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#0:6/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/8", ($scope) => _text($scope["#text/3"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
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
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_error($scope, input.error);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
const $input_error__closure = /*@__PURE__*/ _closure($try_content2__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
