// template.marko
const $template = "<main><!><button>x</button></main>";
const $walks = "D%b l";
const $await_content2__c = ($scope, c) => _text($scope["#text/0"], c);
const $await_content2__$params = ($scope, $params4) => $await_content2__c($scope, $params4[0]);
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__$params = ($scope, $params3) => $await_content__a($scope, $params3[0]);
const $catch_content__e_message = ($scope, e_message) => _text($scope["#text/0"], e_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__e_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_5*content", "<s> </s>", "D ", 0, $catch_content__$params);
const $placeholder_content = _content("__tests__/template.marko_4*content", "<i>loading</i>");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $if_content__pending = /*@__PURE__*/ _closure_get("pending/7", ($scope) => $if_content__await_promise($scope, $scope._._.pending), ($scope) => $scope._._, "__tests__/template.marko_3_pending#0:5/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__pending($scope);
	$await_content2($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<b> </b>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__input_a = /*@__PURE__*/ _closure_get("input_a/6", ($scope) => $try_content2__await_promise($scope, $scope._._.input_a), ($scope) => $scope._._, "__tests__/template.marko_2_input_a#0:4/subscribe");
const $try_content2__setup = ($scope) => {
	$try_content2__input_a($scope);
	$await_content($scope);
};
const $try_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $try_content__pending = /*@__PURE__*/ _closure_get("pending/7", ($scope) => $try_content__if($scope, $scope._.pending ? 0 : 1), 0, "__tests__/template.marko_1_pending#0:5/subscribe");
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content);
const $try_content__setup = ($scope) => {
	$try_content__pending($scope);
	$try_content__try($scope);
};
const $pending__closure = /*@__PURE__*/ _closure($try_content__pending, $if_content__pending);
const $pending = /*@__PURE__*/ _let("pending/5", $pending__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<div><!><!></div>", "D%b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$pending($scope, new Promise((r) => globalThis.__resolve = r));
}));
function $setup($scope) {
	$pending($scope, null);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_a($scope, input.a);
const $input_a__closure = /*@__PURE__*/ _closure($try_content2__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
