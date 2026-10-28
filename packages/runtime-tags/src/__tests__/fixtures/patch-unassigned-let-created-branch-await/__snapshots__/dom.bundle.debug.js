// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $await_content__r = ($scope, r) => _text($scope["#text/0"], r);
const $await_content__$params = ($scope, $params2) => $await_content__r($scope, $params2[0]);
const $await_content = _resumed["__tests__/template.marko_1_#text#0/init"] = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__x = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_x#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.x))));
const $if_content__setup = ($scope) => {
	$if_content__x._($scope);
	$await_content($scope);
};
const $x = _let("x/5", $if_content__x);
const $input_v = $x;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
