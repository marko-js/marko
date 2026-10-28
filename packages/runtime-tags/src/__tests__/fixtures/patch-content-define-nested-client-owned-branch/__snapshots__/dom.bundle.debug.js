// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($Inner_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Outer_content__walks);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__body = /*@__PURE__*/ _fill_signal("body __tests__/template.marko_fill1", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.body)));
const $if_content__setup = $if_content__body;
const $Outer_content__open = ($scope, open) => $Inner_content__open($scope["#childScope/0"], open);
const $Outer_content__body = ($scope, body) => $Inner_content__tag_input_body($scope["#childScope/0"], body);
const $Outer_content__$params = ($scope, $params3) => $Outer_content__$temp($scope, $params3[0]);
const $Outer_content__$temp = ($scope, $temp2) => {
	$Outer_content__open($scope, $temp2.open);
	$Outer_content__body($scope, $temp2.body);
};
const $Inner_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $Inner_content__open = ($scope, open) => $Inner_content__if($scope, open ? 0 : 1);
const $Inner_content__tag_input_body = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "body", $if_content__body);
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => {
	$Inner_content__open($scope, $temp.open);
	$Inner_content__tag_input_body($scope, $temp.body);
};
const $body_content__input_title = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_title#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_title", /*@__PURE__*/ _closure_get("input_title/6", ($scope) => _text($scope["#text/0"], $scope._.input_title), 0, "__tests__/template.marko_1_input_title#0:4/subscribe"), 0));
const $body_content__setup = $body_content__input_title;
const $body_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $body_content__setup);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $Outer_content__open($scope["#childScope/0"], $scope.count % 2 === 0));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$Outer_content__body($scope["#childScope/0"], attrTag({ content: $body_content($scope) }));
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title__closure = /*@__PURE__*/ _closure($body_content__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
