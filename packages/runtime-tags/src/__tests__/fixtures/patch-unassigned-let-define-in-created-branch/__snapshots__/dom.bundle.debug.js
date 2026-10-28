// template.marko
const $Show_content__walks = "D l";
const $Show_content__template = "<p> </p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $Show_content__x = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_x#1:1/init", /*@__PURE__*/ _closure_get("x/6", ($scope) => _text($scope["#text/0"], $scope._.x)));
const $Show_content__setup = $Show_content__x;
const $if_content__x__closure = /*@__PURE__*/ _closure($Show_content__x);
const $if_content__x = _fill_resume("__tests__/template.marko_fill1", /*@__PURE__*/ _let("x/1", $if_content__x__closure));
const $if_content__input_v = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_v#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_v", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__x($scope, $scope._.input_v))));
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$scope["#childScope/0"]._ = $scope;
	$Show_content__setup($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
};
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_v", $if_content__input_v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
