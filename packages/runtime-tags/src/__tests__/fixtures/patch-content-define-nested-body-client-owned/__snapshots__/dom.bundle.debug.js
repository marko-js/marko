// template.marko
const $Inner_content2__walks = "b%c";
const $Inner_content2__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content2__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content2__template);
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Outer_content__walks);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content)));
const $if_content__setup = $if_content__content;
const $Inner_content2__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $Inner_content2__open = ($scope, open) => $Inner_content2__if($scope, open ? 0 : 1);
const $Inner_content2__tag_input_content = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "content", $if_content__content);
const $Inner_content2__$params = ($scope, $params2) => $Inner_content2__$temp($scope, $params2[0]);
const $Inner_content2__$temp = ($scope, $temp) => {
	$Inner_content2__open($scope, $temp.open);
	$Inner_content2__tag_input_content($scope, $temp.content);
};
const $Inner_content__input_title = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_title#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_title", /*@__PURE__*/ _closure_get("input_title/6", ($scope) => _text($scope["#text/0"], $scope._._.input_title), ($scope) => $scope._._, "__tests__/template.marko_2_input_title#0:4/subscribe"), 0));
const $Inner_content__setup = $Inner_content__input_title;
const $Inner_content = _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $Inner_content__setup);
const $Outer_content__setup = ($scope) => $Inner_content2__tag_input_content($scope["#childScope/0"], $Inner_content($scope));
const $Outer_content__open = ($scope, open) => $Inner_content2__open($scope["#childScope/0"], open);
const $Outer_content__$params = ($scope, $params3) => $Outer_content__$temp($scope, $params3[0]);
const $Outer_content__$temp = ($scope, $temp2) => $Outer_content__open($scope, $temp2.open);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $Outer_content__open($scope["#childScope/0"], $scope.count % 2 === 0));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Outer_content__setup($scope["#childScope/0"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title__closure = /*@__PURE__*/ _closure($Inner_content__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
