// template.marko
const $E_content__walks = "D l";
const $E_content__template = "<span> </span>";
const $D_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($E_content__walks);
const $D_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($E_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks);
const $D_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$E_content__setup($scope["#childScope/0"]);
};
const $E_content__input_x = /*@__PURE__*/ _closure_get("input_x/4", ($scope) => _text($scope["#text/0"], $scope._.input_x), 0, "__tests__/template.marko_1_input_x#0:3/subscribe");
const $E_content__setup = $E_content__input_x;
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$D_content__setup($scope["#childScope/0"]);
}
const $input = ($scope, input) => $input_x($scope, input.x);
const $input_x__closure = /*@__PURE__*/ _closure($E_content__input_x);
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
