// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
_load_lazy("ready:__tests__/child.marko", () => import("./child.mjs").then(() => {}));
const $if_content__input_p = /*@__PURE__*/ _if_closure("#main/0", 0);
const $if_content__setup = $if_content__input_p;
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_p($scope, input.p);
	$input_show($scope, input.show);
};
const $input_p = /*@__PURE__*/ _const("input_p", $if_content__input_p);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__e_message = ($scope, e_message) => _text($scope["#text/0"], e_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__e_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/child.marko_3*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $placeholder_content = _content("__tests__/child.marko_2*content", "<i>loading</i>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_p = /*@__PURE__*/ _subscribe_closure_get("__tests__/child.marko_1_input_p#0:3/init", "input_p/4", ($scope) => $try_content__await_promise($scope, $scope._.input_p), 0, "__tests__/child.marko_1_input_p#0:3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_p($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => $input_p($scope, input.p);
const $input_p__closure = /*@__PURE__*/ _closure($try_content__input_p);
const $input_p = /*@__PURE__*/ _const("input_p", $input_p__closure);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b%c", $setup, $input);
