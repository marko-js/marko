// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__input_w = _resumed["__tests__/template.marko_1_input_w#0:4/patch"] = _with_branches(/*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _closure_get("input_w/6", ($scope) => _text($scope["#text/1"], $scope._.input_w), 0, "__tests__/template.marko_1_input_w#0:4/subscribe"), 0));
const $await_content__setup = $await_content__input_w;
const $await_content__r = ($scope, r) => _text($scope["#text/0"], r);
const $await_content__$params = ($scope, $params2) => $await_content__r($scope, $params2[0]);
const $await_content = _resumed["__tests__/template.marko_0_#text#0/init"] = /*@__PURE__*/ _await_content("#text/0", "<p><!> <!></p>", "D%c%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $x = /*@__PURE__*/ _let("x/5", ($scope) => $await_promise($scope, Promise.resolve($scope.x)));
const $input_v = $x;
const $setup = $await_content;
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($await_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
