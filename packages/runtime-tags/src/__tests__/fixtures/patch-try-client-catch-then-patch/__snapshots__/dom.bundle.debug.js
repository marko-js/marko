// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
function boom() {
	throw new Error("boom");
}
const $try_content__input_message = _closure_resume("__tests__/template.marko_2_input_message#0:5/subscribe", /*@__PURE__*/ _closure_get("input_message/7", ($scope) => _text($scope["#text/0"], $scope._.input_message)));
const $try_content__setup = ($scope) => {
	$try_content__input_message($scope);
	$try_content__count($scope);
};
const $try_content__count = _resumed["__tests__/template.marko_2_count#0:6/init"] = /*@__PURE__*/ _closure_get("count/8", ($scope) => _text($scope["#text/1"], $scope._.count === 1 ? boom() : ""), 0, "__tests__/template.marko_2_count#0:6/subscribe");
const $catch_content__input_message = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_message", /*@__PURE__*/ _closure_get("input_message/7", ($scope) => _text($scope["#text/1"], $scope._.input_message), 0, "__tests__/template.marko_1_input_message#0:5/subscribe"), 0);
const $catch_content__setup = $catch_content__input_message;
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", "<b><!> <!></b>", "D%c%", $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "count/6", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$count__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/0", "<em><!><!></em>", "D%b%", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$try($scope);
	$setup__script($scope);
	$count($scope, 0);
}
const $input = ($scope, input) => $input_message($scope, input.message);
const $input_message__closure = /*@__PURE__*/ _closure($catch_content__input_message, $try_content__input_message);
const $input_message = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_message", $input_message__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
