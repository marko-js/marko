// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
function boom() {
	throw new Error("boom");
}
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__input_message = /*@__PURE__*/ _closure_get("input_message", ($scope) => _text($scope["#text/0"], $scope._.input_message));
const $try_content__setup = ($scope) => {
	$try_content__input_message($scope);
	$try_content__input_boom($scope);
};
const $try_content__input_boom = /*@__PURE__*/ _closure_get("input_boom", ($scope) => _text($scope["#text/1"], $scope._.input_boom ? boom() : ""));
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/2"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/0", "<em><!><!></em>", "D%b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_message($scope, input.message);
	$input_boom($scope, input.boom);
};
const $input_message__closure = /*@__PURE__*/ _closure($try_content__input_message);
const $input_message = /*@__PURE__*/ _const("input_message", $input_message__closure);
const $input_boom__closure = /*@__PURE__*/ _closure($try_content__input_boom);
const $input_boom = /*@__PURE__*/ _const("input_boom", $input_boom__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
