// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=done>done</div>");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $placeholder_content__input_msg = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_msg", /*@__PURE__*/ _closure_get("input_msg", ($scope) => _text($scope["#text/0"], $scope._.input_msg)), 0);
const $placeholder_content__setup = $placeholder_content__input_msg;
const $placeholder_content = _content_resume("__tests__/template.marko_1*content", "<em>loading <!></em>", "Db%", $placeholder_content__setup);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_msg($scope, input.msg);
	$input_promise($scope, input.promise);
};
const $input_msg__closure = /*@__PURE__*/ _closure($placeholder_content__input_msg);
const $input_msg = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_msg", $input_msg__closure);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
