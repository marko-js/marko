// template.marko
const $template = "<main><!><button>x</button></main>";
const $walks = "D%b l";
const $await_content2__b = ($scope, b) => _text($scope["#text/0"], b);
const $await_content2__$params = ($scope, $params3) => $await_content2__b($scope, $params3[0]);
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", "<i>loading</i>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<b> </b>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_fast = /*@__PURE__*/ _closure_get("input_fast", ($scope) => $if_content__await_promise($scope, $scope._._.input_fast), ($scope) => $scope._._, "__tests__/template.marko_2_input_fast#5/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__input_fast($scope);
	$await_content($scope);
};
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $try_content__input_show = /*@__PURE__*/ _closure_get("input_show", ($scope) => $try_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/template.marko_1_input_show#4/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_show($scope);
	$try_content__input_slow($scope);
	$await_content2($scope);
};
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content__input_slow = /*@__PURE__*/ _closure_get("input_slow", ($scope) => $try_content__await_promise($scope, $scope._.input_slow), 0, "__tests__/template.marko_1_input_slow#6/subscribe");
const $try = /*@__PURE__*/ _try("#text/0", "<div><!><!></div>", "D%b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {}));
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_fast($scope, input.fast);
	$input_slow($scope, input.slow);
};
const $input_show__closure = /*@__PURE__*/ _closure($try_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
const $input_fast__closure = /*@__PURE__*/ _closure($if_content__input_fast);
const $input_fast = /*@__PURE__*/ _const("input_fast", $input_fast__closure);
const $input_slow__closure = /*@__PURE__*/ _closure($try_content__input_slow);
const $input_slow = /*@__PURE__*/ _const("input_slow", $input_slow__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
