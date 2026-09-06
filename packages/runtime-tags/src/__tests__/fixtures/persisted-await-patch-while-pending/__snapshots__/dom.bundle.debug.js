// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", "<em>loading</em>");
const $await_content__input_msg = /*@__PURE__*/ _closure_get("input_msg", ($scope) => _text($scope["#text/0"], $scope._._.input_msg), ($scope) => $scope._._, "__tests__/template.marko_2_input_msg#6/pending");
const $await_content__setup = $await_content__input_msg;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=done><!> done</div>", "D%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
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
	$input_promise($scope, input.promise);
	$input_msg($scope, input.msg);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
const $input_msg__closure = /*@__PURE__*/ _closure($await_content__input_msg);
const $input_msg = /*@__PURE__*/ _const("input_msg", $input_msg__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
