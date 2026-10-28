// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
function boom(error) {
	throw error;
}
const $catch_content__shown = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "shown/5", ($scope) => _text($scope["#text/1"], $scope.shown));
const $catch_content__err_message = $catch_content__shown;
const $catch_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$catch_content__shown($scope, $scope.shown + "!");
}));
const $catch_content__setup = $catch_content__setup__script;
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "<button> </button>", " D ", $catch_content__setup, $catch_content__$params);
const $try_content__input_error = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_error#0:3/init", /*@__PURE__*/ _closure_get("input_error/4", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_1_input_error#0:3/subscribe"));
const $try_content__setup = $try_content__input_error;
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup = $try;
const $input = ($scope, input) => $input_error($scope, input.error);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
