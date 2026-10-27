// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
function boom(error) {
	throw error;
}
const $catch_content2__err_cause_code__script = _script("__tests__/template.marko_4_err_cause_code#3", ($scope) => console.log($scope.err_cause_code));
const $catch_content2__err_cause_code = /*@__PURE__*/ _const("err_cause_code", $catch_content2__err_cause_code__script);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_cause_code($scope, $params3[0]?.cause?.code);
const $catch_content2 = _content("__tests__/template.marko_4*content", 0, 0, 0, $catch_content2__$params);
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", ($scope) => _text($scope["#text/0"], $scope.err_message));
const $catch_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/1"], "click", function() {
	console.log($scope.err_message);
}));
const $catch_content__setup = $catch_content__setup__script;
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", "<b> </b><button>log</button>", "D l ", $catch_content__setup, $catch_content__$params);
const $try_content2__input_error = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_error#0:4/init", /*@__PURE__*/ _closure_get("input_error/5", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_2_input_error#0:4/subscribe"));
const $try_content2__setup = $try_content2__input_error;
const $try_content__input_error = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_error#0:4/init", /*@__PURE__*/ _closure_get("input_error/5", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_1_input_error#0:4/subscribe"));
const $try_content__setup = $try_content__input_error;
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $try2 = /*@__PURE__*/ _try("#text/1", "<p> </p>", "D ", $try_content2__setup, 0, $catch_content2);
function $setup($scope) {
	$try($scope);
	$try2($scope);
}
const $input = ($scope, input) => $input_error($scope, input.error);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error, $try_content2__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
