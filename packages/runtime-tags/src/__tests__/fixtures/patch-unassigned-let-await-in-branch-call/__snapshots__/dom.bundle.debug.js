// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<p> </p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $await_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._._;
	$Body_content__setup($scope["#childScope/0"]);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks), $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $if_content__input_v = _resumed["__tests__/template.marko_2_input_v#0:5/patch"] = _with_branches(/*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_v", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.input_v)))));
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$await_content($scope);
};
const $Body_content__input_w = _resumed["__tests__/template.marko_1_input_w#0:4/patch"] = _with_branches(/*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _closure_get("input_w/7", ($scope) => _text($scope["#text/0"], $scope._.input_w), 0, "__tests__/template.marko_1_input_w#0:4/subscribe"), 0));
const $Body_content__setup = $Body_content__input_w;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $input_show = $show;
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_w($scope, input.w);
	$input_v($scope, input.v);
};
const $input_w__closure = /*@__PURE__*/ _closure($Body_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $input_w__closure);
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_v", $if_content__input_v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
