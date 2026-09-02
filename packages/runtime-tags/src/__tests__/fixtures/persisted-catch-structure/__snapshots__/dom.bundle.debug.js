// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span>ok</span>");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $if_content__input_detail = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_detail", /*@__PURE__*/ _closure_get("input_detail", ($scope) => _text($scope["#text/0"], $scope._._.input_detail), ($scope) => $scope._._), 1);
const $if_content__setup = $if_content__input_detail;
const $catch_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $catch_content__input_detail = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_detail", /*@__PURE__*/ _closure_get("input_detail", ($scope) => $catch_content__if($scope, $scope._.input_detail ? 0 : 1)), 0);
const $catch_content__setup = $catch_content__input_detail;
const $catch_content = _content_resume("__tests__/template.marko_1*content", "<!><!><!>", "b%", $catch_content__setup);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/2"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_detail($scope, input.detail);
	$input_promise($scope, input.promise);
};
const $input_detail__closure = /*@__PURE__*/ _closure($catch_content__input_detail, $if_content__input_detail);
const $input_detail = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_detail", $input_detail__closure);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
